import Image from "next/image";
import Link from "next/link";

const DashboardLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="flex min-h-screen bg-[#111827] text-white">
            <main className="flex-1 flex flex-col">
                <header className="flex justify-between items-center p-6">
                </header>
                <div className="flex-1 p-6 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;