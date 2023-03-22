/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { InView } from "react-intersection-observer";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function ContentBox({ count, active, setActive, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setActive(count);
    }
  }, [isInView]);
  return (
    <div className="lg:min-h-screen lg:h-fit h-screen overflow-auto text-white relative lg:p-7 px-5 py-5 w-full shrink-0 max-w-full snap-start lg:snap-none scrollbar-hide">
      <div id={`${count}`} className="">
        <div
          ref={ref}
          className="h-10 asbolute top-0 w-10 ml-auto lg:ml-0 lg:w-full lg:static"
        ></div>
        <div id="scrollContent" className="sm:w-screen">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
