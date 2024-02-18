import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TFSA = () => {
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

            <main className="container mx-auto px-4 py-8 min-h-screen bg-[#111827]">
                <section className="mb-12">
                    <Link href="/learn-more">
                        <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded mb-12">
                            <ArrowLeft size={24} />
                        </button>
                    </Link>
                    <h2 className="text-3xl font-bold mb-4">All About Tax-Free Savings Accounts (TFSA)</h2>
                    <p className="text-gray-100">
                        Learn how TFSA works, its benefits, contribution limits, and various investment options.
                    </p><br></br>
                    <p className="text-gray-100">
                        A Tax-Free Savings Account (TFSA) is a registered account that allows Canadians to earn investment income tax-free. You can use a TFSA to save for any goal, whether it's a short-term goal like a new TV or a long-term goal like retirement. The TFSA complements other savings plans like pensions and registered retirement savings plans (RRSPs).
                    </p>
                    <p className="text-gray-100">
                        The TFSA contribution limit for 2023 is $7000.</p>

                    {/* image */}
                    <div className="relative h-110 w-full mb-12 mt-12">
                        <Image src="/tfsa.jpg" alt="TFSA" width={800} height={600} priority />
                    </div>
                    <p className="text-gray-100">
                        All TFSA contributions are made with after-tax dollars, and the money you contribute, as well as the income you earn in the account, is tax-free when you withdraw it. You can withdraw money from your TFSA at any time, for any reason, without paying tax on the withdrawal. You can also use your TFSA to save for a variety of short- and long-term goals, including retirement, a home purchase, or a vacation.
                    </p>

                </section>
            </main>
        </div>
    );
}

export default TFSA;