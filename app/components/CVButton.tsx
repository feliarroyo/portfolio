"use client";

import Image from "next/image";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";

export default function CVButton() {
    const {t} = useLanguage();
    return (
        <Tooltip text={t.nav.cv} position="bottom">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/icons/cv/cv.png"
                    alt={t.nav.cv}
                    width={64}
                    height={64}
                    unoptimized
                    style={{ imageRendering: 'pixelated' }}
                />
            </a>
        </Tooltip>
    )
}