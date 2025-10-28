import CallToActionButton from "../common/callToActionButton";
import SectionHeader from "../common/sectionHeader";

export default function FooterHeroSection(){
  return (
    <section className="w-full flex items-center justify-center  px-4 py-20 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto text-center">

        <SectionHeader
          subheading="Start using our app today."
          content=" Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id 
          veniam aliqua proident excepteur commodo do ea."
        />

        <div className="flex justify-center mt-5">
          <CallToActionButton label="Book a call" href="#" />
        </div>

      </div>

    </section>
    
  );
};

