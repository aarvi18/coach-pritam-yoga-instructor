// Navbar.tsx
import React, { useState } from 'react'
import { NavbarLogo, NavbarMenu, NavbarActions, MobileMenu } from './index'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <NavbarLogo />

                <div className="hidden md:flex flex-1 justify-center">
                    <NavbarMenu />
                </div>

                <div className="hidden md:flex justify-end">
                    <NavbarActions />
                </div>

                <div className="md:hidden">
                    <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={28} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={28} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </div>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </nav>
    )
}

export default Navbar