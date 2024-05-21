"use client";
import "./style.css";
import Image from "next/image";

import Icon from "../../public/next.svg";
import Copy from "../../public/vercel.svg";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

function PromptCard() {
  const pathName = usePathname();
  const [coping, setCoping] = useState(false);

  function handleCopy() {
    setCoping(true);

    setTimeout(() => {
      setCoping(false);
    }, 3000);
  }

  return (
    <div className="my-[3rem] px-[24px] flex flex-wrap gap-[10px]">
      <div className="card md:w-[300px] md:mx-0 w-[90%] mx-auto">
        <div className="flex items-center gap-x-[5px] ">
          <div className="logo">
            <Image
              src="https://images.unsplash.com/photo-1716034351843-98080eafa00c?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={40}
              height={40}
              alt="user icon"
              className="rounded-full bg-sky-500  object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-[15px] font-semibold">Mike Jones</h1>
            <p className="text-[14px] text-slate-400">mikjones@gmail.com</p>
          </div>

          {coping ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#008000"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                color="currentColor"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              onClick={handleCopy}
            >
              <path
                fill="currentColor"
                d="M18.355 6.54h-1.94V4.69a2.69 2.69 0 0 0-1.646-2.484A2.66 2.66 0 0 0 13.745 2h-8.05a2.68 2.68 0 0 0-2.67 2.69v10.09a2.68 2.68 0 0 0 2.67 2.69h1.94v1.85a2.68 2.68 0 0 0 2.67 2.68h8a2.68 2.68 0 0 0 2.67-2.68V9.23a2.69 2.69 0 0 0-2.62-2.69M7.635 9.23v6.74h-1.94a1.18 1.18 0 0 1-1.17-1.19V4.69a1.18 1.18 0 0 1 1.17-1.19h8.05a1.18 1.18 0 0 1 1.17 1.19v1.85h-4.61a2.69 2.69 0 0 0-2.67 2.69"
              />
            </svg>
          )}
        </div>

        <div className="mt-[5px] text-[14px]">
          <p id="text-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            dolorem sit harum nam itaque repudiandae tempore vitae architecto
            iure mollitia.
          </p>

          <div className="mt-[5px]">
            <span className="text-sky-500 ">#web</span>
          </div>
        </div>

        {/* btn */}

        {pathName === "/profile" && (
          <div className="w-full flex items-center gap-x-[10px]">
            <Link href="/profile/edit-prompt" className="btn">
              Edit
            </Link>
            <button className="btn">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PromptCard;
