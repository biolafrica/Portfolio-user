import AboutHero from "../components/sections/aboutHero";
import CustomerSection from "../components/sections/customerSection";
import FrequentlyAskedQuestion from "../components/sections/frequetlyAskedQuestion";
import ValuesSection from "../components/sections/valuesSection";

export const metadata = {
  title: 'About Me',
  description: 'Learn about Abiodun Biobaku, a full-stack web developer based in Manchester & London, UK, specializing in React and Node.js.',
}

export default function AboutUs() {
  
  return (
    <div>
      <AboutHero/>
      <CustomerSection/>
      <ValuesSection/>
      <FrequentlyAskedQuestion />
    </div>
  );
}