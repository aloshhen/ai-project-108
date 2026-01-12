"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isTelegram, setIsTelegram] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    const checkTelegram = () => setIsTelegram(!!window.Telegram)

    checkMobile()
    checkTelegram()

    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <header className="fixed w-full z-50 bg-slate-950/50 backdrop-blur-lg">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold tracking-tighter text-white">CryptoCoffe</div>
        
        {isMobile ? (
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </motion.button>
        ) : (
          <div className="flex space-x-6">
            <a href="#features" className="hover:text-amber-500 transition">Возможности</a>
            <a href="#pricing" className="hover:text-amber-500 transition">Цены</a>
            <a href="#login" className="bg-electric-coffee px-4 py-2 rounded-lg text-black">Войти</a>
          </div>
        )}
      </nav>
    </header>
  )
}