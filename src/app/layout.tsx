import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import Navbar from "@/components/main/Navbar";
import "@/styles/globals.css";
import "@/styles/icofont.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MugenSoro",
    description: "MugenSoro is a Multivendor System for Hackathon 2024 in Shr Ram college Gwalior",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <NextTopLoader />
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
