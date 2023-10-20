"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(x) => {
        if (!x) setIsOpen(x);
      }}>

      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>
            Upload PDF
        </Button>
      </DialogTrigger>

      <DialogContent>Test</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
