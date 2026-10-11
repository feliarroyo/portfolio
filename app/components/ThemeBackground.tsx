import Image from "next/image";

interface CloudTrackProps {
  daySrc: string;
  nightSrc: string;
  animationClass: string;
}

function CloudTrack({ daySrc, nightSrc, animationClass }: CloudTrackProps) {
  const placeholders = [...Array(4)].map((_, i) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img key={i} src={daySrc} alt="" className="h-full w-auto max-w-none opacity-0 pointer-events-none" aria-hidden="true" />
  ));

  return (
    <div className={`absolute inset-y-0 left-0 flex w-max h-full ${animationClass} will-change-transform`}>
      {/* First Segment */}
      <div className="relative flex h-full shrink-0">
        {placeholders}
        
        <div 
          className="absolute inset-0 bg-repeat-x bg-top bg-size-[auto_100%] pixelated" 
          style={{ backgroundImage: `url(${daySrc})`, imageRendering: "pixelated" }} 
        />
        <div 
          className="absolute inset-0 bg-repeat-x bg-top bg-size-[auto_100%] pixelated opacity-0 dark:opacity-100 transition-opacity duration-1000" 
          style={{ backgroundImage: `url(${nightSrc})`, imageRendering: "pixelated" }} 
        />
      </div>

      {/* Duplicate Segment */}
      <div className="relative flex h-full shrink-0 -translate-x-px" aria-hidden="true">
        {placeholders}
        
        <div 
          className="absolute inset-0 bg-repeat-x bg-top bg-size-[auto_100%] pixelated" 
          style={{ backgroundImage: `url(${daySrc})`, imageRendering: "pixelated" }} 
        />
        <div 
          className="absolute inset-0 bg-repeat-x bg-top bg-size-[auto_100%] pixelated opacity-0 dark:opacity-100 transition-opacity duration-1000" 
          style={{ backgroundImage: `url(${nightSrc})`, imageRendering: "pixelated" }} 
        />
      </div>
    </div>
  );
}

export default function ThemeBackground() {
  return (
    <>
      {/* SKY LAYER: z-[-3] */}
      <div className="fixed inset-0 z-[-3] pointer-events-none overflow-hidden bg-cyan-500 dark:bg-purple-950 transition-colors duration-1000">
        {/* Day Sky */}
        <div className="absolute inset-0">
          <Image src="/images/bg/day-bg.png" alt="Day Sky" fill className="object-cover object-top pixelated" unoptimized style={{ imageRendering: "pixelated" }} />
        </div>

        {/* Night Sky */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000">
          <Image src="/images/bg/night-bg.png" alt="Night Sky" fill className="object-cover object-top pixelated" unoptimized style={{ imageRendering: "pixelated" }} />
        </div>
      </div>

      {/* SLIDING ICONS LAYER: z-[-2] */}
      <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
        {/* Sun */}
        <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 transition-transform duration-700 ease-in-out translate-y-0 dark:translate-y-[110vh]">
          <Image
            src="/images/icons/darkmode_off.png"
            alt="Light Mode"
            width={54}
            height={54}
            unoptimized
            style={{ imageRendering: "pixelated" }}
            className="theme-sprite relative z-10 transition-transform duration-300"
          />
        </div>

        {/* Moon */}
        <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 transition-transform duration-700 ease-in-out translate-y-[110vh] dark:translate-y-0">
          <Image
            src="/images/icons/darkmode_on.png"
            alt="Dark Mode"
            width={54}
            height={54}
            unoptimized
            style={{ imageRendering: "pixelated" }}
            className="theme-sprite relative z-10 transition-transform duration-300"
          />
        </div>
      </div>

      {/* CLOUDS LAYER: z-[-1] */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Top Clouds (Furthest - Slowest) */}
        <CloudTrack
          daySrc="/images/bg/day-clouds-top.png"
          nightSrc="/images/bg/night-clouds-top.png"
          animationClass="animate-clouds-slow"
        />

        {/* Middle Clouds (Mid-distance) */}
        <CloudTrack
          daySrc="/images/bg/day-clouds-mid.png"
          nightSrc="/images/bg/night-clouds-mid.png"
          animationClass="animate-clouds-mid"
        />

        {/* Bottom Clouds */}
        <CloudTrack
          daySrc="/images/bg/day-clouds-bot.png"
          nightSrc="/images/bg/night-clouds-bot.png"
          animationClass="animate-clouds-fast"
        />
      </div>
    </>
  );
}