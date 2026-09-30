import React, { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: 
    | "top" 
    | "bottom" 
    | "left" 
    | "right" 
    | "top-right" 
    | "top-left" 
    | "bottom-right" 
    | "bottom-left";
}

export default function Tooltip({ text, children, position = "top" }: TooltipProps) {
  
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2 flex-col",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2 flex-col",
    left: "right-full mr-2 flex-row top-1/2 -translate-y-1/2",
    right: "left-full ml-2 flex-row top-1/2 -translate-y-1/2",
    "top-right": "bottom-full right-0 mb-2 flex-col items-end", 
    "top-left": "bottom-full left-0 mb-2 flex-col items-start", 
    "bottom-right": "top-full right-0 mt-2 flex-col items-end",
    "bottom-left": "top-full left-0 mt-2 flex-col items-start",
  };

  const renderArrow = () => {
    // Map the tooltip position to the physical direction the arrow needs to point
    let direction: "up" | "down" | "left" | "right" = "down";
    if (position.startsWith("top")) direction = "down"; 
    if (position.startsWith("bottom")) direction = "up";   
    if (position === "left") direction = "right";          
    if (position === "right") direction = "left";          

    const spriteOffsets = {
      up: "0% 0%",
      down: "33.333% 0%",
      left: "66.666% 0%",
      right: "100% 0%"
    };

    // Edge-aware alignment classes
    const edgeClasses = 
      position === "top-left" || position === "bottom-left" ? "ml-4" :
      position === "top-right" || position === "bottom-right" ? "mr-4" : "";

    // Offset to connect seamlessly on the tooltip
    const offsetClasses = 
      direction === "down" ? "-mt-[8px]" :
      direction === "up" ? "-mb-[8px]" :
      direction === "right" ? "-ml-[8px]" : "-mr-[8px]";

    return (
      <div 
        className={`w-4 h-4 z-10 ${offsetClasses} ${edgeClasses}`}
        style={{
          backgroundImage: "url('/assets/tooltip-tip.png')",
          backgroundSize: "400% 100%", // four sprites for each direction
          backgroundPosition: spriteOffsets[direction],
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
        }}
      />
    );
  };

  const isBottom = position.startsWith("bottom");
  const isRight = position === "right";

  return (
    <div className="relative items-center justify-center group inline-block">
      {children}

      <div 
        className={`absolute hidden group-hover:flex items-center justify-center pointer-events-none z-50 ${positionClasses[position]}`}
      >
        {(isBottom || isRight) && renderArrow()}
        
        <span 
          className="whitespace-nowrap text-black crisp-pixel-font text-sm relative z-0"
          style={{
            borderStyle: "solid",
            borderWidth: "8px 4px 8px 4px",
            borderImageSource: "url('/assets/tooltip-sprite.png')", 
            borderImageSlice: "8 4 8 4 fill", 
            borderImageRepeat: "stretch",
            imageRendering: "pixelated", 
            padding: "2px 6px"
          }}
        >
          {text}
        </span>
        
        {(!isBottom && !isRight) && renderArrow()}
      </div>
    </div>
  );
}