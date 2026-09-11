import Image from "next/image";

export default function ThemeBackground() {
  return (
    <>
      {/* SKY LAYER: z-[-3] */}
      <div className="fixed inset-0 z-[-3] pointer-events-none overflow-hidden bg-cyan-500 dark:bg-purple-950 transition-colors duration-1000">
        
        {/* Day Sky: ALWAYS visible (Solid Base Layer) */}
        <div className="absolute inset-0">
          <Image src="/images/bg/day-bg.png" alt="Day Sky" fill className="object-cover object-top pixelated" unoptimized />
          <Image src="/images/bg/day-shine.png" alt="Sun Shine" fill className="object-cover object-top pixelated" unoptimized />
        </div>
        
        {/* Night Sky: Fades IN OVER the day sky */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000">
          <Image src="/images/bg/night-bg.png" alt="Night Sky" fill className="object-cover object-top pixelated" unoptimized />
          <Image src="/images/bg/night-shine.png" alt="Moon Shine" fill className="object-cover object-top pixelated" unoptimized />
        </div>
      </div>

      {/* SLIDING ICONS LAYER: z-[-2] */}
      <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
        {/* Sun */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 transition-transform duration-700 ease-in-out translate-y-0 dark:translate-y-[110vh]">
          <Image
            src="/images/icons/darkmode_off.png" 
            alt="Light Mode"
            width={54}
            height={54}
            unoptimized 
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Moon */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 transition-transform duration-700 ease-in-out translate-y-[110vh] dark:translate-y-0">
          <Image
            src="/images/icons/darkmode_on.png" 
            alt="Dark Mode"
            width={54}
            height={54}
            unoptimized 
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>

      {/* CLOUDS LAYER: z-[-1] */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        
        {/* Day Clouds: ALWAYS visible (Solid Base Layer) */}
        <div className="absolute inset-0">
          <Image src="/images/bg/day-clouds-top.png" alt="Cloud Top" fill className="object-cover object-top pixelated" unoptimized />
          <Image src="/images/bg/day-clouds-mid.png" alt="Cloud Middle" fill className="object-cover object-top pixelated" unoptimized />
          <Image src="/images/bg/day-clouds-bot.png" alt="Cloud Bottom" fill className="object-cover object-top pixelated" unoptimized />
        </div>

        {/* Night Clouds: Fades IN OVER the day clouds */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000">
          <Image src="/images/bg/night-clouds-top.png" alt="Night Cloud Top" fill className="object-cover object-top pixelated" unoptimized />
          <Image src="/images/bg/night-clouds-mid.png" alt="Night Cloud Middle" fill className="object-cover object-top pixelated" unoptimized />
          <Image src="/images/bg/night-clouds-bot.png" alt="Night Cloud Bottom" fill className="object-cover object-top pixelated" unoptimized />
        </div>
      </div>
    </>
  );
}