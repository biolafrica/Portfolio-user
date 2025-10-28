export default function FooterHeroSection(){
  return (
    <section className="w-full flex items-center justify-center  px-4 py-20 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto text-center">
       
        <div className="mx-auto max-w-2xl lg:text-center">

          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Boost your productivity.
            <br />
            <span className="block mt-2">Start using our app today.</span>
          </p>

          <p className="mt-6 text-lg/8 text-gray-700">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id 
            veniam aliqua proident excepteur commodo do ea.
          </p>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-5">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Book a call
          </a>
        </div>

      </div>
    </section>
    
  );
};

