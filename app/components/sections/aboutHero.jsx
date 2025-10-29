export default function AboutHero() {
  return(
    <section className="py-16 sm:py-20 lg:py-52">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Section Label */}
          <div className="mb-8">
            <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
              About
            </p>
          </div> 

          {/* Main Heading */}
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-8">
            I help businesses turn their ideas into working web applications.
          </h2>

          {/* Description Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-3xl">
            <p>
              I specialize in React, Next.js, Node.js, MongoDB, Supabase, Firebase, Shopify and Wordpress with a focus on applications that are fast, secure, and built to scale.
            </p>

            <p>
              Whether you're launching your first product, replacing a manual process with automation, or building a customer-facing platform, I create web applications that solve real problems.
            </p>

            <p>
              What makes me different? I come from a business operations background, so I understand how businesses work, not just how code works. When you work with me, you're getting someone who thinks about workflows, user needs, and business outcomes, not just features and functions.
            </p>

            <p>
              I'm based in Greater Manchester, and work with clients across the UK and internationally
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}