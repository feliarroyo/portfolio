import Image from "next/image";
import Tooltip from "./Tooltip";

export default function AboutMeButton() {
    return (
        <Tooltip text="About Me" position="bottom">
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
        </Tooltip>
    )
}