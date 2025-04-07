import React from 'react'

export const FooterBottom: React.FC = () => {
    return (
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
            © {new Date().getFullYear()} Pritam Yoga. All rights reserved.
        </div>
    )
}
