import ProjectsHomeSection from "../components/sections/ProjectsHomeSection";
import FrequentlyAskedQuestion from "../components/sections/frequetlyAskedQuestion";
import HeroSection from "../components/sections/heroSection";
import ServicesSection from "../components/sections/serviceSection";
import Testimonial from "../components/sections/testimonial";

export const metadata = {
  title: 'Web Developer in London, United Kingdom',
  description: 'Local full-stack developer in London building custom websites and web applications for businesses across the UK.',
  keywords: ['web developer London', 'London web development', 'web developer UK', 'local web developer', 'Shopify developer London','WordPress developer London', 'Mobile developer London'],
  openGraph: {
    title: 'Web Developer in London, United Kingdom',
    description: 'Local full-stack developer serving London and surrounding areas.',
  }
}

export default function WebDeveloperLondon() {
  return (
    <div>
      <HeroSection 
        heading="Full-Stack Developer in London, United Kingdom."
        subheading="I'm Abiodun Biobaku, a software engineer Building Custom Websites and Web Applications for Businesses Across London and the United Kingdom"
      />
      <ServicesSection/>
      <ProjectsHomeSection align = "center"/>
      <Testimonial/>
      <FrequentlyAskedQuestion/>
    </div>
  );
}