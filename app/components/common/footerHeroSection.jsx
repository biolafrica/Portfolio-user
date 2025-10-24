

export default function FooterHeroSection(){
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-12 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100">
            Get started
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight mb-6 sm:mb-8">
          Boost your productivity.
          <br />
          <span className="block mt-2">Start using our app today.</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 px-4 leading-relaxed">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id 
          veniam aliqua proident excepteur commodo do ea.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-200 transform hover:scale-105 active:scale-95">
            Get started
          </button>
        </div>

      </div>
    </section>
    
  );
};

