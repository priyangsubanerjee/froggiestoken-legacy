import React, { useState, useEffect } from "react";
import Panel from "@/components/faq/panel";
import Navbar from "@/components/Navbar";

function FAQ() {
  const [state, setState] = useState(null);

  return (
    <div id="scrollContent" className="h-screen overflow-auto bg-primaryBg">
      <Navbar />
      <div className="lg:p-32 py-14 px-5">
        <div className="flex items-center space-x-4 mt-10">
          <h1 className="text-2xl lg:text-5xl text-white font-bold uppercase font-berlin">
            Frequently asked questions
          </h1>
        </div>
        <div className="mt-6 lg:mt-10 px-0 lg:px-32">
          <Panel
            index={1}
            state={state}
            setState={setState}
            question={"How long has Froggies Token existed?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos perspiciatis aliquam nisi. Quas odio eos laudantium eveniet at soluta voluptatibus exercitationem tempora, accusamus harum minima voluptas in modi excepturi ratione aliquam recusandae distinctio cum a mollitia porro provident enim impedit non. Cum, hic modi. Praesentium necessitatibus consectetur saepe ducimus placeat veritatis perspiciatis modi dolores at eos aliquid quibusdam dignissimos iste autem magni omnis cupiditate repellat, laborum aut! Doloremque ipsum accusantium saepe doloribus a explicabo sapiente sint eaque maiores, unde nulla nihil quisquam harum quo dolorum perferendis vitae impedit sed. Ex ab voluptas, cumque voluptate sit aperiam debitis consequatur officia."
            }
          />
          <Panel
            index={2}
            state={state}
            setState={setState}
            question={"What is our contract address?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos perspiciatis aliquam nisi. Quas odio eos laudantium eveniet at soluta voluptatibus exercitationem tempora, accusamus harum minima voluptas in modi excepturi ratione aliquam recusandae distinctio cum a mollitia porro provident enim impedit non. Cum, hic modi. Praesentium necessitatibus consectetur saepe ducimus placeat veritatis perspiciatis modi dolores at eos aliquid quibusdam dignissimos iste autem magni omnis cupiditate repellat, laborum aut! Doloremque ipsum accusantium saepe doloribus a explicabo sapiente sint eaque maiores, unde nulla nihil quisquam harum quo dolorum perferendis vitae impedit sed. Ex ab voluptas, cumque voluptate sit aperiam debitis consequatur officia."
            }
          />
          <Panel
            index={3}
            state={state}
            setState={setState}
            question={"How secure is investing in Froggies Token?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos perspiciatis aliquam nisi. Quas odio eos laudantium eveniet at soluta voluptatibus exercitationem tempora, accusamus harum minima voluptas in modi excepturi ratione aliquam recusandae distinctio cum a mollitia porro provident enim impedit non. Cum, hic modi. Praesentium necessitatibus consectetur saepe ducimus placeat veritatis perspiciatis modi dolores at eos aliquid quibusdam dignissimos iste autem magni omnis cupiditate repellat, laborum aut! Doloremque ipsum accusantium saepe doloribus a explicabo sapiente sint eaque maiores, unde nulla nihil quisquam harum quo dolorum perferendis vitae impedit sed. Ex ab voluptas, cumque voluptate sit aperiam debitis consequatur officia."
            }
          />
          <Panel
            index={4}
            state={state}
            setState={setState}
            question={"How secure is investing in Froggies Token?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos perspiciatis aliquam nisi. Quas odio eos laudantium eveniet at soluta voluptatibus exercitationem tempora, accusamus harum minima voluptas in modi excepturi ratione aliquam recusandae distinctio cum a mollitia porro provident enim impedit non. Cum, hic modi. Praesentium necessitatibus consectetur saepe ducimus placeat veritatis perspiciatis modi dolores at eos aliquid quibusdam dignissimos iste autem magni omnis cupiditate repellat, laborum aut! Doloremque ipsum accusantium saepe doloribus a explicabo sapiente sint eaque maiores, unde nulla nihil quisquam harum quo dolorum perferendis vitae impedit sed. Ex ab voluptas, cumque voluptate sit aperiam debitis consequatur officia."
            }
          />
          <Panel
            index={5}
            state={state}
            setState={setState}
            question={"Is Froggies Token listed on a centralized exchange?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos perspiciatis aliquam nisi. Quas odio eos laudantium eveniet at soluta voluptatibus exercitationem tempora, accusamus harum minima voluptas in modi excepturi ratione aliquam recusandae distinctio cum a mollitia porro provident enim impedit non. Cum, hic modi. Praesentium necessitatibus consectetur saepe ducimus placeat veritatis perspiciatis modi dolores at eos aliquid quibusdam dignissimos iste autem magni omnis cupiditate repellat, laborum aut! Doloremque ipsum accusantium saepe doloribus a explicabo sapiente sint eaque maiores, unde nulla nihil quisquam harum quo dolorum perferendis vitae impedit sed. Ex ab voluptas, cumque voluptate sit aperiam debitis consequatur officia."
            }
          />
          <Panel
            index={6}
            state={state}
            setState={setState}
            question={
              "How to buy Froggies Token through the PancakeSwap website?"
            }
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos perspiciatis aliquam nisi. Quas odio eos laudantium eveniet at soluta voluptatibus exercitationem tempora, accusamus harum minima voluptas in modi excepturi ratione aliquam recusandae distinctio cum a mollitia porro provident enim impedit non. Cum, hic modi. Praesentium necessitatibus consectetur saepe ducimus placeat veritatis perspiciatis modi dolores at eos aliquid quibusdam dignissimos iste autem magni omnis cupiditate repellat, laborum aut! Doloremque ipsum accusantium saepe doloribus a explicabo sapiente sint eaque maiores, unde nulla nihil quisquam harum quo dolorum perferendis vitae impedit sed. Ex ab voluptas, cumque voluptate sit aperiam debitis consequatur officia."
            }
          />
          <Panel
            index={7}
            state={state}
            setState={setState}
            question={
              "How to fix the 'insufficient output' error on Pancakeswap?"
            }
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos perspiciatis aliquam nisi. Quas odio eos laudantium eveniet at soluta voluptatibus exercitationem tempora, accusamus harum minima voluptas in modi excepturi ratione aliquam recusandae distinctio cum a mollitia porro provident enim impedit non. Cum, hic modi. Praesentium necessitatibus consectetur saepe ducimus placeat veritatis perspiciatis modi dolores at eos aliquid quibusdam dignissimos iste autem magni omnis cupiditate repellat, laborum aut! Doloremque ipsum accusantium saepe doloribus a explicabo sapiente sint eaque maiores, unde nulla nihil quisquam harum quo dolorum perferendis vitae impedit sed. Ex ab voluptas, cumque voluptate sit aperiam debitis consequatur officia."
            }
          />
          <Panel
            index={8}
            state={state}
            setState={setState}
            question={
              "How can I become a liquidity provider and earn a piece of the pool?"
            }
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos perspiciatis aliquam nisi. Quas odio eos laudantium eveniet at soluta voluptatibus exercitationem tempora, accusamus harum minima voluptas in modi excepturi ratione aliquam recusandae distinctio cum a mollitia porro provident enim impedit non. Cum, hic modi. Praesentium necessitatibus consectetur saepe ducimus placeat veritatis perspiciatis modi dolores at eos aliquid quibusdam dignissimos iste autem magni omnis cupiditate repellat, laborum aut! Doloremque ipsum accusantium saepe doloribus a explicabo sapiente sint eaque maiores, unde nulla nihil quisquam harum quo dolorum perferendis vitae impedit sed. Ex ab voluptas, cumque voluptate sit aperiam debitis consequatur officia."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
