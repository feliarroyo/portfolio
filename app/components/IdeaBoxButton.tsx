import Image from "next/image";
import Tooltip from "./Tooltip";

export default function IdeaBoxButton() {
    return (
        <Tooltip text="Future Ideas" position="bottom">
            <a href="/ideas" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/icons/house/house.png"
                    alt="Future Ideas"
                    width={64}
                    height={64}
                    unoptimized
                    style={{ imageRendering: 'pixelated' }}
                />
            </a>
        </Tooltip>
    )
}