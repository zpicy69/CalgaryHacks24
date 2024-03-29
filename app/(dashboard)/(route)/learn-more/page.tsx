// page to learn more about TFSA/FHSA and other finances
// Stocks and compound interest
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigLeftDash } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const LearnMorePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="flex justify-between items-start py-4 px-6 bg-[#111827] text-white">
                <div className="flex-1 flex justify-center flex-col items-center text-center">
                    <div className="relative h-12 w-12">
                        <Image src="/logo.png" layout="fill" alt="Logo" priority />
                    </div>
                    <h1 className="text-4xl font-bold mt-2">BudgetBuddy</h1>
                    <p className="mt-2">
                        Simplify Budgeting - Stay On Top Of Your Finances
                    </p>
                </div>

            </nav>

            <main className="flex-row flex-col mx-auto px-4 py-8 min-h-screen bg-[#111827]">
                <section className="mb-12">
                    <Link href="/">
                        <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded mb-12">
                            <ArrowLeft size={24} />
                        </button>
                    </Link>
                    <h2 className="text-3xl font-bold mb-4">Learn More About Investing in Canada</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">All About Tax-Free Savings Accounts (TFSA)</h3>
                            <p className="text-gray-100">
                                Learn how TFSA works, its benefits, contribution limits, and various investment options.
                            </p>
                            <Link href="/tfsa">
                                <Button className="text-black-500 hover:text-black-800 mt-2 inline-block hover:underline">Learn More</Button>
                            </Link>
                        </div>
                        <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">All About First Home Savings Accounts (FHSA)</h3>
                            <p className="text-gray-100">
                                Explore FHSA and how it can help you save for your first home purchase.
                            </p>
                            <Link href="/fhsa">
                                <Button className="text-black-500 hover:text-black-800 mt-2 inline-block hover:underline">Learn More</Button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">General Investing Tips</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"></div>
                    <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-3xl font-bold mb-4">All About Investing in Canada</h2>
                        <p className="text-gray-100">
                            Investments in Canada fall into three main categories: stocks, bonds, and cash.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Stocks</h3>
                            <p className="text-gray-100 mb-4">
                                Stocks are a type of security that gives stockholders a share of ownership in a company.
                            </p>
                            <p className="text-gray-100">
                                Buy stocks in companies you believe will grow and hold them for the long term.
                            </p>
                        </div>
                        <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Bonds</h3>
                            <p className="text-gray-100 mb-4">
                                Bonds are a type of fixed-income investment that provides income through regular interest payments.
                            </p>
                            <p className="text-gray-100">
                                Bonds are generally considered less risky than stocks.
                            </p>
                        </div>
                        <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Cash</h3>
                            <p className="text-gray-100 mb-4">
                                Cash investments include everyday bank accounts, high-interest savings accounts, and term deposits.
                            </p>
                            <p className="text-gray-100 mb-4">
                                Cash investments are considered the safest form of investment.
                            </p>
                            <p className="text-gray-100">In Canada, many institutions offer cash accounts.</p>
                        </div>
                    </div>

                </section>
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">BudgetBuddy Recommends These Investing Accounts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">WealthSimple Cash Account</h3>
                                <p className="text-gray-100">
                                    Wealthsimple Cash offers no monthly account fees, 4% interest on your balance, and a sleek metal card.
                                </p>
                                <Link href="https://wealthsimple.com/cash" target="_blank" rel="noopener noreferrer">
                                    <Button className="text-black-500 hover:text-black-800 mt-2 inline-block hover:underline">Visit Website</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">RBC High-Interest eSavings Account</h3>
                                <p className="text-gray-100">
                                    RBC High-Interest eSavings Account offers a high-interest rate and no monthly fees.
                                </p>
                                <Link href="https://www.rbcroyalbank.com/accounts/e-savings.html" target="_blank" rel="noopener noreferrer">
                                    <Button className="text-black-500 hover:text-black-800 mt-2 inline-block hover:underline">Visit Website</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-[#2D796D] text-white p-6 rounded-lg shadow-md">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">Tangerine Savings Account</h3>
                                <p className="text-gray-100">
                                    Tangerine Savings Account offers a high-interest rate and no monthly fees.
                                </p>
                                <Link href="https://www.tangerine.ca/en/personal/save/savings-account" target="_blank" rel="noopener noreferrer">
                                    <Button className="text-black-500 hover:text-black-800 mt-2 inline-block hover:underline">Visit Website</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LearnMorePage;