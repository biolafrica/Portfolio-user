import CallToActionButton from "../common/callToActionButton";

export default function HeroSection() {

  return (
    <div className="bg-white">
  
      <div className="relative isolate px-6 pt-10 lg:px-32 ">

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>

        <div className=" max-w-3xl py-32 sm:py-48 lg:py-56">

          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Tell me about your project.{' '}
              <CallToActionButton label="Book a call →" href="#" variant="text" />
            </div>
          </div>

          <div className="">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Full-Stack Developer Building Scalable Web App.
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              I'm Abiodun Biobaku, a software engineer based in the UK, helping startups and businesses build fast, reliable web applications. 
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <CallToActionButton label="Book a call" href="#" />
              <CallToActionButton label="Email me →" href="#" variant="text" color="gray" />

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
