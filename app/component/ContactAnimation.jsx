"use client";

import React from "react";
// import "./Cube.css"; 

export default function ContactAnimation() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2B3A42]">
      <div className="relative w-[120px] h-[120px] mt-32 transform-style-preserve-3d rotate-x-[-33.5deg] rotate-y-[45deg] translate-x-[40px]">
        <div className="animate-[hoverY_2s_ease-in-out_infinite_alternate] transform-style-preserve-3d">
          <div className="absolute w-[120px] h-[120px] animate-[flipY_5.2s_infinite]">
            {cubeFaces("outer")}
          </div>
          <div className="absolute w-[120px] h-[120px] top-[-2px] animate-[flipY-innerCube_5.2s_infinite]">
            {cubeFaces("inner")}
          </div>
        </div>
        <div className="absolute w-[120px] h-[120px] translate-x-[-50%] rotate-x-[-90deg] translate-z-[110px] animate-[flipY-outterShadow_5.2s_infinite]">
          <div className="absolute w-[120px] h-[120px] bg-white/50 shadow-[0_0_45px_35px_rgba(255,255,255,0.5)] animate-[scaleBigShadow_2s_ease-in-out_infinite_alternate] scale-[0.8]"></div>
        </div>
        <div className="absolute w-[120px] h-[120px] translate-x-[-50%] rotate-x-[-90deg] translate-z-0 animate-[flipY-innerShadow_5.2s_infinite]">
          <div className="absolute w-[120px] h-[120px] rounded-[15px] bg-gradient-shadow animate-[scaleSmallShadow_2s_ease-in-out_infinite_alternate] scale-[0.4]"></div>
        </div>
      </div>
    </div>
  );
}

function cubeFaces(type) {
  const faces = ["front", "back", "top", "bottom", "left", "right"];
  const baseClass =
    type === "outer"
      ? "absolute w-full h-full border border-white bg-[rgba(141,214,249,0.5)]"
      : "absolute w-full h-full border-2 border-white bg-[#1D78C1]";

  const transforms = {
    front: "translate-z-[60px]",
    back: "rotate-y-180 translate-z-[60px]",
    top: "rotate-x-90 translate-z-[60px]",
    bottom: "rotate-x-[-90deg] translate-z-[60px]",
    left: "rotate-y-[-90deg] translate-z-[60px]",
    right: "rotate-y-90 translate-z-[60px]",
  };

  return faces.map((face) => (
    <div key={face} className={`${baseClass} transform ${transforms[face]}`} />
  ));
}
