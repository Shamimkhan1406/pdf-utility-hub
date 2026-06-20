"use client";

import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

interface Props {
  onFilesAdded: (files: File[]) => void;
}

export default function FileUploader({ onFilesAdded }: Props) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => {
      onFilesAdded(acceptedFiles);
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-2xl p-12
        cursor-pointer transition-all duration-300
        ${
          isDragActive
            ? "border-blue-500 bg-blue-500/10"
            : "border-slate-600 hover:border-slate-400"
        }
      `}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center gap-4">
        <Upload size={40} />

        <h3 className="text-xl font-semibold">
          Upload PDF Files
        </h3>

        <p className="text-slate-400">
          Drag & drop PDFs here or click to browse
        </p>
      </div>
    </div>
  );
}