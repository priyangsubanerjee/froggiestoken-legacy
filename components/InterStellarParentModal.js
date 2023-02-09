/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import FuelingSuccess from "./modals/FuelingSuccess";
import OrbitingP2E from "./modals/OrbitingP2E";
import StellarInnovation from "./modals/StellarInnovation";
import ExpandingHorizons from "./modals/ExpandingHorizons";
import GalacticContribution from "./modals/GalacticContribution";
import { animated, useSpring } from "@react-spring/web";

function InterStellarParentModal({
  inerStellarModalOpen,
  setInerStellarModalOpen,
}) {
  const [fuelingSuccessHover, setFuelingSuccessHover] = useState(false);
  const [orbitingP2EHover, setOrbitingP2EHover] = useState(false);
  const [stellarInnovationHover, setStellarInnovationHover] = useState(false);
  const [expandingHorizonsHover, setExpandingHorizonsHover] = useState(false);
  const [galacticContributionsHover, setGalacticContributionsHover] =
    useState(false);

  const [fuelingSuccessModalOpen, setFuelingSuccessModalOpen] = useState(false);
  const [orbitingP2EModalOpen, setOrbitingP2EModalOpen] = useState(false);
  const [stellarInnovationModalOpen, setStellarInnovationModalOpen] =
    useState(false);
  const [expandingHorizonsModalOpen, setExpandingHorizonsModalOpen] =
    useState(false);
  const [galacticContributionsModalOpen, setGalacticContributionsModalOpen] =
    useState(false);

  const styles = useSpring({
    opacity: inerStellarModalOpen ? 1 : 0,
    y: inerStellarModalOpen ? 0 : -20,
  });

  return (
    <div>
      {inerStellarModalOpen && (
        <div className="bg-[#010417] fixed inset-0 h-full w-full z-20 p-16">
          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="text-[#424242] fixed top-10 left-10 z-30">
              <span
                onClick={() => [setInerStellarModalOpen(false)]}
                className="cursor-pointer hover:cursor-pointer"
              >
                <iconify-icon
                  height="35"
                  width="35"
                  icon="radix-icons:cross-1"
                ></iconify-icon>
              </span>
            </div>
            <div className="text-5xl font-extrabold text-[#424242] text-center uppercase space-y-16 mt-6">
              <animated.h1
                style={styles}
                onClick={() => setFuelingSuccessModalOpen(true)}
                onMouseEnter={() => {
                  setFuelingSuccessHover(true);
                }}
                onMouseLeave={() => {
                  setFuelingSuccessHover(false);
                }}
                className="hover:text-white transition-all cursor-pointer"
              >
                Fueling Success
              </animated.h1>
              <animated.h1
                style={styles}
                onClick={() => setOrbitingP2EModalOpen(true)}
                onMouseEnter={() => {
                  setOrbitingP2EHover(true);
                }}
                onMouseLeave={() => {
                  setOrbitingP2EHover(false);
                }}
                className="hover:text-white transition-all cursor-pointer"
              >
                Orbiting P2E
              </animated.h1>
              <animated.h1
                style={styles}
                onClick={() => setStellarInnovationModalOpen(true)}
                onMouseEnter={() => {
                  setStellarInnovationHover(true);
                }}
                onMouseLeave={() => {
                  setStellarInnovationHover(false);
                }}
                className="hover:text-white transition-all cursor-pointer"
              >
                Stellar Innovation
              </animated.h1>
              <animated.h1
                style={styles}
                onClick={() => setExpandingHorizonsModalOpen(true)}
                onMouseEnter={() => {
                  setExpandingHorizonsHover(true);
                }}
                onMouseLeave={() => {
                  setExpandingHorizonsHover(false);
                }}
                className="hover:text-white transition-all cursor-pointer"
              >
                Expanding Horizons
              </animated.h1>
              <animated.h1
                style={styles}
                onClick={() => setGalacticContributionsModalOpen(true)}
                onMouseEnter={() => {
                  setGalacticContributionsHover(true);
                }}
                onMouseLeave={() => {
                  setGalacticContributionsHover(false);
                }}
                className="hover:text-white transition-all cursor-pointer"
              >
                Galactic Contributions
              </animated.h1>
            </div>
          </div>

          <img
            src="/images/fuelingSuccess.svg"
            className={`fixed bottom-0 right-0 ${
              fuelingSuccessHover ? "opacity-100" : "opacity-0"
            } transition-all duration-700}`}
            alt=""
          />
          <img
            src="/images/orbitingP2e.svg"
            className={`fixed -top-20 right-0 ${
              orbitingP2EHover ? "opacity-100" : "opacity-0"
            } transition-all duration-700}`}
            alt=""
          />
          <img
            src="/images/stellarInnovation.svg"
            className={`fixed bottom-0 right-0 ${
              stellarInnovationHover ? "opacity-100" : "opacity-0"
            } transition-all duration-700}`}
            alt=""
          />
          <img
            src="/images/expandingHorizons.svg"
            className={`fixed bottom-0 right-1/2 translate-x-1/2 ${
              expandingHorizonsHover ? "opacity-100" : "opacity-0"
            } transition-all duration-700}`}
            alt=""
          />
          <img
            src="/images/galacticContributions.svg"
            className={`fixed bottom-0 right-0 ${
              galacticContributionsHover ? "opacity-100" : "opacity-0"
            } transition-all duration-700}`}
            alt=""
          />

          <FuelingSuccess
            fuelingSuccessModalOpen={fuelingSuccessModalOpen}
            setFuelingSuccessModalOpen={setFuelingSuccessModalOpen}
          />
          <OrbitingP2E
            orbitingP2EModalOpen={orbitingP2EModalOpen}
            setOrbitingP2EModalOpen={setOrbitingP2EModalOpen}
          />
          <StellarInnovation
            stellarInnovationModalOpen={stellarInnovationModalOpen}
            setStellarInnovationModalOpen={setStellarInnovationModalOpen}
          />
          <ExpandingHorizons
            expandingHorizonsModalOpen={expandingHorizonsModalOpen}
            setExpandingHorizonsModalOpen={setExpandingHorizonsModalOpen}
          />
          <GalacticContribution
            galacticContributionsModalOpen={galacticContributionsModalOpen}
            setGalacticContributionsModalOpen={
              setGalacticContributionsModalOpen
            }
          />
        </div>
      )}
    </div>
  );
}

export default InterStellarParentModal;
