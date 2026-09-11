import Image from "next/image";

export default function AboutMeButton() {
    return (
        <a href="/about-me" target="_blank" rel="noopener noreferrer">
            <Image
                src="/images/icons/avatar/avatar.png"
                alt="About Me"
                width={64}
                height={64}
                unoptimized
                style={{ imageRendering: 'pixelated' }}
            />
        </a>
    )
}