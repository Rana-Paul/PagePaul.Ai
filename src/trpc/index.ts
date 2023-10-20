import { z } from "zod";
import { PrivateProcedure, procedure, router } from "./trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const appRouter = router({
  authCallback: procedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user.id || !user.email) throw new TRPCError({ code: "UNAUTHORIZED" });

    const dbUser = await db.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }

    return { success: true };
  }),

  getUserFiles: PrivateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    return await db.file.findMany({
      where: {
        userId,
      },
    });
  }),

  deleteFile: PrivateProcedure.input(z.object({id: z.string()}))
  .mutation(async ({ input, ctx }) => {
    const { userId } = ctx;

    const file = await db.file.findFirst({
      where: {
        id: input.id,
        userId
      },
    });

    if(!file) throw new TRPCError({ code: "NOT_FOUND" });

    await db.file.delete({
      where: {
        id: input.id,
        userId
      },
    })
    return file;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
