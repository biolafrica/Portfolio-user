import CallToActionButton from "../common/callToActionButton";
import SectionHeader from "../common/sectionHeader";

export default function FooterHeroSection(){
  return (
    <section className="w-full flex items-center justify-center  px-4 py-20 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto text-center">

        <SectionHeader
          subheading="Let's Build Something Together."
          content="Have a project in mind? Let's talk about how I can help turn your idea into reality."
        />

        <div className="flex justify-center mt-5">
          <CallToActionButton label="Book a call" href="https://cal.com/abiodun-biobaku/30min" target="_blank" />
        </div>

      </div>

    </section>
    
  );
};

