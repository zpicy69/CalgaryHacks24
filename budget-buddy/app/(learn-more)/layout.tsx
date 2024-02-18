// Code a design for how it works, track your expenses
// Step 1: Enter the Money You Spent Last Month
// BudgetBuddy automatically calculates the money you can save

const LearnMoreLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <main className="flex h-screen bg-[#080808] text-white overflow-auto">
            <div className="m-auto w-full max-w-screen-xl px-4">
                {children}
            </div>
        </main>
    );
}

export default LearnMoreLayout;