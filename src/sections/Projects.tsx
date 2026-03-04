import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { useInView } from '../hooks/useAnimations';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/portfolioData';

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
    blue: { accent: 'var(--color-accent-blue)', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
    cyan: { accent: 'var(--color-accent-cyan)', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)' },
};

const Projects: React.FC = () => {
    const [ref, inView] = useInView();

    return (
        <section id="projects" className="section" ref={ref} style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <SectionHeader
                        label="Projects"
                        title={<>Showcased <span>Work</span></>}
                        subtitle="End-to-end backend applications demonstrating system design and clean architecture."
                    />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, i) => {
                        const c = colorMap[project.color] || colorMap.blue;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.15 }}
                                className="glass-card"
                                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflow: 'hidden', position: 'relative' }}
                            >
                                {/* Top accent line */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0,
                                    height: '2px',
                                    background: `linear-gradient(90deg, ${c.accent}, transparent)`,
                                }} />

                                {/* Header */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
                                        <div style={{
                                            width: '48px', height: '48px',
                                            background: c.bg, border: `1px solid ${c.border}`,
                                            borderRadius: '0.875rem',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.5rem',
                                        }}>
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                                                {project.title}
                                            </h3>
                                            <span style={{
                                                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                                                padding: '0.2rem 0.6rem',
                                                background: c.bg, border: `1px solid ${c.border}`,
                                                borderRadius: '9999px', color: c.accent,
                                            }}>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                width: '36px', height: '36px',
                                                background: 'rgba(13,31,56,0.8)', border: '1px solid var(--color-border)',
                                                borderRadius: '0.5rem', color: 'var(--color-text-secondary)',
                                                transition: 'all 0.2s ease',
                                                textDecoration: 'none',
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.color = c.accent; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                                        >
                                            <FiGithub size={15} />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Live demo"
                                            style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                width: '36px', height: '36px',
                                                background: 'rgba(13,31,56,0.8)', border: '1px solid var(--color-border)',
                                                borderRadius: '0.5rem', color: 'var(--color-text-secondary)',
                                                transition: 'all 0.2s ease',
                                                textDecoration: 'none',
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.color = c.accent; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                                        >
                                            <FiExternalLink size={15} />
                                        </a>
                                    </div>
                                </div>

                                {/* Description */}
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                                    {project.description}
                                </p>

                                {/* Key features */}
                                <div>
                                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                                        Key Features
                                    </p>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                        {project.features.map((f, j) => (
                                            <li key={j} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                                                <FiCheckCircle size={13} style={{ color: c.accent, minWidth: '13px', marginTop: '3px' }} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech stack */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--color-border)' }}>
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="tag"
                                            style={project.color === 'cyan' ? { background: 'rgba(6,182,212,0.08)', color: 'var(--color-accent-cyan)', borderColor: 'rgba(6,182,212,0.2)' } : {}}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          #projects [style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Projects;
