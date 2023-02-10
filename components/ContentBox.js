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
    <div
      id={`${count}`}
      className="text-white h-screen lg:p-7 px-5 py-12 w-full shrink-0 max-w-full lg:min-h-screen lg:h-fit lg:overflow-hidden snap-center lg:snap"
    >
      <div ref={ref} className="h-10"></div>
      <div className="sm:w-screen ">{children}</div>
    </div>
  );
}

export default ContentBox;
