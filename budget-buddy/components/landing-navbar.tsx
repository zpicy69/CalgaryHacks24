"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="flex flex-col items-center py-4 px-6 bg-[#111827] text-white">
            <nav className="w-full flex justify-between items-center">
                {/* Learn More Link */}
                <Link href="/learn-more">
                    <span className="text-sm uppercase cursor-pointer hover:underline">Learn More</span>
                </Link>

                {/* Placeholder for right-aligned content */}
                <div className="text-right">
                    <span className="text-xs">Built By University Students, For University Students</span>
                </div>
            </nav>
            <div className="text-center my-4">
                {/* Logo and Title */}
                <div className="flex justify-center items-center">
                    <div className="relative h-12 w-12 mr-3">
                        <Image src="/logo.png" layout="fill" alt="Logo" priority />
                    </div>
                    <h1 className="text-4xl font-bold">BudgetBuddy</h1>
                </div>
                {/* Tagline and Get Started Button */}
                <p className="mt-2">
                    Simplify Budgeting - Stay On Top Of Your Finances
                </p>
                <p className="mt-1">
                    Discover Top Stocks And Watch Your Money Grow
                </p>
                <p className="mt-1 mb-4">
                    Learn About Savings Accounts
                </p>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2 rounded-full transition-all">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
};