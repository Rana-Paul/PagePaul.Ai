"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

import Dropzone from "react-dropzone";
import { CloudIcon, File, Loader2 } from "lucide-react";
import { Progress } from "./ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "./ui/use-toast";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";

const UploadDropzone = () => {
  const [isUploaading, setIsUploading] = useState<boolean>(false);
  const [uploadProgess, setUploadProgress] = useState<number>(0);
  const { toast } = useToast();
  const router = useRouter();

  const { startUpload } = useUploadThing("pdfUploader");

  const { mutate: startPolling } = trpc.getFile.useMutation({
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`);
    },
    retry: true,
    retryDelay: 500,
  });

  const startSimulatedProgress = () => {
    // setIsUploading(true);
    setUploadProgress(0);

    const intervel = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          // setIsUploading(false);
          clearInterval(intervel);
          return prev;
        }
        return prev + 5;
      });
    }, 500);

    return intervel;
  };
  return (
    <Dropzone
      multiple={false}
      onDrop={async (file) => {
        setIsUploading(true);
        const progessIntervel = startSimulatedProgress();

        //upload file
        const res = await startUpload(file);

        if (!res) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        const [fileRes] = res;

        const key = fileRes?.key;
        if (!key) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        //clear interval
        clearInterval(progessIntervel);
        setUploadProgress(100);

        //polling for file
        startPolling({ key });
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          className="border h-64 m-4 border-dashed border-gray-300 rounded-lg"
          {...getRootProps()}
        >
          <input {...getInputProps()} type="file" className="hidden" />
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dopzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <CloudIcon className="h-6 w-6 text-zinc-500 mb-2" />
                <p className="mb-2 text-sm text-zinc-700">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-zinc-500">PDF (up to 4MB)</p>
              </div>

              {acceptedFiles && acceptedFiles[0] && (
                <div className=" max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <File className="h-4 w-4 text-blue-500" />
                  </div>

                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              )}

              {isUploaading && (
                <div className="w-full mt-4 max-w-xs mx-auto">
                  <Progress
                  indicatorColor={
                    uploadProgess === 100
                      ? "green"
                      : ""
                  }
                    value={uploadProgess}
                    className="h-1 w-full bg-zinc-200 "
                  />
                  {uploadProgess === 100 && (
                    <div className="flex gap-1 items-center justify-center text-sm text-zinc-700 text-center pt-2">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Redirecting...
                    </div>
                  )}
                </div>
              )}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(x) => {
        if (!x) setIsOpen(x);
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        <UploadDropzone />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
