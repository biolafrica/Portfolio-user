// Enhanced Shimmer Effect
export default function Loading() {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border animate-pulse mx-auto max-w-4xl">

      <div className="relative h-[400px] md:h-64 lg:h-[450px] overflow-hidden bg-gray-200 px-6 md:px-40 ">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        
        {/* Content placeholders */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-800/80 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-20 bg-gray-400/50 rounded"></div>
            <div className="h-3 w-3 bg-gray-400/50 rounded-full"></div>
            <div className="h-3 w-28 bg-gray-400/50 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-5 bg-gray-400/50 rounded w-11/12"></div>
            <div className="h-5 bg-gray-400/50 rounded w-8/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}