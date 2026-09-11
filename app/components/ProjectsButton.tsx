import Image from "next/image";

export default function ProjectsButton() {
    return (
        <a href="/projects" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/chest/chest_3.png" alt="Projects" width={24} height={24} />
        </a>
    )
}