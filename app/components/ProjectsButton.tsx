import Image from "next/image";
import Tooltip from "./Tooltip";

export default function ProjectsButton() {
    return (
        <Tooltip text="Projects" position="bottom">
            <a href="/projects" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/icons/chest/chest_3.png"
                    alt="Projects"
                    width={64}
                    height={64}
                    unoptimized
                    style={{ imageRendering: 'pixelated' }}
                />
            </a>
        </Tooltip>
    )
}