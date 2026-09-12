"use client";

import Image from "next/image";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";

export default function AboutMeButton() {
    const { t } = useLanguage();

    return (
        <Tooltip text={t.nav.aboutMe} position="bottom">
            <a href="/about-me" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/icons/avatar/avatar.png"
                    alt={t.nav.aboutMe}
                    width={64}
                    height={64}
                    unoptimized
                    style={{ imageRendering: 'pixelated' }}
                />
            </a>
        </Tooltip>
    )
}