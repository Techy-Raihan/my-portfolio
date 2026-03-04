import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            // Detect active section
            const sections = navItems.map((n) => n.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        const id = href.slice(1);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: 'background 0.3s ease, box-shadow 0.3s ease',
                    background: scrolled
                        ? 'rgba(5, 11, 24, 0.92)'
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    boxShadow: scrolled ? '0 1px 0 rgba(30, 58, 95, 0.6)' : 'none',
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('#hero')}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        aria-label="Go to top"
                    >
                        <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: 'var(--color-text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                        }}>
                            <span style={{ color: 'var(--color-accent-blue)' }}>RR</span>
                            <span style={{ color: 'var(--color-text-muted)' }}>/</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', letterSpacing: '0.05em' }}>
                                {personalInfo.title.split(' ').slice(0, 2).join(' ')}
                            </span>
                        </span>
                    </button>

                    {/* Desktop nav */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollTo(item.href)}
                                className={`nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
                        >
                            Resume ↗
                        </a>
                    </nav>

                    {/* Mobile menu toggle */}
                    <button
                        className="show-mobile"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: '1.4rem' }}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: '70px',
                            left: 0,
                            right: 0,
                            background: 'rgba(5, 11, 24, 0.97)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 999,
                            padding: '1.5rem',
                            borderBottom: '1px solid var(--color-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem',
                        }}
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollTo(item.href)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--color-text-secondary)',
                                    textAlign: 'left',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
        </>
    );
};

export default Navbar;
