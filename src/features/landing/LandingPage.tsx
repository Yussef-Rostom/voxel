import { Hero } from "./components/Hero";
import { TracksGrid } from "./components/TracksGrid";
import { TechnicalCore } from "./components/TechnicalCore";
import { AudienceTabs } from "./components/AudienceTabs";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <TracksGrid />
      <TechnicalCore />
      <AudienceTabs />
    </>
  );
};
