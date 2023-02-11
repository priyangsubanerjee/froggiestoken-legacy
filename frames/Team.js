/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function Team() {
  const [active, setActive] = useState(0);

  const teamMembers = [
    {
      name: "CrazyX",
      role: "Core Community",
      image: "/images/crazyx.png",
      description:
        "Even in space there are peculiar creatures, CrazyX is one of them.",
    },
    {
      name: "Chopin",
      role: "Core Marketing",
      image: "/images/chopin.png",
      description: "Knows the demands of the interplanetary species.",
    },
    {
      name: "Master of Token",
      role: "Founder",
      image: "/images/master.png",
      description: "The Goat of the entire combination of Stellar Systems",
    },
    {
      name: "Marco",
      role: "Design",
      image: "/images/marco.png",
      description:
        "Earth is not the only place where assets need to be persuasive. ",
    },
    {
      name: "Orbital Engineer",
      role: "Developer",
      image: "/images/jochen.png",
      description: "Providing external space-life with equations and coding.",
    },
    {
      name: "Froggies Dev",
      role: "Developer/collaborations",
      image: "/images/jochen.png",
      description:
        "Throwing out lines to different planets to secure collaborations.",
    },
    {
      name: "Miss Froggies",
      role: "Community Manager",
      image: "/images/msfro.png",
      description: "Also in cosmos there are strong women needed.",
    },
    {
      name: "Paul",
      role: "Ambassador",
      image: "/images/paul.png",
      description:
        "Throwing out lines to different planets to secure collaborations.",
    },
    {
      name: "Lightns",
      role: "Ambassador",
      image: "/images/lightns.png",
      description: "Every guardian needs support to achieve the best.",
    },
    {
      name: "Whale",
      role: "Insider",
      image: "/images/lightns.png",
      description: "Investor and collaborator spreading the message.",
    },
  ];

  return (
    <div className="lg:w-[69%] lg:p-32 ">
      <h2 className="lg:block hidden text-primaryGrey text-sm font-medium">
        TEAM
      </h2>
      <h1 className="text-2xl lg:text-7xl font-extrabold text-white leading-[1.3] font-berlin uppercase mt-5">
        The Cosmic Crew
      </h1>

      <p className="hidden lg:block text-sm text-white leading-6 mt-4 font-poppins">
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

      <div className="hidden lg:grid grid-cols-3 w-auto h-[350px] lg:h-auto overflow-auto lg:overflow-visible lg:grid-cols-5 mt-10 gap-0 cursor-pointer">
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/crazyx.png"
              className="absolute top-0 h-20"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase">
                CRAZYX
              </h1>
              <p className="text-left text-sm text-secondaryGrey">
                Core Community
              </p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Even in space there are peculiar creatures, CrazyX is one of them.
            </p>
          </div>
        </div>

        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/chopin.png"
              className="absolute top-0 h-24"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Chopin
              </h1>
              <p className="text-left text-sm text-secondaryGrey">
                Core Marketing
              </p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Knows the demands of the interplanetary species.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/master.png"
              className="absolute top-0 right-0 h-32"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Master..
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Founder</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              The Goat of the entire combination of Stellar Systems.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/marco.png"
              className="absolute top-0 right-0 h-32"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                marco
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Designer</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Earth is not the only place where assets need to be persuasive.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/jochen.png"
              className="absolute top-0 right-0 h-32"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Orbital Engineer
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Developer</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Providing external space-life with equations and coding.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/jochen.png"
              className="absolute h-24 top-0 right-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Froggies Dev
              </h1>
              <p className="text-left text-sm text-secondaryGrey">
                Developer/collaborations
              </p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Throwing out lines to different planets to secure collaborations.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/msfro.png"
              className="absolute h-24 top-0 left-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Miss Froggies
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Co-Founder</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Also in cosmos there are strong women needed.
            </p>
          </div>
        </div>

        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-20 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/paul.png"
              className="absolute h-24 top-0 left-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Paul
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Ambassador</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Every community needs its guardian.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-20 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/lightns.png"
              className="absolute top-0 h-24 left-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                lightns.
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Ambassador</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Every guardian needs support to achieve the best.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/whale.png"
              className="absolute top-0 h-24 left-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                whale
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Insider</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Investor and collaborator spreading the message.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7 lg:hidden">
        <div className="grid grid-cols-4">
          {teamMembers.map((member, index) => {
            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`border border-slate-400 -ml-[1px] relative h-[80px] ${
                  active == index ? "bg-blue-900/50" : "bg-transparent"
                }`}
              >
                <img
                  src={member.image}
                  className={`h-20 absolute inset-0 ${
                    active == index ? "z-10 translate-y-1" : "z-0 translate-y-0"
                  }} transition-all duration-500 ease-in-out`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="mt-6">
          <h1 className="text-lg font-bold text-white font-berlin">
            {teamMembers[active].name}
          </h1>
          <p className="text-xs my-2 text-secondaryGrey font-poppins">
            {teamMembers[active].role}
          </p>
          <p className="font-poppins text-xs leading-6">
            {teamMembers[active].description}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex text-xs lg:text-sm items-baseline mt-7 lg:mt-10 whitespace-nowrap font-poppins pb-16">
        <span>Bright Future for $FRGST .</span>
        <div className="w-20 h-[1px] bg-white"></div>
        <a className="hidden lg:inline-block" href="#3">
          <div className="flex items-center relative text-black w-96 ml-5">
            <div className="flex z-10 items-center font-poppins">
              <span>Dive into the unknown</span>
              <iconify-icon
                className="z-10"
                icon="ph:arrow-down"
              ></iconify-icon>
            </div>
            <div className="absolute -top-[2px] -left-4 w-auto">
              <img
                src="/images/textScribbleVector.png"
                className="w-56 h-6 z-0"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Team;
