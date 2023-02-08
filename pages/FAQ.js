import NavbarDark from "@/components/NavbarDark";
import React, { useState, useEffect } from "react";

import { Disclosure } from "@headlessui/react";

function FAQ() {
  const [disclosureState, setDisclosureState] = useState(0);

  function handleDisclosureChange(state) {
    if (state === disclosureState) {
      setDisclosureState(0); // close all of them
    } else {
      setDisclosureState(state); // open the clicked disclosure
    }
  }
  return (
    <div id="scrollContent" className="h-screen overflow-auto bg-primaryBg">
      <NavbarDark />
      <div className="p-32">
        <div className="flex items-center space-x-4 mt-10">
          <h1 className="text-4xl text-white font-bold uppercase font-poppins">
            Frequently asked questions
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
