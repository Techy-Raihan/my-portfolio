import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import SectionHeader from '../components/SectionHeader';
import { skillCategories } from '../data/portfolioData';

const colorMap: Record<string, { bg: string; text: string; bar: string; border: string }> = {
    blue: {
        bg: 'rgba(59, 130, 246, 0.08)',
        text: 'var(--color-accent-blue)',
        bar: 'var(--color-accent-blue)',
        border: 'rgba(59, 130, 246, 0.2)',
    },
    cyan: {
        bg: 'rgba(6, 182, 212, 0.08)',
        text: 'var(--color-accent-cyan)',
        bar: 'var(--color-accent-cyan)',
        border: 'rgba(6, 182, 212, 0.2)',
    },
    emerald: {
        bg: 'rgba(16, 185, 129, 0.08)',
        text: 'var(--color-accent-emerald)',
        bar: 'var(--color-accent-emerald)',
        border: 'rgba(16, 185, 129, 0.2)',
    },
};

const Skills: React.FC = () => {
    const [ref, inView] = useInView();
    const [activeCategory, setActiveCategory] = useState(0);

    const active = skillCategories[activeCategory];
    const colors = colorMap[active.color] || colorMap.blue;

    return (
        <section id="skills" className="section" ref={ref} style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <SectionHeader
                        label="Technical Skills"
                        title={<>Core <span>Competencies</span></>}
                        subtitle="Depth across backend architecture, enterprise messaging, and data persistence."
                        align="center"
                    />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem', alignItems: 'start' }}>
                    {/* Category tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                    >
                        {skillCategories.map((cat, i) => {
                            const c = colorMap[cat.color] || colorMap.blue;
                            const isActive = activeCategory === i;
                            return (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveCategory(i)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                                        padding: '0.875rem 1rem', borderRadius: '0.625rem',
                                        background: isActive ? c.bg : 'transparent',
                                        border: `1px solid ${isActive ? c.border : 'transparent'}`,
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        textAlign: 'left',
                                        width: '100%',
                                    }}
                                >
                                    <span style={{ fontSize: '1.2rem' }}>{cat.icon}</span>
                                    <span style={{
                                        fontSize: '0.875rem', fontWeight: 600,
                                        color: isActive ? c.text : 'var(--color-text-secondary)',
                                        transition: 'color 0.25s',
                                    }}>
                                        {cat.category}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* Skill bars panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.35 }}
                            className="glass-card"
                            style={{ padding: '2rem' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                                <span style={{
                                    width: '36px', height: '36px',
                                    background: colors.bg,
                                    border: `1px solid ${colors.border}`,
                                    borderRadius: '0.625rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.1rem',
                                }}>
                                    {active.icon}
                                </span>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                                    {active.category}
                                </h3>
                                <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                    {active.skills.length} skills
                                </span>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                {active.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.07 }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                                                {skill.name}
                                            </span>
                                            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: colors.text }}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div style={{
                                            height: '6px', background: 'rgba(30, 58, 95, 0.9)',
                                            borderRadius: '9999px', overflow: 'hidden',
                                        }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: 'easeOut' }}
                                                style={{
                                                    height: '100%',
                                                    background: `linear-gradient(90deg, ${colors.bar}, ${colors.bar}cc)`,
                                                    borderRadius: '9999px',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {/* Shimmer */}
                                                <div style={{
                                                    position: 'absolute', inset: 0,
                                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                                                    animation: 'shimmer 2s ease infinite',
                                                }} />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #skills .container > div:last-child { grid-template-columns: 1fr !important; }
          #skills [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @keyframes shimmer { 0% { transform: translateX(-200%); } 100% { transform: translateX(200%); } }
      `}</style>
        </section>
    );
};

export default Skills;
