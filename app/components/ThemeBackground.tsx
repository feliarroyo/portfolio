import Image from "next/image";

interface CloudTrackProps {
  daySrc: string;
  nightSrc: string;
  animationClass: string;
}

function CloudTrack({ daySrc, nightSrc, animationClass }: CloudTrackProps) {
  return (
    <div className={`absolute inset-0 flex w-[200%] h-full ${animationClass} will-change-transform`}>
      {/* First Segment */}
      <div className="relative w-1/2 h-full shrink-0">
        <Image
          src={daySrc}
          alt=""
          fill
          className="object-cover object-top pixelated transition-opacity duration-1000 dark:opacity-0"
        />
        <Image
          src={nightSrc}
          alt=""
          fill
          className="object-cover object-top pixelated opacity-0 dark:opacity-100 transition-opacity duration-1000"
        />
      </div>

      {/* Duplicate Segment (Enables seamless looping) */}
      <div className="relative w-1/2 h-full shrink-0 -translate-x-px" aria-hidden="true">
        <Image
          src={daySrc}
          alt=""
          fill
          unoptimized
          className="object-cover object-top pixelated transition-opacity duration-1000 dark:opacity-0"
        />
        <Image
          src={nightSrc}
          alt=""
          fill
          unoptimized
          className="object-cover object-top pixelated opacity-0 dark:opacity-100 transition-opacity duration-1000"
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
          <Image src="/images/bg/day-bg.png" alt="Day Sky" fill className="object-cover object-top pixelated" unoptimized />
          <Image src="/images/bg/day-shine.png" alt="Sun Shine" fill className="object-cover object-top pixelated" unoptimized />
        </div>

        {/* Night Sky */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000">
          <Image src="/images/bg/night-bg.png" alt="Night Sky" fill className="object-cover object-top pixelated" unoptimized />
          <Image src="/images/bg/night-shine.png" alt="Moon Shine" fill className="object-cover object-top pixelated" unoptimized />
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