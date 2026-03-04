import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
    return (
        <footer
            style={{
                borderTop: '1px solid var(--color-border)',
                padding: '3rem 0 2rem',
                background: 'var(--color-bg-primary)',
                position: 'relative',
            }}
        >
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                            <span style={{ color: 'var(--color-accent-blue)' }}>Raihan</span>
                            <span style={{ color: 'var(--color-text-secondary)' }}>.Raza</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                            Senior Software Engineer specializing in enterprise Java, Spring Boot, and Microservices architecture.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            Quick Links
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {['about', 'skills', 'experience', 'projects', 'contact'].map((link) => (
                                <button
                                    key={link}
                                    onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
                                    style={{
                                        background: 'none', border: 'none', cursor: 'pointer',
                                        color: 'var(--color-text-secondary)', textAlign: 'left',
                                        fontSize: '0.875rem', textTransform: 'capitalize',
                                        transition: 'color 0.2s',
                                        padding: 0,
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-blue)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <a href={`mailto:${personalInfo.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>
                                <FiMail size={14} /> {personalInfo.email}
                            </a>
                            <a href={`tel:${personalInfo.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>
                                <FiPhone size={14} /> {personalInfo.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                        © {new Date().getFullYear()} Raihan Raza. Crafted with precision.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {[
                            { icon: <FiGithub />, href: personalInfo.github, label: 'GitHub' },
                            { icon: <FiLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                whileHover={{ y: -2 }}
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    fontSize: '1.1rem',
                                    transition: 'color 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-blue)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
