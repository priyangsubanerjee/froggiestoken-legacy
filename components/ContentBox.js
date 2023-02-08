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
      className="text-white p-32 w-full snap-center shrink-0 min-h-screen h-fit"
    >
      <div ref={ref} className="h-10"></div>
      <div className="w-[60%]">{children}</div>
    </div>
  );
}

export default ContentBox;
