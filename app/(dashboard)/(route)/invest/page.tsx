// @ts-ignore
/* eslint-disable */

'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Sample data for stock categories and their corresponding stock picks
const stockData = {
    tech: {
        stocks: [
            { symbol: 'AAPL', description: 'Apple Inc. - Technology company known for its innovative products.', returnLastYear: '15%' },
            { symbol: 'GOOGL', description: 'Alphabet Inc. - Parent company of Google, offering various technology services.', returnLastYear: '10%' },
            { symbol: 'MSFT', description: 'Microsoft Corporation - Leading technology company with a wide range of software products.', returnLastYear: '12%' },
        ],
        description: 'Technology companies that have shown consistent growth and innovation.',
    },
    health: {
        stocks: [
            { symbol: 'JNJ', description: 'Johnson & Johnson - Global healthcare company specializing in pharmaceuticals, medical devices, and consumer goods.', returnLastYear: '8%' },
            { symbol: 'PFE', description: 'Pfizer Inc. - Pharmaceutical company known for its research and development of innovative drugs.', returnLastYear: '9%' },
            { symbol: 'MRNA', description: 'Moderna Inc. - Biotechnology company focused on developing mRNA-based vaccines and therapeutics.', returnLastYear: '20%' },
        ],
        description: 'Pharmaceutical and healthcare companies that have a strong market presence.',
    },
    resources: {
        stocks: [
            { symbol: 'XOM', description: 'Exxon Mobil Corporation - Multinational oil and gas company engaged in exploration, production, and refining.', returnLastYear: '2%' },
            { symbol: 'CVX', description: 'Chevron Corporation - Integrated energy company involved in various aspects of the energy industry.', returnLastYear: '6%' },
            { symbol: 'COP', description: 'ConocoPhillips - Independent exploration and production company with a global presence.', returnLastYear: '1%' },
        ],
        description: 'Companies in the energy and natural resources sector.',
    },
    finance: {
        stocks: [
            { symbol: 'JPM', description: 'JPMorgan Chase & Co. - One of the largest financial institutions offering a wide range of financial services.', returnLastYear: '5%' },
            { symbol: 'BAC', description: 'Bank of America Corporation - Global banking and financial services company.', returnLastYear: '7%' },
            { symbol: 'WFC', description: 'Wells Fargo & Company - Diversified financial services company providing banking, investment, and mortgage services.', returnLastYear: '4%' },
        ],
        description: 'Financial institutions with a solid track record and stable performance.',
    },
    consumer: {
        stocks: [
            { symbol: 'WMT', description: 'Walmart Inc. - Multinational retail corporation offering a wide range of consumer products.', returnLastYear: '10%' },
            { symbol: 'PG', description: 'Procter & Gamble Company - Consumer goods company known for its diverse portfolio of brands.', returnLastYear: '11%' },
            { symbol: 'KO', description: 'The Coca-Cola Company - Beverage company with a strong global presence.', returnLastYear: '9%' },
        ],
        description: 'Well-established consumer goods companies with a wide customer base.',
    },
    industrial: {
        stocks: [
            { symbol: 'BA', description: 'The Boeing Company - Leading aerospace and defense manufacturer.', returnLastYear: '2%' },
            { symbol: 'CAT', description: 'Caterpillar Inc. - Construction and mining equipment manufacturer.', returnLastYear: '4%' },
            { symbol: 'MMM', description: '3M Company - Diversified technology company offering a wide range of products and solutions.', returnLastYear: '1%' },
        ],
        description: 'Manufacturing and industrial companies known for their reliability and quality.',
    },
    retail: {
        stocks: [
            { symbol: 'AMZN', description: 'Amazon.com, Inc. - E-commerce and cloud computing company.', returnLastYear: '25%' },
            { symbol: 'TGT', description: 'Target Corporation - Retail company offering a wide range of products.', returnLastYear: '20%' },
            { symbol: 'HD', description: 'The Home Depot, Inc. - Home improvement retailer.', returnLastYear: '15%' },
        ],
        description: 'Leading retail companies that have demonstrated strong growth and customer loyalty.',
    },
};


const StocksTable = () => {
    const [isClient, setIsClient] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [investmentAmount, setInvestmentAmount] = useState<number | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleTabClick = (category: string) => {
        setActiveTab(activeTab === category ? null : category);
    };

    const handleInvestmentAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = Number(event.target.value);
        if(amount <= 0) {
            alert('Please enter a valid amount');
            setInvestmentAmount(null);
            return;
        }
        setInvestmentAmount(amount);
    };

    if (!isClient) return null;


    const handlePopup = (symbol: string, investmentAmount: number): void => {
        const stock = Object.values(stockData).find((sector) =>
            sector.stocks.find((stock) => stock.symbol === symbol)
        );

        if (stock) {
            const selectedStock = stock.stocks.find((stock) => stock.symbol === symbol);
            if (selectedStock) {
                const returnLastYear = selectedStock.returnLastYear;
                const expectedValueAfter5Years =
                    investmentAmount * Math.pow(1 + parseFloat(returnLastYear) / 100, 5);
                const popupText = `Stock Symbol: ${symbol}\nReturn Last Year: ${returnLastYear}\n\nInvesting $${investmentAmount} in ${symbol} Today? \n\nAfter 5 years, BudgetBuddy predicts this will grow to: $${expectedValueAfter5Years.toFixed(2)}`;
                alert(popupText);
            }
        };
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="flex justify-between items-start py-4 px-6 bg-[#111827] text-white">
                <div className="flex-1 flex justify-center flex-col items-center text-center">
                    <div className="relative h-12 w-12">
                        <Link className='cursor-pointer' href="/">
                            <img src="/logo.png" alt="Logo" />
                        </Link>
                    </div>
                    <h1 className="text-4xl font-bold mt-2">BudgetBuddy</h1>
                    <p className="mt-2">
                        Simplify Budgeting - Stay On Top Of Your Finances
                    </p>
                </div>
            </nav>
            <main className="flex-col mx-auto px-4 py-8 min-h-screen bg-[#111827]">
                <div>
                    <section className="mb-12">
                        <h2 className="text-4xl font-semibold mb-4">Ready to Invest?</h2>
                        <p className="text-lg">
                            The experts at BudgetBuddy provide expert suggestions based on the current market trends. Here are some of the top stock picks across various sectors.
                        </p>
                    </section>
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold mb-4">How Much Can You Commit to Invest Today?</h2>
                        <p className="text-lg mb-4">Experts recommend investing between <strong>20% - 50%</strong> of your leftover income after expenses.</p>
                        <input
                            type="number"
                            className="border border-gray-300 p-2 rounded text-black"
                            placeholder="Amount to invest"
                            onChange={handleInvestmentAmountChange}
                        />
                    </div>
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
                                                            <strong>
                                                                <button onClick={() => handlePopup(stockPick.symbol, investmentAmount || 0)}>
                                                                    {stockPick.symbol}
                                                                </button>
                                                            </strong> - {stockPick.description}
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