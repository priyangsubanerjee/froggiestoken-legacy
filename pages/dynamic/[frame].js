import FuelingSuccess from "@/components/modals/FuelingSuccess";
import OrbitingP2E from "@/components/modals/OrbitingP2E";
import ExpandingHorizons from "@/components/modals/ExpandingHorizons";
import StellarInnovation from "@/components/modals/StellarInnovation";
import GalacticContribution from "@/components/modals/GalacticContribution";
import React from "react";
import NavbarDark from "@/components/NavbarDark";

export function getServerSideProps({ params }) {
  return {
    props: {
      frame: params.frame,
    },
  };
}

function Frame({ frame }) {
  switch (frame) {
    case "fueling-success":
      return (
        <FuelingSuccess
          fuelingSuccessModalOpen={true}
          standAlone={true}
          setFuelingSuccessModalOpen={null}
        />
      );
    case "orbiting-p2e":
      return (
        <OrbitingP2E
          orbitingP2EModalOpen={true}
          standAlone={true}
          setOrbitingP2EModalOpen={null}
        />
      );
    case "fueling-success":
      return (
        <FuelingSuccess
          fuelingSuccessModalOpen={true}
          standAlone={true}
          setFuelingSuccessModalOpen={null}
        />
      );
    case "expanding-horizons":
      return (
        <ExpandingHorizons
          expandingHorizonsModalOpen={true}
          standAlone={true}
          setExpandingHorizonsModalOpen={null}
        />
      );
    case "stellar-innovation":
      return (
        <StellarInnovation
          stellarInnovationModalOpen={true}
          standAlone={true}
          setStellarInnovationModalOpen={null}
        />
      );
    case "galactic-contributions":
      return (
        <GalacticContribution
          galacticContributionsModalOpen={true}
          standAlone={true}
          setGalacticContributionsModalOpen={null}
        />
      );
    default:
      break;
  }

  return (
    <div id="scrollContent">
      <NavbarDark />
    </div>
  );
}

export default Frame;
