"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="w-full p-[24px] bg-white shadow-md h-[80px]">
      <div className="md:w-[80%] w-full mx-auto  flex items-center justify-between">
        <Link href="/" className="text-[24px] font-bold cursor-pointer">
          Prompt-ai
        </Link>

        <div className="flex items-center justify-between gap-x-[20px]">
          {isLoggedIn && (
            <div>
              <ul className="flex items-center gap-x-[10px]">
                <Link href="/prompt">
                  <li className="bg-[#fff] py-[8px] px-[16px] rounded-full text-[#000]  border-[1.5px]  border-black transition-all font-semibold text-[13px] flex items-center justify-center">
                    Create Prompt
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {isLoggedIn ? (
            <button className="bg-[#fff] py-[8px] px-[16px] rounded-full text-[#000] hover:text-[#fff] hover:bg-[#000] border-[1.5px] border-transparent hover:border-[1.5px] hover:border-black transition-all font-semibold text-[16px] flex items-center justify-center">
              Sign Out
            </button>
          ) : (
            <Link href="/auth/login">
              <button className="bg-black py-[8px] px-[16px] rounded-full text-white hover:text-black hover:bg-white border-[1.5px] border-transparent hover:border-[1.5px] hover:border-black transition-all font-semibold text-[16px] flex items-center justify-center">
                Sign In
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link href="/profile">
              <Image src="" width={30} height={30} alt="profile icon" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
