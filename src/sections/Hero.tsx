import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useAnimations';

const typewriterStrings = [
    'Java & Spring Boot Architect',
    'Microservices Engineer',
    'IBM MQ Integration Specialist',
    'Enterprise Backend Developer',
    'Performance Optimization Expert',
];

const Hero: React.FC = () => {
    const typed = useTypewriter(typewriterStrings, 55, 2200);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
    };

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '70px',
            }}
        >
            {/* Animated grid background */}
            <div
                className="grid-bg"
                style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 0 }}
            />

            {/* Radial glow blobs */}
            <div style={{
                position: 'absolute', top: '20%', left: '10%',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
                zIndex: 0, pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
                zIndex: 0, pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
                    {/* Left content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ maxWidth: '720px' }}
                    >
                        {/* Status badge */}
                        <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                padding: '0.4rem 1rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                border: '1px solid rgba(16, 185, 129, 0.25)',
                                borderRadius: '9999px',
                                fontSize: '0.78rem', fontWeight: 600,
                                color: 'var(--color-accent-emerald)',
                                fontFamily: 'var(--font-mono)',
                            }}>
                                <span style={{
                                    width: '6px', height: '6px', borderRadius: '50%',
                                    background: 'var(--color-accent-emerald)',
                                    boxShadow: '0 0 6px var(--color-accent-emerald)',
                                    animation: 'pulse 2s ease-in-out infinite',
                                }} />
                                Open to Senior / Lead Roles
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            style={{
                                fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                                fontWeight: 900,
                                lineHeight: 1.05,
                                letterSpacing: '-0.03em',
                                marginBottom: '0.5rem',
                            }}
                        >
                            {personalInfo.name.split(' ')[0]}{' '}
                            <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
                        </motion.h1>

                        {/* Typewriter */}
                        <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem', minHeight: '2rem' }}>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
                                color: 'var(--color-accent-blue)',
                                fontWeight: 600,
                            }}>
                                {typed}
                                <span style={{
                                    display: 'inline-block',
                                    width: '2px', height: '1.1em',
                                    background: 'var(--color-accent-blue)',
                                    marginLeft: '3px',
                                    verticalAlign: 'middle',
                                    animation: 'blink 1s step-end infinite',
                                }} />
                            </span>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: '2rem',
                                maxWidth: '600px',
                            }}
                        >
                            {personalInfo.subtitle}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}
                        >
                            <a
                                href="#projects"
                                className="btn-primary"
                                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                            >
                                View Projects <FiArrowRight />
                            </a>
                            <a
                                href={personalInfo.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                            >
                                <FiDownload /> Download Resume
                            </a>
                            <a
                                href="#contact"
                                className="btn-outline"
                                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                            >
                                <FiMail /> Contact Me
                            </a>
                        </motion.div>

                        {/* Social icons */}
                        <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            {[
                                { icon: <FiGithub size={20} />, href: personalInfo.github, label: 'GitHub' },
                                { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '42px', height: '42px',
                                        background: 'rgba(13, 31, 56, 0.8)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: '0.5rem',
                                        color: 'var(--color-text-secondary)',
                                        transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent-blue)'; e.currentTarget.style.color = 'var(--color-accent-blue)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                            <div style={{ width: '1px', height: '24px', background: 'var(--color-border)' }} />
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                                Bengaluru, India
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right — floating tech stack visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="animate-float hero-visual"
                        style={{
                            width: '280px',
                            background: 'rgba(13, 31, 56, 0.7)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '1.25rem',
                            padding: '1.5rem',
                            boxShadow: '0 0 60px rgba(59, 130, 246, 0.1)',
                        }}
                    >
                        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div className="glow-dot" />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                                tech_stack.java
                            </span>
                        </div>
                        {[
                            { label: 'Java', level: 95, color: 'var(--color-accent-blue)' },
                            { label: 'Spring Boot', level: 92, color: 'var(--color-accent-blue)' },
                            { label: 'Microservices', level: 88, color: 'var(--color-accent-cyan)' },
                            { label: 'IBM MQ', level: 85, color: 'var(--color-accent-cyan)' },
                            { label: 'DB2 / MySQL', level: 85, color: 'var(--color-accent-emerald)' },
                            { label: 'REST APIs', level: 92, color: 'var(--color-accent-emerald)' },
                        ].map((tech, i) => (
                            <motion.div
                                key={tech.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + i * 0.08 }}
                                style={{ marginBottom: '0.875rem' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>{tech.label}</span>
                                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: tech.color }}>{tech.level}%</span>
                                </div>
                                <div style={{ height: '4px', background: 'rgba(30, 58, 95, 0.8)', borderRadius: '9999px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${tech.level}%` }}
                                        transition={{ duration: 1, delay: 1 + i * 0.1, ease: 'easeOut' }}
                                        style={{ height: '100%', background: tech.color, borderRadius: '9999px' }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.4rem',
                    }}
                >
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
                        SCROLL
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--color-accent-blue), transparent)' }}
                    />
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 860px) { .hero-visual { display: none; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
        </section>
    );
};

export default Hero;
