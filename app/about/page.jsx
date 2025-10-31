import AboutHero from "../components/sections/aboutHero";
import CustomerSection from "../components/sections/customerSection";
import FrequentlyAskedQuestion from "../components/sections/frequetlyAskedQuestion";
import ValuesSection from "../components/sections/valuesSection";

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