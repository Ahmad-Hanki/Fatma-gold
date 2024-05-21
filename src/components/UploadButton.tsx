"use client";

import { UploadButton } from "@/utils/uploadthing";

interface UploadButtonComponentProps {
  setImage: any;
}

export default function UploadButtonComponent({
  setImage,
}: UploadButtonComponentProps) {
  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          const urls = res.map((item: any) => item.url);
          setImage(urls);
          console.log(urls);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
