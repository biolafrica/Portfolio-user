// app/loading.jsx
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
            <img src="/favicon.ico" alt="Logo" className="w-10 h-10" />
          </div>
          <div className="absolute inset-0 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
        <div className="w-56 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-purple-600 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
