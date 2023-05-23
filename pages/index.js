import NavbarDark from "@/components/NavbarDark";
import Vector from "@/components/Vector";
import ContentBox from "@/components/ContentBox";
import { useLayoutEffect, useState } from "react";
import NavigationBars from "@/components/NavigationBars";
import AboutUs from "@/frames/AboutUs";
import Team from "@/frames/Team";
import Audience from "@/frames/Audience";
import BlackHole from "@/frames/BlackHole";
import Navbar from "@/components/Navbar";
import FrameTool from "@/frames/FrameTool";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState(1);
  const [walletModal, setWalletModal] = useState(false);
  useLayoutEffect(() => {
    if (localStorage.getItem("walletModal")) {
      if (localStorage.getItem("walletModal") == "true") {
        setWalletModal(false);
      } else {
        setWalletModal(true);
      }
    } else {
      setWalletModal(true);
    }
  }, []);
  return (
    <div className="h-screen bg-primaryBg overflow-hidden">
      <Navbar hideOnScroll={true} />
      <Vector active={active} />
      <NavigationBars active={active} totalBars={5} />
      <div
        id="scrollContent"
        className="overflow-y-hidden overflow-x-auto lg:overflow-auto fixed inset-0 scroll-smooth h-full w-full z-0 flex lg:block snap-x lg:snap-none scrollbar-hide"
      >
        <ContentBox count={1} active={active} setActive={setActive}>
          <AboutUs />
        </ContentBox>
        <ContentBox count={2} active={active} setActive={setActive}>
          <Team />
        </ContentBox>
        <ContentBox count={3} active={active} setActive={setActive}>
          <Audience />
        </ContentBox>
        <ContentBox count={4} active={active} setActive={setActive}>
          <FrameTool />
        </ContentBox>
        <ContentBox count={5} active={active} setActive={setActive}>
          <BlackHole />
        </ContentBox>
      </div>

      <AnimatePresence>
        {walletModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen w-screen z-20 bg-black/70 flex items-center justify-center"
          >
            <div className="bg-[#010417] w-[90%] lg:w-[600px] relative p-6 lg:p-8">
              <i className="text-red-400 absolute -top-10 left-1/2 -translate-x-1/2">
                <iconify-icon
                  className="mr-5 block"
                  height="100"
                  width="100"
                  icon="gridicons:notice"
                ></iconify-icon>
              </i>
              <button
                onClick={() => {
                  setWalletModal(false);
                  localStorage.setItem("walletModal", "true");
                }}
                className="absolute -top-3 flex  items-center justify-center -right-3 h-10 w-10 rounded-full bg-[#9DA7FF]"
              >
                <iconify-icon
                  height="18"
                  width="18"
                  icon="ion:close"
                ></iconify-icon>
              </button>
              <h1 className="text-center text-[#EF626C] font-poppins font-bold text-xl mt-12">
                IMPORTANT NOTICE!
              </h1>
              <p className="text-white font-poppins font-medium text-sm mt-4 leading-7">
                We have recently migrated to a new contract (Binance Smart
                Chain), if you bought our previous contract please add below
                contract address to your wallet:
              </p>
              <div className="mt-5 border rounded-md flex items-center justify-between text-white p-3">
                <span className="w-[80%] text-ellipsis whitespace-nowrap overflow-hidden">
                  0x7029994f28fd39ff934A96b25591D250A2183f67
                </span>
                <iconify-icon
                  className="mr-5 block"
                  icon="ph:copy"
                ></iconify-icon>
              </div>

              <p className="text-white font-medium font-poppins text-sm mt-5 leading-6">
                You have received an airdrop 1000:1, with the same fiat (USD)
                value as before migration.
              </p>
              <p className="text-[#DEAB28] font-medium mt-6">
                Please be aware of scammers, do not connect to any sites to
                migrate.
              </p>

              <div className="flex items-center justify-center mt-10">
                <button
                  onClick={() => {
                    setWalletModal(false);
                    localStorage.setItem("walletModal", true);
                  }}
                  className="bg-[#9DA7FF] px-8 py-3 rounded-full text-[#010417] font-popins font-medium"
                >
                  Okay
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
