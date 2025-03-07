import React, { useState } from "react";
import logo from "./../assets/Images/logo.jpg";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex items-center p-5">
      <img src={logo} width={60} height={60} />
      <div
        className="flex bg-slate-200 p-2 w-full
        mx-5 rounded-full items-center"
      >
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Seacrh Games"
          className="px-2 bg-transparent dark bg-cyan-500 outline-none"
        />
      </div>
      <div>
        {toggle ? (
          <HiMoon className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer" onClick={()=>setToggle(!toggle)}/>
        ) : (
          <HiSun className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer" onClick={()=>setToggle(!toggle)} />
        )}
      </div>
    </div>
  );
}

export default Header;
