export default function LoadingSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-2xl max-w-md mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-xl max-w-2xl mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-0 rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-gray-600">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/80 dark:bg-gray-800/80 p-8 border-r-2 border-gray-300 dark:border-gray-600 last:border-r-0 animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full mb-6"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-1/2 mx-auto mb-8"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}