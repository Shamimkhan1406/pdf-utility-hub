export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            PDF Utility Hub
          </h1>

          <p className="text-slate-300 text-lg">
            Merge multiple PDFs and download them instantly.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 shadow-2xl">

          <div className="border-2 border-dashed border-slate-600 rounded-2xl p-16 text-center">
            <p className="text-slate-400">
              Drag & Drop PDFs Here
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-blue-600 px-6 py-3 rounded-xl">
              Merge PDFs
            </button>

            <button className="bg-green-600 px-6 py-3 rounded-xl">
              Download ZIP
            </button>
          </div>
        </div>

        <div className="text-center mt-12 space-y-4">

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            className="inline-block bg-orange-500 px-6 py-3 rounded-xl font-semibold"
          >
            Built for Digital Heroes
          </a>

          <div>
            <p className="font-semibold">
              Shamim Khan
            </p>

            <p className="text-slate-400">
              shamim4khan0@gmail.com
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}