import SectionHeader from "../common/sectionHeader";

export default function CustomerSection() {
  const values = [
    {
      id: 1,
      title: 'Clear Communication.',
      description: "No jargon, no surprises. You'll always know where your project stands."
    },
    {
      id: 2,
      title: 'Reliable Delivery.',
      description: "I set realistic timelines and hit them. You won't chase me for updates or wonder if I've disappeared."
    },
    {
      id: 3,
      title: 'Ongoing Support.',
      description: "I don't just hand over the code and disappear. I'm here to help as your business grows"
    }
  ];

  return(

    <div className="md:px-6 lg:px-8">

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
        px-6 py-16 sm:py-20 lg:py-24 lg:px-8 max-w-7xl mx-auto md:rounded-3xl"
      >
        <div className="max-w-4xl mx-auto">

          <SectionHeader
            subheading="Trusted by Growing Businesses"
            content=" I've had the privilege of working with startups and companies across different industries, here's what they value most about working with me."
            text="light"
          />

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
                {values.map((value) => (
                  <div key={value.id} className='flex gap-4' >
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2 border-l-2 border-white pl-6 ">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-2 border-l border-gray-700 pl-6">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}