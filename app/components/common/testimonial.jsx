import { UserCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      
        <div className="flex items-center justify-center space-x-3 "> 
          <StarIcon className="text-indigo-600 h-6"/>
          <StarIcon className="text-indigo-600 h-6"/>
          <StarIcon className="text-indigo-600 h-6"/>
          <StarIcon className="text-indigo-600 h-6"/>
          <StarIcon className="text-indigo-600 h-6"/>

        </div>
    
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “Abiodun is an exceptional freelancer. Exceptional. He goes the extra mile to a level that is hardly, if ever, seen. He truly goes above and beyond. I cannot recommend him highly enough.”
            </p>
          </blockquote>

          <figcaption className="mt-10">
            <UserCircleIcon className="size-10 text-gray-700 mx-auto"  />

            <div className="mt-4 flex items-center justify-center space-x-3 text-base">

              <div className="font-semibold text-gray-900">Sarah Chukwudebe</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Cordova</div>
            </div>

          </figcaption>
        </figure>

      </div>
    </section>
  )
}

