import Image from "next/image";

export default function IdeaBoxButton() {
    return (
        <a href="/projects" target="_blank" rel="noopener noreferrer">
            <Image
                src="/images/icons/house/house.png"
                alt="Future Ideas"
                width={32}
                height={32}
                unoptimized
                style={{ imageRendering: 'pixelated' }}
            />
        </a>
    )
}