// Navbar.tsx
import React, { useState } from 'react'
import { NavbarLogo, NavbarMenu, NavbarActions, MobileMenu } from './index'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50 backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-2 flex items-center justify-between">
                <NavbarLogo />

                {/* Center Menu (Desktop Only) */}
                <div className="hidden md:flex flex-1 justify-center">
                    <NavbarMenu />
                </div>

                {/* Right Actions (Desktop Only) */}
                <div className="hidden md:flex justify-end">
                    <NavbarActions />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="cursor-pointer">
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                >
                                    <X size={28} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                >
                                    <Menu size={28} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </nav>
    )
}

export default Navbar
