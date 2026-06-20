import JSZip from "jszip";

export async function createZip(files: File[]) {
  const zip = new JSZip();

  for (const file of files) {
    zip.file(file.name, file);
  }

  return await zip.generateAsync({
    type: "blob",
  });
}
