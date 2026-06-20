"use client";

import { useState } from "react";
import FileUploader from "@/components/FileUploader";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            PDF Utility Hub
          </h1>

          <p className="text-slate-300">
            Merge PDFs and download ZIP files instantly.
          </p>
        </div>

        <FileUploader onFilesAdded={handleFilesAdded} />

        {files.length > 0 && (
          <div className="mt-8 bg-slate-900 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Uploaded Files
            </h2>

            <div className="space-y-3">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex justify-between bg-slate-800 p-3 rounded-xl"
                >
                  <span>{file.name}</span>

                  <span>
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}