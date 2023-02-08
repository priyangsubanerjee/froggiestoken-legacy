/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

function Team() {
  return (
    <div>
      <h2 className=" text-primaryGrey text-sm font-medium">TEAM</h2>
      <h1 className="text-7xl font-semibold text-white leading-[1.3] uppercase">
        The Cosmic Crew
      </h1>

      <p className="text-sm text-white leading-6 mt-4 font-poppins">
        Meet the main people behind Froggies{" "}
        <span className="relative h-10 inline-flex items-center w-56 -mr-12 ml-1">
          <img
            src="/images/textScribble2.png"
            className="absolute -top-1 -left-6 w-56 h-12 z-10"
            alt=""
          />
          <span className="z-10 text-black">working hard everyday to</span>
        </span>{" "}
        lower gravity and increase lift off.
      </p>

      <div className="grid grid-cols-3 w-auto lg:grid-cols-5 mt-10 gap-0 cursor-pointer">
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img src="/images/crazyx.png" className="absolute top-0" alt="" />
            <h1 className="mt-24 font-bold text-white text-center">CRAZYX</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img src="/images/chopin.png" className="absolute top-0" alt="" />
            <h1 className="mt-24 font-bold text-white text-center">CHOPIN</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/master.png"
              className="absolute top-0 right-0"
              alt=""
            />
            <h1 className="mt-24 font-bold text-white text-center">MASTER..</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/marco.png"
              className="absolute top-0 right-0"
              alt=""
            />
            <h1 className="mt-24 font-bold text-white text-center">Marco</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/jochen.png"
              className="absolute top-0 right-0"
              alt=""
            />
            <h1 className="mt-24 font-bold text-white text-center">JOCHEN</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/msfro.png"
              className="absolute top-0 right-0"
              alt=""
            />
            <h1 className="mt-24 font-bold text-white text-center">MSFRO..</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/stephen.png"
              className="absolute top-0 left-0"
              alt=""
            />
            <h1 className="mt-24 font-bold text-white text-center">STEPHEN</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-20 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/paul.png"
              className="absolute top-0 left-0"
              alt=""
            />
            <h1 className="mt-24 font-bold text-white text-center">PAUL</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-20 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/lightns.png"
              className="absolute top-0 left-0"
              alt=""
            />
            <h1 className="mt-24 font-bold text-white text-center">LIGHTNS</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
        <div className="relative h-40 group">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/whale.png"
              className="absolute top-0 left-0"
              alt=""
            />
            <h1 className="mt-24 font-bold text-white text-center">WHALE</h1>
            <p className="text-center text-sm text-secondaryGrey">
              Core Member
            </p>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod explicabo qui beatae culpa ipsam quo, nisi.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-baseline mt-10 whitespace-nowrap font-poppins">
        <span>Bright Future for $FRGST .</span>
        <div className="w-20 h-[1px] bg-white"></div>
        <div className="flex items-center relative text-black w-96 ml-5">
          <div className="flex z-10 items-center font-poppins">
            <span>Dive into the unknown</span>
            <iconify-icon className="z-10" icon="ph:arrow-down"></iconify-icon>
          </div>
          <div className="absolute -top-[2px] -left-4 w-auto">
            <img
              src="/images/textScribbleVector.png"
              className="w-56 h-6 z-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
