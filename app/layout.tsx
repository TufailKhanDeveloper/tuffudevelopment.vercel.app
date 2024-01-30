import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://tuffudevelopment.vercel.com/"),
    title: "Tuffu Development",
    description:
    "I'm Muhammad Tufail Khan, a Full Stack Blockchain Developer. I make cool Apps & Website, studies in Karachi, Pakistan at UBIT Karachi University.",
    generator: "Next.js",
    applicationName: "Tuffu Development",
    keywords: [
        "Tuffu Development",
        "Tufail Khan",
        "TufailKhanDeveloper",
        "Muhammad Tufail Khan",
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "solidity",
        "react",
        "frontend developer",
        "frontend engineer",
        "web3",
        "blockchain developer",
        "web3 engineer",
        "Blockchain",
        "Pakistan",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "blockchain developer portfolio",
        "web3 engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Tuffu Development",
        description:
      "I'm Muhammad Tufail Khan, a Full Stack Blockchain Developer. I make cool Apps & Website, studies in Karachi, Pakistan at UBIT Karachi University.",
        url: "https://tuffudevelopment.vercel.com/",
        siteName: "Tuffu Development",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Tuffu Development",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tuffu Development",
        description:
      "I'm Muhammad Tufail Khan, a Full Stack Blockchain Developer. I make cool Apps & Website, studies in Karachi, Pakistan at UBIT Karachi University.",
        creator: "Tuffu",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
