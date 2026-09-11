import React from "react";

export default function ThemeGround({ children }: { children: React.ReactNode }) {
    
    // Image scaling
    const SCALE = 4;

    // Tile sizes
    const grassWidth = 12 * SCALE;
    const grassHeight = 14 * SCALE;
    const dirtWidth = 12 * SCALE;
    const dirtHeight = 13 * SCALE;

    return (
        <footer className="relative w-full mt-auto flex flex-col">

            {/* Anchor buttons on top of the grass */}
            <div
                className="absolute w-full flex justify-center z-10 px-4 sm:px-8 pointer-events-none"
                style={{ bottom: "100%" }}
            >
                <div className="w-full max-w-4xl flex justify-evenly items-end pointer-events-auto">
                    {children}
                </div>
            </div>

            {/* Grass tiles replicate on the top of the floor */}
            <div
                className="relative w-full pixelated"
                style={{ height: `${grassHeight}px` }}
            >
                <div
                    className="absolute inset-0 bg-repeat-x bg-bottom transition-opacity duration-1000 opacity-100 dark:opacity-0"
                    style={{
                        backgroundImage: "url('/images/foreground/day-grass-tile.png')",
                        backgroundSize: `${grassWidth}px ${grassHeight}px`,
                        imageRendering: 'pixelated'
                    }}
                />
                <div
                    className="absolute inset-0 bg-repeat-x bg-bottom transition-opacity duration-1000 opacity-0 dark:opacity-100"
                    style={{
                        backgroundImage: "url('/images/foreground/night-grass-tile.png')",
                        backgroundSize: `${grassWidth}px ${grassHeight}px`,
                        imageRendering: 'pixelated'
                    }}
                />
            </div>

            {/* Dirt tiles replicate below the grass*/}
            <div
                className="relative w-full pixelated"
                style={{ height: `${dirtWidth}px ${dirtHeight}px` }}
            >
                <div
                    className="absolute inset-0 bg-repeat transition-opacity duration-1000 opacity-100 dark:opacity-0"
                    style={{
                        backgroundImage: "url('/images/foreground/day-dirt-tile.png')",
                        backgroundSize: `${dirtWidth}px ${dirtHeight}px`,
                        imageRendering: 'pixelated'
                    }}
                />
                <div
                    className="absolute inset-0 bg-repeat transition-opacity duration-1000 opacity-0 dark:opacity-100"
                    style={{
                        backgroundImage: "url('/images/foreground/night-dirt-tile.png')",
                        backgroundSize: `${dirtWidth}px ${dirtHeight}px`,
                        imageRendering: 'pixelated'
                    }}
                />
            </div>

        </footer>
    );
}