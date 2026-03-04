import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCalendar, FiChevronDown, FiChevronUp, FiCheckCircle } from 'react-icons/fi';
import { useInView } from '../hooks/useAnimations';
import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data/portfolioData';

const colorAccent: Record<string, string> = {
    blue: 'var(--color-accent-blue)',
    cyan: 'var(--color-accent-cyan)',
    emerald: 'var(--color-accent-emerald)',
};

const colorBg: Record<string, string> = {
    blue: 'rgba(59, 130, 246, 0.08)',
    cyan: 'rgba(6, 182, 212, 0.08)',
    emerald: 'rgba(16, 185, 129, 0.08)',
};

const colorBorder: Record<string, string> = {
    blue: 'rgba(59, 130, 246, 0.25)',
    cyan: 'rgba(6, 182, 212, 0.25)',
    emerald: 'rgba(16, 185, 129, 0.25)',
};

const Experience: React.FC = () => {
    const [ref, inView] = useInView();
    const [expanded, setExpanded] = useState<string>('veolia');

    return (
        <section id="experience" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <SectionHeader
                        label="Experience"
                        title={<>Enterprise <span>Case Studies</span></>}
                        subtitle="Every engagement delivered measurable impact for Fortune-class clients."
                    />
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {experiences.map((exp, i) => {
                        const isOpen = expanded === exp.id;
                        const accent = colorAccent[exp.color] || colorAccent.blue;
                        const bg = colorBg[exp.color] || colorBg.blue;
                        const border = colorBorder[exp.color] || colorBorder.blue;

                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.15 + i * 0.12 }}
                            >
                                {/* Card header — always visible */}
                                <div
                                    className="glass-card"
                                    style={{
                                        overflow: 'hidden',
                                        borderColor: isOpen ? border : undefined,
                                        boxShadow: isOpen ? `0 0 30px ${bg}, 0 20px 40px rgba(0,0,0,0.3)` : undefined,
                                    }}
                                >
                                    <button
                                        onClick={() => setExpanded(isOpen ? '' : exp.id)}
                                        style={{
                                            width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                                            padding: '1.75rem 2rem',
                                            display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
                                            textAlign: 'left',
                                        }}
                                        aria-expanded={isOpen}
                                    >
                                        {/* Color dot */}
                                        <div style={{
                                            width: '48px', height: '48px', minWidth: '48px',
                                            background: bg, border: `1px solid ${border}`,
                                            borderRadius: '0.75rem',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.4rem', marginTop: '2px',
                                        }}>
                                            {i === 0 ? '🏭' : i === 1 ? '🏥' : '💼'}
                                        </div>

                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem', alignItems: 'center' }}>
                                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                                                    {exp.role}
                                                </h3>
                                                <span style={{
                                                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                                                    padding: '0.2rem 0.6rem',
                                                    background: bg, border: `1px solid ${border}`,
                                                    borderRadius: '9999px',
                                                    color: accent,
                                                }}>
                                                    {exp.client}
                                                </span>
                                            </div>

                                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: accent, marginBottom: '0.4rem' }}>
                                                {exp.company}
                                            </p>

                                            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                                    <FiCalendar size={12} /> {exp.duration}
                                                </span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                                    <FiMapPin size={12} /> {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <div style={{ color: 'var(--color-text-muted)', marginTop: '4px', flexShrink: 0 }}>
                                            {isOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                                        </div>
                                    </button>

                                    {/* Expanded content */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div style={{
                                                    padding: '0 2rem 2rem',
                                                    borderTop: `1px solid ${border}`,
                                                    paddingTop: '1.75rem',
                                                }}>
                                                    {/* Client info */}
                                                    <div style={{
                                                        background: bg, border: `1px solid ${border}`,
                                                        borderRadius: '0.625rem', padding: '0.875rem 1.25rem',
                                                        marginBottom: '1.75rem',
                                                    }}>
                                                        <p style={{ fontSize: '0.8rem', color: accent, fontWeight: 600, marginBottom: '0.2rem' }}>
                                                            CLIENT
                                                        </p>
                                                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', fontWeight: 700 }}>
                                                            {exp.client}
                                                        </p>
                                                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                                            {exp.clientDesc}
                                                        </p>
                                                    </div>

                                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                                        {/* Problem */}
                                                        <div>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                                                                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                                                                    The Challenge
                                                                </span>
                                                            </div>
                                                            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                                                                {exp.problem}
                                                            </p>
                                                        </div>

                                                        {/* Impact */}
                                                        <div>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                                                                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                                                                    Impact
                                                                </span>
                                                            </div>
                                                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                                {exp.impact.map((item, j) => (
                                                                    <li key={j} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                                                                        <FiCheckCircle style={{ color: accent, minWidth: '16px', marginTop: '2px' }} />
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* Solution */}
                                                    <div style={{ marginTop: '1.75rem' }}>
                                                        <div style={{ marginBottom: '0.875rem' }}>
                                                            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                                                                Solution Architecture
                                                            </span>
                                                        </div>
                                                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                                            {exp.solution.map((sol, j) => (
                                                                <li
                                                                    key={j}
                                                                    style={{
                                                                        display: 'flex', gap: '0.75rem',
                                                                        fontSize: '0.875rem', color: 'var(--color-text-secondary)',
                                                                        padding: '0.75rem 1rem',
                                                                        background: 'rgba(5, 11, 24, 0.5)',
                                                                        borderRadius: '0.5rem',
                                                                        borderLeft: `2px solid ${accent}`,
                                                                    }}
                                                                >
                                                                    <span style={{ color: accent, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', minWidth: '20px', marginTop: '2px' }}>
                                                                        {String(j + 1).padStart(2, '0')}
                                                                    </span>
                                                                    {sol}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Tech stack */}
                                                    <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                        {exp.techStack.map((tech) => (
                                                            <span key={tech} className="tag" style={
                                                                exp.color === 'cyan' ? { background: 'rgba(6,182,212,0.1)', color: 'var(--color-accent-cyan)', borderColor: 'rgba(6,182,212,0.25)' } :
                                                                    exp.color === 'emerald' ? { background: 'rgba(16,185,129,0.1)', color: 'var(--color-accent-emerald)', borderColor: 'rgba(16,185,129,0.25)' } : {}
                                                            }>
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #experience [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Experience;
