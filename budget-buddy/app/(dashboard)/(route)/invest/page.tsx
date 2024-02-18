'use client'

import React, { useState } from 'react';

// Sample data for stock categories and their corresponding stock picks
const stockData = {
    tech: ['AAPL', 'GOOGL', 'MSFT'],
    health: ['JNJ', 'PFE', 'MRNA'],
    resources: ['XOM', 'CVX', 'COP'],
};

const StocksTable = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const handleTabClick = (category: string) => {
        setActiveTab(activeTab === category ? null : category);
    };

    return (
        <div>
            <table>
                <section className="mb-12">
                    <h2 className="text-4xl font-semibold mb-4">Ready to Invest?</h2>
                    <p className="text-lg">
                        BudgetBuddy provides expert suggestions on what to buy based on historically high-performing stocks.
                    </p>
                </section>
                <tbody>
                    {Object.keys(stockData).map((category) => (
                        <React.Fragment key={category}>
                            <tr onClick={() => handleTabClick(category)}>
                                <td>{category}</td>
                                <td>{activeTab === category ? '▼' : '►'}</td>
                            </tr>
                            {activeTab === category && (
                                <tr>
                                    <td colSpan={2}>
                                        <ul>
                                            {stockData[category as keyof typeof stockData].map((stockPick) => (
                                                <li key={stockPick}>{stockPick}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StocksTable;