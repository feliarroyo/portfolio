import Image from "next/image";

export default function SocialMediaIcons() {
  return (
    <div className="flex flex-row gap-4">
      <a href="mailto:feliarroyo@hotmail.com" target="_blank" rel="noopener noreferrer">
        <Image src="/images/icons/sm_mail.png" alt="Twitter" width={24} height={24} />
      </a>
      <a href="https://github.com/feliarroyo" target="_blank" rel="noopener noreferrer">
        <Image src="/images/icons/sm_github.png" alt="GitHub" width={24} height={24} />
      </a>
      <a href="https://www.linkedin.com/in/feli-arroyo/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/icons/sm_linkedin.png" alt="LinkedIn" width={24} height={24} />
      </a>
    </div>
  );
}