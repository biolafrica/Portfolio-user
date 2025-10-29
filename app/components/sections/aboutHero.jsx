import SectionHeader from "../common/sectionHeader";

export default function AboutHero() {
  return(
    <section className="py-16 sm:py-20 lg:py-52">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:max-w-none">

          <SectionHeader
            heading="About Me"
            subheading="I help businesses turn their ideas into working web applications."
            content={<>
              I specialize in React, Next.js, Node.js, MongoDB, Supabase, Firebase, Shopify and Wordpress with a focus on applications that are fast, secure, and built to scale. <br/><br/>
              Whether you're launching your first product, replacing a manual process with automation, or building a customer-facing platform, I create web applications that solve real problems. <br/><br/>
              What makes me different? I come from a business operations background, so I understand how businesses work, not just how code works. When you work with me, you're getting someone who thinks about workflows, user needs, and business outcomes, not just features and functions.<br/><br/>
              I'm based in Greater Manchester, and work with clients across the UK and internationally.<br/>
            </>}
            align="left"
          />
        </div>
      </div>
    </section>
  )
}