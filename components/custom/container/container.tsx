import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function Container({children}:Props){
    return(
            <div className="w-56 h-36 rounded-lg bg-white shadow-lg inline-flex ml-5 p-3 mt-5">
                <div className="w-full">
                    <p className="text-sm text-[#202224]">{children}</p>
                    <p className="text-3xl mt-3">123</p>
                    <div className="inline-flex mt-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#00B69B"/>
                        </svg>
                        <p className="text-sm text-[#00B69B] p-1 ml-1">Cek Sekarang</p>
                    </div>
                </div>
                <div className="relative">
                <svg className="absolute float-right right-0" width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#8280FF"/>
                    <path opacity="0.587821" fill-rule="evenodd" clip-rule="evenodd" d="M20.6666 23.3333C20.6666 26.2789 23.0544 28.6667 26 28.6667C28.9455 28.6667 31.3333 26.2789 31.3333 23.3333C31.3333 20.3878 28.9455 18 26 18C23.0544 18 20.6666 20.3878 20.6666 23.3333ZM34 28.6667C34 30.8758 35.7908 32.6667 38 32.6667C40.2091 32.6667 42 30.8758 42 28.6667C42 26.4575 40.2091 24.6667 38 24.6667C35.7908 24.6667 34 26.4575 34 28.6667Z" fill="#8280FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9778 31.3333C19.6826 31.3333 14.5177 34.5686 14.0009 40.9322C13.9727 41.2788 14.6356 41.9999 14.97 41.9999H36.9956C37.9972 41.9999 38.0128 41.1939 37.9972 40.9333C37.6065 34.3908 32.3616 31.3333 25.9778 31.3333ZM45.2746 41.9999L40.1333 41.9999C40.1333 38.9987 39.1417 36.229 37.4683 34.0007C42.0103 34.0504 45.7189 36.3468 45.998 41.1999C46.0092 41.3954 45.998 41.9999 45.2746 41.9999Z" fill="#8280FF"/>
                </svg>
                </div>
            </div>
    );
};