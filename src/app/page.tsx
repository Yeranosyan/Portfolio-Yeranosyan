import Hero from "@/components/sections/hero";
import Capabilities from "@/components/sections/capabilities";
import Impact from "@/components/sections/impact";
import Practice from "@/components/sections/practice";
import SelectedWork from "@/components/sections/selected-work";
import Explore from "@/components/sections/explore";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Impact />
      <Practice />
      <SelectedWork />
      <Explore />
      <Contact />
    </>
  );
}
