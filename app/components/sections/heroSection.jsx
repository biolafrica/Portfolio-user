import Background from "../common/background";
import CallToActionButton from "../common/callToActionButton";

export default function HeroSection() {

  return (
    <div className="bg-white">
  
      <div className="relative isolate px-6 pt-10 lg:px-32 ">

        <Background/>

        <div className=" max-w-3xl py-32 sm:py-48 lg:py-56">

          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Tell me about your project.{' '}
              <CallToActionButton label="Book a call →" href="https://cal.com/abiodun-biobaku/30min" variant="text" />
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
              <CallToActionButton label="Book a call" href="https://cal.com/abiodun-biobaku/30min" target="_blank" />
              <CallToActionButton label="Email me →" href="mailto:biolafrica@gmail.com" variant="text" color="gray" />

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
