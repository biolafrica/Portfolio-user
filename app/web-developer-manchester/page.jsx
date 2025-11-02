import ProjectsHomeSection from "../components/sections/ProjectsHomeSection";
import FrequentlyAskedQuestion from "../components/sections/frequetlyAskedQuestion";
import HeroSection from "../components/sections/heroSection";
import ServicesSection from "../components/sections/serviceSection";
import Testimonial from "../components/sections/testimonial";

export const metadata = {
  title: 'Web Developer in Manchester, United Kingdom',
  description: 'Local full-stack developer in Manchester building custom websites and web applications for businesses across the UK.',
  keywords: ['web developer Manchester', 'Manchester web development', 'web developer UK', 'local web developer','Shopify developer Manchester','WordPress developer Manchester', 'Mobile developer Manchester'],
  openGraph: {
    title: 'Web Developer in Manchester, United Kingdom',
    description: 'Local full-stack developer serving Manchester and surrounding areas.',
  }
}

export default function WebDeveloperManchester() {
  return (
    <div>
       <HeroSection 
        heading="Full-Stack Developer in Greater Manchester, United Kingdom."
        subheading="I'm Abiodun Biobaku, a software engineer Building Custom Websites and Web Applications for Businesses Across London and the United Kingdom"
      />
      <ServicesSection/>
      <ProjectsHomeSection align = "center"/>
      <Testimonial/>
      <FrequentlyAskedQuestion/>
    </div>

  );
}