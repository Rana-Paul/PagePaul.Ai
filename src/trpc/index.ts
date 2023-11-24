import { z } from "zod";
import { PrivateProcedure, procedure, router } from "./trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const appRouter = router({
  authCallback: procedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    console.log("here", user);
    

    if (!user || !user.email || !user.id) {
      console.log("error");
      throw new TRPCError({ code: "UNAUTHORIZED" })
      
    };

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

  getFileUploadStatus: PrivateProcedure.input(z.object({fileId: z.string()})).query(async ({ input, ctx }) => {
    const file = await db.file.findFirst({
      where: {
        id: input.fileId,
        userId: ctx.userId,
      },
    });

    if(!file) return {status: 'PENDING' as const};

    return {status: file.uploadStatus};
    }),

  getFile: PrivateProcedure.input(z.object({key: z.string()})).mutation(async ({ input, ctx }) => {
    const { userId } = ctx;
    const file = await db.file.findFirst({
      where: {
        key: input.key,
        userId
      },
    })
    if(!file) throw new TRPCError({ code: "NOT_FOUND" });

    return file

  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
