const LandingLayout = ({ children }: {children: React.ReactNode;}) => {
    return (
        <main className="flex h-screen bg-[#080808] text-white overflow-auto">
            <div className="m-auto w-full max-w-screen-xl px-4">
                {children}
            </div>
        </main>
    );
}

export default LandingLayout;