"use client";

import { useState } from "react";
import { saveAs } from "file-saver";

import FileUploader from "@/components/FileUploader";
import { mergePDFs } from "@/utils/pdfMerge";
import { createZip } from "@/utils/createZip";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [isMerging, setIsMerging] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Please upload at least 2 PDF files");
      return;
    }

    try {
      setIsMerging(true);

      const mergedPdfBytes = await mergePDFs(files);

      const blob = new Blob(
        [new Uint8Array(mergedPdfBytes)],
        {
          type: "application/pdf",
        }
      );

      saveAs(blob, "merged-document.pdf");
    } catch (error) {
      console.error(error);
      alert("Failed to merge PDFs");
    } finally {
      setIsMerging(false);
    }
  };

  const handleZipDownload = async () => {
    if (files.length === 0) {
      alert("Please upload PDFs first");
      return;
    }

    try {
      setIsZipping(true);

      const zipBlob = await createZip(files);

      saveAs(zipBlob, "pdf-files.zip");
    } catch (error) {
      console.error(error);
      alert("Failed to create ZIP");
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            PDF Utility Hub
          </h1>

          <p className="text-slate-300 text-lg">
            Merge multiple PDFs instantly.
          </p>
        </div>

        <FileUploader onFilesAdded={handleFilesAdded} />

        {files.length > 0 && (
          <div className="mt-8 bg-slate-900 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Uploaded Files ({files.length})
            </h2>

            <div className="space-y-3">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="flex justify-between items-center bg-slate-800 p-4 rounded-xl"
                >
                  <span className="truncate">
                    {file.name}
                  </span>

                  <span className="text-slate-400">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">

              <button
                onClick={handleMerge}
                disabled={isMerging}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-3 rounded-xl font-medium transition"
              >
                {isMerging ? "Merging..." : "Merge PDFs"}
              </button>

              <button
                onClick={handleZipDownload}
                disabled={isZipping}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 px-6 py-3 rounded-xl font-medium transition"
              >
                {isZipping ? "Creating ZIP..." : "Download ZIP"}
              </button>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}