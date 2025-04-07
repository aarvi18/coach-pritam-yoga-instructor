import React from 'react'
import { main } from '../../data/main'

export const FooterTop: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <h2 className="text-2xl font-bold">{main.companyName}</h2>
            <p className="text-gray-600 mt-4 md:mt-0">
                Transform your body, mind, and soul with guided yoga practice.
            </p>
        </div>
    )
}
