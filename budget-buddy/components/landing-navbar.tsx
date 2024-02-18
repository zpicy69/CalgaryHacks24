"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="flex justify-between items-start py-4 px-6 bg-[#111827] text-white">
            <Link href="/learn-more">
                <span className="text-sm uppercase cursor-pointer hover:underline">Learn More</span>
            </Link>

            <div className="flex-1 flex justify-center flex-col items-center text-center">
                <div className="relative h-12 w-12">
                    <Image src="/logo.png" layout="fill" alt="Logo" priority />
                </div>
                <h1 className="text-4xl font-bold mt-2">BudgetBuddy</h1>
                <p className="mt-2">
                    Simplify Budgeting - Stay On Top Of Your Finances
                </p>
                <Link href="/dashboard">
                    <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-full transition-all">
                        Get Started
                    </button>
                </Link>
            </div>

            <div className="relative w-80 h-80">
                <Image src="/image.png" layout="fill" objectFit="cover" alt="Chart Logo" priority />
            </div>
        </nav>
    );
};