import {BuildingStorefrontIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Website Development',
    description:
      'Get a professional website that works for your business 24/7. Custom-built to showcase your services, capture leads, and convert visitors into customers. Mobile-friendly and fast-loading.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Mobile App Development',
    description:
      'Reach your customers wherever they are with a mobile app for iOS and Android. Ideal for delivery services, bookings, e-commerce, and service-based businesses looking to scale.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Search Engine Optimization',
    description:
      'Get found on Google when customers search for your services. I optimize your website to rank higher in search results, bringing you more traffic and qualified leads.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Wordpress & Shopify',
    description:
      'Launch your online store with Shopify or build a content-rich website with WordPress. Easy to manage yourself, with custom designs that match your brand perfectly.',
    icon: BuildingStorefrontIcon,
  },
]

export default function ServicesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Services</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Services I Offer
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            I help businesses establish their online presence and grow through custom web solutions. Whether you're starting from scratch or improving what you have, I've got you covered.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

