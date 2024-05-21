"use client";

import PromptCard from "@/components/promptsCard/promptCard";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    console.log("new log");
  }, []);

  return (
    <section>
      <div className=" lg:w-[50%] md:w-[70%] w-[95%] mx-auto pt-[4rem]">
        <header className="w-full">
          <h1 className="md:text-[45px] text-[35px] text-center font-bold ">
            Discover & Share
            <br />
            <span className="text-orange-500">AI-Powered Prompts</span>
          </h1>
          <p className="text-center text-[18px] mt-[20px] text-slate-600">
            Prompt-ai is an open-source AI prompting tool for modern world to
            discover, create and share creative prompts
          </p>
        </header>

        <div className="w-full mt-[50px]  flex items-center justify-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for username, tag, or a phrase"
            className="w-full  border-slate-300 border-[1.5px] rounded-[8px] py-[8px] px-[12px]  outline-none"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      <PromptCard />
    </section>
  );
}
