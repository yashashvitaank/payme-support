import React from "react";
import Avatar from "/public/avatar.svg";
import Image from "next/image";
function NavBar({tktId}) {
  return (
    <div className="w-full fixed top-0 h-14 py-4 px-3 bg-[#007084] flex justify-between items-center shadow-md">
      <div className="flex justify-center items-center gap-2 px-3">
        <div className="w-3 h-3 bg-green-300 rounded-full" />
        <p className="text-white text-base font-medium md:text-lg">Quantina (Support)</p>
      </div>
      <div className="flex gap-2 items-center text-white">
        <p>{tktId}</p>
        <Image src={Avatar} width={50} height={50} alt="avatar" className="" />
      </div>
    </div>
  );
}

export default NavBar;
