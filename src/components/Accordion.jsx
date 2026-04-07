import React, { useState } from 'react'
import { extendAbleItem } from "./Item.js"; 
import { AccordionItem } from './AccordionItem';

export const Accordion = () => {
    const [data, setData] = useState(extendAbleItem); 
    
    // Toggle single 
    const handleToggle = (id) => { 
        setData((prev) => prev.map((item) => item.id === id ? { ...item, isOpen: !item.isOpen } : item ) ); 
    }; 
    
    // Open all 
    const handleOpenAll = () => { 
        setData((prev) => prev.map((item) => ({ ...item, isOpen: true })) ); 
    }; 
    
    // Close all 
    const handleCloseAll = () => { 
        setData((prev) => prev.map((item) => ({ ...item, isOpen: false })) ); 
    }; 


    // Active count 
    const activeCount = data.filter((item) => item.isOpen).length;

    return (
        <div className="min-h-screen flex justify-center items-start pt-12 px-4">

            <div className="max-w-2xl w-full bg-[#18162A] border border-gray-700 rounded-2xl shadow-lg p-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">

                    {/* Active Count */}
                    <p className="text-gray-300 text-sm tracking-wide">
                        Active Sections:
                        <span className="ml-2 text-white font-semibold">
                            {activeCount}
                        </span>
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3">

                        <button
                            onClick={handleOpenAll}
                            className="px-4 py-1.5 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all duration-300 text-sm"
                        >
                            Open All
                        </button>

                        <button
                            onClick={handleCloseAll}
                            className="px-4 py-1.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all duration-300 text-sm"
                        >
                            Close All
                        </button>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-4"></div>

                {/* Accordion List */}
                <div className="space-y-3">
                    {data.map((item) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
