import React from 'react'
import { FooterTop } from './FooterTop'
import { FooterLinks } from './FooterLinks'
import { FooterBottom } from './FooterBottom'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
                <FooterTop />
                <FooterLinks />
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer
