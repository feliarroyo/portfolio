import Image from "next/image";

export default function IdeaBoxButton() {
    return (
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
    )
}