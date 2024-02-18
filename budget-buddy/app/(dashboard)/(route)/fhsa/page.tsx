import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FHSA = () => {
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
                    <h2 className="text-3xl font-bold mb-4">All About First Home Savings Accounts (FHSA)</h2>
                    <p className="text-gray-100">
                        Explore FHSA and how it can help you save for your first home purchase.
                    </p><br></br>
                    <p className="text-gray-100">
                        A First Home Savings Account (FHSA) is a type of savings account that allows Canadians to save for their first home. The FHSA complements other savings plans like pensions and registered retirement savings plans (RRSPs).
                    </p>
                    <p className="text-gray-100">
                        The FHSA contribution limit for 2023 is $7000.
                    </p>

                    {/* image */}
                    <div className="relative h-110 w-full mb-12 mt-12">
                        <Image src="/fhsa.avif" alt="FHSA" width={800} height={600} priority />
                    </div>
                    <p className="text-gray-100">
                        The FHSA is designed to help Canadians save for their first home. The FHSA complements other savings plans like pensions and registered retirement savings plans (RRSPs). The FHSA contribution limit for 2023 is $7000.
                    </p>

                </section>
            </main>
        </div>
    );
}

export default FHSA;