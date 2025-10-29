import SectionHeader from "../common/sectionHeader";

export default function FrequentlyAskedQuestion() {
  
  const faqs = [
    {
      question: "How much does a website cost in United Kingdom?",
      answer: "Website costs vary depending on complexity. Simple websites start from £500, while custom web applications typically range from £2,000-£10,000+. I offer free consultations to discuss your specific needs and provide accurate quotes."
    },
    {
      question: "Do you only work with Greater Manchester businesses?",
      answer: "No, while I'm based in Greater Manchester, United Kingdom, I work with clients across the UK and internationally. Local businesses get the benefit of in-person meetings when needed."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Simple websites: 2-4 weeks, Custom web applications: 2-4 months, E-commerce stores: 3-6 weeks, I provide realistic timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer maintenance packages for ongoing updates, bug fixes, and improvements after your site launches."
    },
    {
      question: "Can you help with SEO?",
      answer: "Absolutely. Every website I build is optimized for search engines, and I offer dedicated SEO services to help you rank better in local searches."
    }
  ];

  return(
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto">

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
            <SectionHeader
              subheading="Frequently asked questions"
              content={<>
                Can't find the answer you're looking for? Reach out to our{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  customer support
                </a>{' '} team.
              </>}
              align='left'
            />

            <div className="lg:col-span-2">
              <dl className="space-y-10">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}