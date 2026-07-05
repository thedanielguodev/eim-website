import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { CompetitionOverview } from "@/components/sections/CompetitionOverview";
import { Requirements } from "@/components/sections/Requirements";
import { Timeline } from "@/components/sections/Timeline";
import { Tracks } from "@/components/sections/Tracks";
import { Judging } from "@/components/sections/Judging";
import { Sponsors } from "@/components/sections/Sponsors";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Disclaimers } from "@/components/sections/Disclaimers";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhyParticipate />
      <CompetitionOverview />
      <Requirements />
      <Timeline />
      <Tracks />
      <Judging />
      <Sponsors />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Disclaimers />
    </>
  );
}
