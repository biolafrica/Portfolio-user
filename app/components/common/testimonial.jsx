import { UserCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const features =[
  {
    name: "Sarah Chukwudebe",
    role: "CEO of Cordova",
    feeback: '“Abiodun is an exceptional freelancer. Exceptional. He goes the extra mile to a level that is hardly, if ever, seen. He truly goes above and beyond. I cannot recommend him highly enough.”',
  },{
    name: "Idowu Fikayo",
    role: "CEO of 16Bags",
    feeback: '“Abiodun is an exceptional freelancer. Exceptional. He goes the extra mile to a level that is hardly, if ever, seen. He truly goes above and beyond. I cannot recommend him highly enough.”',
  }
]

export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-5">

      {features.map((feature,n) => (
        <div key={feature.name} className={`
          mx-auto max-w-3xl p-5 lg:max-w-3xl lg:p-10 
          ${ n < 1 ? "border-b border-gray-200 lg:border-r lg:border-b-neutral-50": "" } 
        `}>
        
          <div className="flex items-center space-x-3 ">
            <StarIcon className="text-indigo-600 h-6"/>
            <StarIcon className="text-indigo-600 h-6"/>
            <StarIcon className="text-indigo-600 h-6"/>
            <StarIcon className="text-indigo-600 h-6"/>
            <StarIcon className="text-indigo-600 h-6"/>
          </div>

          <figure className="mt-10">
            <blockquote className="text-lg/8 font-medium text-gray-900 sm:text-2xl/9">
              <p>{feature.feeback}</p>
            </blockquote>
            
            <figcaption className="mt-10">
              <UserCircleIcon className="size-10 text-gray-700" />

              <div className="mt-4 text-base">
                <div className="font-semibold text-gray-900">{feature.name}</div>
                <div className="text-gray-600">{feature.role}</div>
              </div>

            </figcaption>
          </figure>

        </div>
      ))}

    </section>
  )
}
