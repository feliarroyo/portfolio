import Image from "next/image";
import { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex flex-row gap-4">
      <button onClick={() => setDarkMode(!darkMode)}>
        <Image src={darkMode? "/images/icons/darkmode_on.png" : "/images/icons/darkmode_off.png"} alt="Sun" width={24} height={24} />
      </button>
    </div>
  );
}