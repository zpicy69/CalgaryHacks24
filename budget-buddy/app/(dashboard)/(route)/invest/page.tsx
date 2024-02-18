'use client'

import React, { useState, useEffect } from 'react';

// Sample data for stock categories and their corresponding stock picks
const stockData = {
    tech: {
        stocks: [
            { symbol: 'AAPL', description: 'Apple Inc. - Technology company known for its innovative products.' },
            { symbol: 'GOOGL', description: 'Alphabet Inc. - Parent company of Google, offering various technology services.' },
            { symbol: 'MSFT', description: 'Microsoft Corporation - Leading technology company with a wide range of software products.' },
        ],
        description: 'Technology companies that have shown consistent growth and innovation.',
    },
    health: {
        stocks: [
            { symbol: 'JNJ', description: 'Johnson & Johnson - Global healthcare company specializing in pharmaceuticals, medical devices, and consumer goods.' },
            { symbol: 'PFE', description: 'Pfizer Inc. - Pharmaceutical company known for its research and development of innovative drugs.' },
            { symbol: 'MRNA', description: 'Moderna Inc. - Biotechnology company focused on developing mRNA-based vaccines and therapeutics.' },
        ],
        description: 'Pharmaceutical and healthcare companies that have a strong market presence.',
    },
    resources: {
        stocks: [
            { symbol: 'XOM', description: 'Exxon Mobil Corporation - Multinational oil and gas company engaged in exploration, production, and refining.' },
            { symbol: 'CVX', description: 'Chevron Corporation - Integrated energy company involved in various aspects of the energy industry.' },
            { symbol: 'COP', description: 'ConocoPhillips - Independent exploration and production company with a global presence.' },
        ],
        description: 'Companies in the energy and natural resources sector.',
    },
    finance: {
        stocks: [
            { symbol: 'JPM', description: 'JPMorgan Chase & Co. - One of the largest financial institutions offering a wide range of financial services.' },
            { symbol: 'BAC', description: 'Bank of America Corporation - Global banking and financial services company.' },
            { symbol: 'WFC', description: 'Wells Fargo & Company - Diversified financial services company providing banking, investment, and mortgage services.' },
        ],
        description: 'Financial institutions with a solid track record and stable performance.',
    },
    consumer: {
        stocks: [
            { symbol: 'WMT', description: 'Walmart Inc. - Multinational retail corporation offering a wide range of consumer products.' },
            { symbol: 'PG', description: 'Procter & Gamble Company - Consumer goods company known for its diverse portfolio of brands.' },
            { symbol: 'KO', description: 'The Coca-Cola Company - Beverage company with a strong global presence.' },
        ],
        description: 'Well-established consumer goods companies with a wide customer base.',
    },
    industrial: {
        stocks: [
            { symbol: 'BA', description: 'The Boeing Company - Leading aerospace and defense manufacturer.' },
            { symbol: 'CAT', description: 'Caterpillar Inc. - Construction and mining equipment manufacturer.' },
            { symbol: 'MMM', description: '3M Company - Diversified technology company offering a wide range of products and solutions.' },
        ],
        description: 'Manufacturing and industrial companies known for their reliability and quality.',
    },
    retail: {
        stocks: [
            { symbol: 'AMZN', description: 'Amazon.com, Inc. - E-commerce and cloud computing company.' },
            { symbol: 'TGT', description: 'Target Corporation - Retail company offering a wide range of products.' },
            { symbol: 'HD', description: 'The Home Depot, Inc. - Home improvement retailer.' },
        ],
        description: 'Leading retail companies that have demonstrated strong growth and customer loyalty.',
    },
};

const StocksTable = () => {
    const [isClient, setIsClient] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleTabClick = (category: string) => {
        setActiveTab(activeTab === category ? null : category);
    };

    if (!isClient) return null;

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="flex justify-between items-start py-4 px-6 bg-[#111827] text-white">
                <div className="flex-1 flex justify-center flex-col items-center text-center">
                    <div className="relative h-12 w-12">
                        <img src="/logo.png" alt="Logo" />
                    </div>
                    <h1 className="text-4xl font-bold mt-2">BudgetBuddy</h1>
                    <p className="mt-2">
                        Simplify Budgeting - Stay On Top Of Your Finances
                    </p>
                </div>

            </nav>
            <main className="flex-row flex-col mx-auto px-4 py-8 min-h-screen bg-[#111827]">
                <div>
                    <section className="mb-12">
                        <h2 className="text-4xl font-semibold mb-4">Ready to Invest?</h2>
                        <p className="text-lg">
                            BudgetBuddy provides expert suggestions on what to buy based on historically high-performing stocks.
                        </p>
                    </section>
                    <table className="border-collapse">
                        <tbody>
                            {Object.keys(stockData).map((category) => (
                                <React.Fragment key={category}>
                                    <tr className='cursor-pointer' onClick={() => handleTabClick(category)}>
                                        <td className="py-2 px-4 border-b border-gray-300">{category}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">{activeTab === category ? '▼' : '►'}</td>
                                    </tr>
                                    {activeTab === category && (
                                        <tr>
                                            <td colSpan={2} className="py-4 px-4 border-b border-gray-300">
                                                <ul>
                                                    {stockData[category as keyof typeof stockData].stocks.map((stockPick) => (
                                                        <li key={stockPick.symbol} className="mb-2">
                                                            <strong>{stockPick.symbol}</strong> - {stockPick.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="mt-4">{stockData[category as keyof typeof stockData].description}</p>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default StocksTable;