/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function ExpandedNav({ setExpandedOpen }) {
  return (
    <div className="fixed inset-0 bg-primaryBg h-full w-full z-40">
      <div className="flex py-4 px-5 items-center">
        <Link href={"/"}>
          <img src={"/images/logoPrimary.png"} className="w-20" alt="" />
        </Link>
        <button
          onClick={() => {
            setExpandedOpen(false);
          }}
          className="text-white ml-auto"
        >
          <iconify-icon
            height="24"
            width="24"
            icon="material-symbols:close"
          ></iconify-icon>
        </button>
      </div>
      <ul className="flex mt-12 flex-col items-center justify-center text-white font-poppins space-y-9">
        <li>
          <Link href={"https://www.everlost.io/"}>
            <img src="/images/everlostLight.svg" className="h-4" alt="" />
          </Link>
        </li>
        <li>
          <Link href={"/Interstellar"}>
            <span>Interstellar</span>
          </Link>
        </li>
        <li>
          <Link href={"/Manifesto"}>
            <span>Manifesto</span>
          </Link>
        </li>
        <li>
          <span>Buy</span>
        </li>
        <li>
          <Link href={"/Interstellar"}></Link>
          <span>Stellar Doc</span>
        </li>
        <li>
          <span>More</span>
        </li>
        <li>
          <Link href={"https://t.me/officialfroggiestoken"}>
            <div>
              <span>Telegram</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"https://www.twitter.com/froggiestoken/"}>
            <div>
              <span>Twitter</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ExpandedNav;
