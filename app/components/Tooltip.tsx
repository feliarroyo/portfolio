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
  
  // Map positions to their specific Tailwind layout classes
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2 flex-col",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2 flex-col",
    left: "right-full mr-2 flex-row top-1/2 -translate-y-1/2",
    right: "left-full ml-2 flex-row top-1/2 -translate-y-1/2",
    
    // Edge-aware positions
    "top-right": "bottom-full right-0 mb-2 flex-col items-end", 
    "top-left": "bottom-full left-0 mb-2 flex-col items-start", 
    "bottom-right": "top-full right-0 mt-2 flex-col items-end",
    "bottom-left": "top-full left-0 mt-2 flex-col items-start",
  };

  // 2. Render the pixel-art pointer arrow correctly based on direction
  const renderArrow = () => {
    switch (position) {
      // Pointing DOWN
      case "top":
        return <div className="w-2 h-2 bg-black dark:bg-white z-10 -mt-[2px]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />;
      case "top-left":
        return <div className="w-2 h-2 bg-black dark:bg-white z-10 -mt-[2px] ml-4" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />;
      case "top-right":
        return <div className="w-2 h-2 bg-black dark:bg-white z-10 -mt-[2px] mr-4" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />;
      
      // Pointing UP
      case "bottom":
        return <div className="w-2 h-2 bg-black dark:bg-white z-10 -mb-[2px]" style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} />;
      case "bottom-left":
        return <div className="w-2 h-2 bg-black dark:bg-white z-10 -mb-[2px] ml-4" style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} />;
      case "bottom-right":
        return <div className="w-2 h-2 bg-black dark:bg-white z-10 -mb-[2px] mr-4" style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} />;
      
      // Pointing RIGHT
      case "left":
        return <div className="w-2 h-2 bg-black dark:bg-white z-10 -ml-[2px]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />;
      
      // Pointing LEFT
      case "right":
        return <div className="w-2 h-2 bg-black dark:bg-white z-10 -mr-[2px]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }} />;
    }
  };

  // 3. Helper to determine flex order
  const isBottom = position.startsWith("bottom");
  const isRight = position === "right";

  return (
    <div className="relative flex items-center justify-center group inline-block">
      {/* The element being hovered */}
      {children}

      {/* Tooltip Box */}
      <div 
        className={`absolute hidden group-hover:flex items-center justify-center pointer-events-none z-50 ${positionClasses[position]}`}
      >
        {/* Adjust arrow in edge-cases */}
        {(isBottom || isRight) && renderArrow()}
        
        <span className="whitespace-nowrap px-3 py-1 bg-white text-black border-2 border-black dark:bg-black dark:text-white dark:border-white crisp-pixel-font text-sm relative z-0">
          {text}
        </span>
        {(!isBottom && !isRight) && renderArrow()}
      </div>
    </div>
  );
}