// page to learn more about TFSA/FHSA and other finances
// Stocks and compound interest
import Image from "next/image";
import Link from "next/link";

const LearnMorePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
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

                <div className="relative h-24 w-24">
                    <Image src="/image.png" layout="fill" alt="Chart Logo" priority />
                </div>
            </nav>

            <main className="container mx-auto p-4 py-8">
                <section className="mb-12">
                    <h2 className="text-4xl font-semibold mb-4">Learn More About</h2>
                    <p className="text-lg">
                        BudgetBuddy is a tool that helps you track your expenses and manage your finances. It's easy to use and can help you save money.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default LearnMorePage;