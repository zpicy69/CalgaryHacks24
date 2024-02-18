import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BudgetTrackPage = () => {
    return (
        <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
            <nav className="flex justify-between items-start py-4 px-6 bg-[#111827] text-white">
                <div className="flex-1 flex justify-center flex-col items-center text-center">
                    <h1 className="text-4xl font-bold mt-2">BudgetBuddy</h1>
                    <p className="mt-2">
                        Simplify Budgeting - Stay On Top Of Your Finances
                    </p>
                </div>
            </nav>

            <main className="container mx-auto p-4 py-8">
                <Link href="/">
                      <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded mb-12">
                          <ArrowLeft size={24} />
                      </button>
                  </Link>
                <section className="mb-12">
                    <h2 className="text-4xl font-semibold mb-4">Track Your Budget</h2>
                    <p className="text-lg">
                        BudgetBuddy is a tool that helps you track your expenses and manage your finances. It's easy to use and can help you save money.
                    </p>
                    <p className="text-lg mt-4">
                        <Link href="https://budget-buddy-theta.vercel.app/">
                            <Button className="underline bg-indigo-500 hover:bg-indigo-700">
                                Track Your Budget Now!
                            </Button>
                        </Link>
                    </p>
                </section>
            </main>
        </div>
    );
}
 
export default BudgetTrackPage;