"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import LogoTB from "../Storage/logo-tb-1.png";
import CalendarApp from "@/components/custom/calendar/calendar";

export default function HomePage() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background SVG */}
      <div className="absolute top-0 left-0 right-0 -z-20 w-full">
        <svg
          className="w-full"
          viewBox="0 0 1440 555"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1089.05 383.345C810.704 246.022 247.039 440.564 0 555V0H1440V555L1406.71 537.231C1401.03 534.633 1333.71 502.159 1089.05 383.345Z"
            fill="#204C6C"
          />
        </svg>
      </div>
      {/* Static Navbar */}
      <div className="px-7 pt-12">
        <div className="w-full h-[105px] bg-white rounded-3xl border border-[#BDBBBB] p-9 shadow-md">
          <div className="flex justify-between items-center h-full">
            {/* Gambar */}
            <div className="flex items-center">
              <Image src={LogoTB} alt="Logo" width={80} height={69} />
            </div>

            {/* Teks */}
            <div className="flex justify-center items-center h-full">
              <h1 className="font-bold font-nunito text-2xl">SIMS TARUNA BHAKTI</h1>
            </div>

            {/* Tombol Log Out */}
            <div>
              <a href="" className="flex">
                <button className="w-40 h-11 rounded-lg bg-[#F03333] px-5 pr-2 flex items-center justify-center text-white font-semibold text-sm gap-1 poppins-semibold">
                  <svg
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3351 0.303711C15.363 0.303711 17.8324 2.73081 17.8324 5.71896V11.5611H10.3869C9.85329 11.5611 9.43137 11.9758 9.43137 12.5002C9.43137 13.0125 9.85329 13.4393 10.3869 13.4393H17.8324V19.2693C17.8324 22.2574 15.363 24.6967 12.3103 24.6967H6.26702C3.22676 24.6967 0.757324 22.2696 0.757324 19.2815V5.73115C0.757324 2.73081 3.23917 0.303711 6.27943 0.303711H12.3351ZM20.9306 8.29266C21.2965 7.91457 21.8941 7.91457 22.26 8.28047L25.8214 11.8296C26.0043 12.0126 26.1019 12.2443 26.1019 12.5005C26.1019 12.7444 26.0043 12.9883 25.8214 13.1591L22.26 16.7082C22.077 16.8912 21.8331 16.9888 21.6014 16.9888C21.3575 16.9888 21.1135 16.8912 20.9306 16.7082C20.5647 16.3424 20.5647 15.7447 20.9306 15.3788L22.882 13.4396H17.8327V11.5613H22.882L20.9306 9.62208C20.5647 9.25619 20.5647 8.65856 20.9306 8.29266Z"
                      fill="white"
                    />
                  </svg>
                  Log Out
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* penanda aja */}
      <div className="relative px-7 mt-5">
        <div className="flex justify-between">
          <div className="flex items-center justify-center w-64 h-12 rounded-2xl bg-[#1D70B4]">
            <h3 className="font-bold text-xl text-white font-nunito">Upcoming Events</h3>
          </div>
          <div className="min-w-64 flex justify-center">
          <div className="flex items-center justify-center w-48 h-12 rounded-2xl bg-[#1D70B4]">
            <h3 className="font-bold text-xl text-white text-center items-center font-nunito">
              Summary
            </h3>
          </div>
          </div>
          
        </div>
      </div>
      {/* Main Content*/}

    <div className="flex justify-between min-w-screen px-7 mt-8 gap-x-6">
        {/* Full Calendar */}
        <div className="container max-h-[672px] rounded-[25px] bg-white drop-shadow-lg flex flex-col justify-center p-1">
            <CalendarApp />
        </div>
        {/* End Full Calendar */}

        <div className="container min-w-56 max-w-64 h-[672px] rounded-[25px] bg-white drop-shadow-lg">
          <div className="mb-8 flex items-center justify-center">
            <div className="relative pt-8">
              <button
                className={`w-36 h-9 border border-[#8D8787] flex items-center justify-between px-3 bg-white transition-all duration-300 ${
                  isDropdownOpen ? "rounded-t-xl" : "rounded-xl"
                }`}
                onClick={toggleDropdown}
              >
                <span>January</span>
                <ChevronDownIcon
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`absolute w-36 bg-white border-x border-b border-[#8D8787] rounded-b-xl overflow-hidden transition-all duration-300 origin-top z-10 ${
                  isDropdownOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  borderTop: isDropdownOpen ? "none" : "0px solid transparent",
                }}
              >
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-100">
                  January
                </button>
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-100">
                  February
                </button>
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-100">
                  March
                </button>
              </div>
            </div>
          </div>

          {/* Calendar event List */}
          <div className="flex items-center justify-center mb-8">
            {/* Event Card */}
            <div className="w-52 h-24 rounded-[15px] border-b-[3px] border-[#204C6C] p-[10px_5px_10px] flex items-start gap-[25px]">
              <div className="gap-2 ml-3">
                <p className="font-medium text-xs">Tgl 01, Senin</p>
                <p className="font-bold text-md">Upacara Hari </p>
                <p className="font-medium text-xs text-[#204C6C]">
                  07.00 - 09.00
                </p>
              </div>
              <div className="mt-5 ml-3">
                <svg
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13.5L7 7.5L1 1.5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* End Event Card */}
          </div>
          {/* End Calendar event List */}
        </div>
    </div>


      <div className="flex justify-center items-center mt-10 mb-16">
        <div className="mt-2 flex justify-center items-center w-80 h-16 bg-[#1D70B4] rounded-3xl mb-2">
          <h1 className="text-white font-bold text-3xl">Features</h1>
        </div>
      </div>
      <div className="justify-evenly gap-16 mb-5 inline-flex flex-wrap">
        <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black">
          <a href="">
            <p className="font-bold text-xl">Subdomain</p>
            <p className="font-normal text-xs">Subdomain</p>
          </a>
        </div>
        <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black">
          <a href="">
            <p>haha</p>
          </a>
        </div>
        <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black">
          <a href="">
            <p>haha</p>
          </a>
        </div>
        <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black">
          <a href="">
            <p>haha</p>
          </a>
        </div>
        <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black">
          <a href="">
            <p>haha</p>
          </a>
        </div>
        <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black">
          <a href="">
            <p>testt</p>
          </a>
        </div>
        <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black">
          <a href="">
            <p>haha</p>
          </a>
        </div>
        <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black">
          <a href="">
            <p>haha</p>
          </a>
        </div>
      </div>
    </div>
  );
};
