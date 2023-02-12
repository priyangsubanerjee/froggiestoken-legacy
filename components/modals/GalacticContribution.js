/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useState } from "react";
import { graphBase, gql } from "@/helper/graph";

function FuelingSuccess({
  galacticContributionsModalOpen,
  setGalacticContributionsModalOpen,
  standAlone = false,
}) {
  const [message, setMessage] = useState("");
  return (
    <div>
      {galacticContributionsModalOpen && (
        <div className="bg-[#010417] fixed inset-0 h-full w-full z-30 px-5 py-7 lg:p-16 overflow-auto">
          {standAlone == false && (
            <div>
              <img
                onClick={() => setGalacticContributionsModalOpen(false)}
                src="/images/hamburger.png"
                className="h-3 lg:h-5 cursor-pointer"
                alt=""
              />
            </div>
          )}
          <div className="mt-7 lg:mt-16 lg:w-[65%]">
            <h1 className="uppercase text-2xl lg:text-5xl text-white font-extrabold">
              Galactic contributions
            </h1>
            <form
              //action="https://script.google.com/macros/s/AKfycbx9nyGmD_gCLB3n8BeKktnYZuFEDC7qxNy2ABOP1ATCkPgig3FbtPTjIgeUMXu2Y5kbLw/exec"
              //method="post"
              onSubmit={async (e) => {
                // send a post request to the appScript url
                e.preventDefault();
                if (message.length < 1) {
                  alert("Please enter a message");
                  return;
                }
                const mutation = gql`
                  mutation MyMutation {
                    createResponse(data: { message: "${message}" }) {
                      id
                    }
                  }
                `;

                const res = await graphBase.request(mutation);
                if (res.createResponse.id) {
                  alert("Your message has been sent");
                  setMessage("");
                } else {
                  alert("There was an error sending your message");
                }
              }}
            >
              <div className="mt-5 text-white">
                <div>
                  <p className="mt-1 leading-7 font-poppins text-sm lg:text-base">
                    Submit your ideas and become a contributor in the galaxy.
                  </p>
                </div>
                <textarea
                  name="Responses"
                  id=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={7}
                  className="lg:w-[600px] text-black leading-7 bg-[#B1B3C4] font-poppins p-7 placeholder:text-black rounded-md mt-10"
                  placeholder="Add a description"
                ></textarea>
              </div>
              <button
                type="submit"
                className="uppercase font-medium text-sm text-black bg-[#B1B3C4] w-32 h-12 text-center cursor-pointer rounded-md mt-5"
              >
                Send
              </button>
            </form>
          </div>
          <img
            src="/images/galacticContribution.svg"
            className={`fixed top-0 right-0  transition-all duration-700 hidden lg:block`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default FuelingSuccess;
