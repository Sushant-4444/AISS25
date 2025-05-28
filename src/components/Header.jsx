import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "PROGRAM", href: "#program" },
    { name: "ABOUT", href: "#about" },
    { name: "REGISTRATION", href: "#registration" },
    { name: "VENUE", href: "#venue" },
  ];

  return (
    <>
      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-[#0f202e]/95 px-6 py-4 space-y-4 mt-[8vh]"
          >
            {navLinks.map(link => (
              <motion.a
                variants={linkVariants}
                key={link.name}
                href={link.href}
                className="block text-white text-base font-medium hover:text-cyan-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Animated Logo */}
          <motion.a
            href="#"
            className="text-white font-extrabold tracking-widest text-xl uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            AISS
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm font-medium tracking-wide hover:text-cyan-300 transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Animated Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </header>
    </>
  );
};

export default NavBar;