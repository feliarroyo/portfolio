"use client";

import Image from "next/image";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";

export default function IdeaBoxButton() {
    const {t} = useLanguage();
    return (
        <Tooltip text={t.nav.ideaBox} position="bottom">
            <a href="/ideas" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/icons/house/house.png"
                    alt={t.nav.ideaBox}
                    width={64}
                    height={64}
                    unoptimized
                    style={{ imageRendering: 'pixelated' }}
                />
            </a>
        </Tooltip>
    )
}