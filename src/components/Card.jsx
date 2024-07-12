import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
function Card() {
  const [changeStatus, setChangeStatus] = useState(true);
  return (
    <div className="relative h-32 w-60 rounded-md overflow-hidden flex shadow-xl shadow-black/50 ">
      <img
        src="https://images.unsplash.com/photo-1528214968864-8dd00782fa9e?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={` shrink-0 h-full w-full object-cover transition-transform delay-300 ${
          changeStatus ? "-translate-x-[0%]" : "-translate-x-[100%]"
        }`}
        alt="Img"
      />
      <img
        src="https://images.unsplash.com/photo-1496614932623-0a3a9743552e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={` shrink-0 h-full w-full object-cover transition-transform delay-300  ${
          changeStatus ? "-translate-x-[0%]" : "-translate-x-[100%]"
        }`}
        alt="Img"
      />
      <span
        onClick={() => setChangeStatus(() => !changeStatus)}
        className="h-6 w-6 absolute -bottom-3 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-[#dadada2b] rounded-full flex items-center justify-center"
      >
        <FaArrowRight
          size={"0.8em"}
          className={`transition-transform delay-300 ${
            changeStatus ? "" : "rotate-180"
          }`}
        />
      </span>
    </div>
  );
}

export default Card;
