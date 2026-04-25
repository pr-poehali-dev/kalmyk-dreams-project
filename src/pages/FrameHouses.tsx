import { useEffect } from "react";
import FrameHousesHeader from "@/components/frame-houses/FrameHousesHeader";
import FrameHousesProjects from "@/components/frame-houses/FrameHousesProjects";
import FrameHousesTechStages from "@/components/frame-houses/FrameHousesTechStages";
import FrameHousesReviewsCta from "@/components/frame-houses/FrameHousesReviewsCta";

const FrameHouses = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FrameHousesHeader scrollToSection={scrollToSection} />
      <FrameHousesProjects />
      <FrameHousesTechStages />
      <FrameHousesReviewsCta />
    </div>
  );
};

export default FrameHouses;
