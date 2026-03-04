import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiServer, FiUsers } from 'react-icons/fi';
import { useInView } from '../hooks/useAnimations';
import SectionHeader from '../components/SectionHeader';
import { education } from '../data/portfolioData';

const highlights = [
    {
        icon: <FiServer size={20} />,
        title: 'Enterprise Systems',
        desc: 'Designed and built IBM MQ messaging pipelines, invoice generation services, and REST API ecosystems for Fortune-class clients.',
        color: 'blue',
    },
    {
        icon: <FiCode size={20} />,
        title: 'Backend Architecture',
        desc: 'Expert in Spring Boot microservices, DB2 & MySQL persistence, and performance optimization via server-side filtering and caching.',
        color: 'cyan',
    },
    {
        icon: <FiUsers size={20} />,
        title: 'Client Impact',
        desc: 'Delivered solutions adopted globally at Baxter Healthcare with multilingual support, and integrated legacy IBM i systems at Veolia.',
        color: 'emerald',
    },
    {
        icon: <FiAward size={20} />,
        title: 'Recognition',
        desc: 'Recipient of the High Five Award for exemplary contribution and collaboration — twice — from Persistent Systems (2023–2025).',
        color: 'blue',
    },
];

const colorMap: Record<string, string> = {
    blue: 'var(--color-accent-blue)',
    cyan: 'var(--color-accent-cyan)',
    emerald: 'var(--color-accent-emerald)',
};

const About: React.FC = () => {
    const [ref, inView] = useInView();

    return (
        <section id="about" className="section" ref={ref}>
            {/* Dot pattern background */}
            <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <SectionHeader
                            label="About Me"
                            title={<>Building Systems That <span>Scale</span></>}
                        />

                        <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                                I'm a <strong style={{ color: 'var(--color-text-primary)' }}>Senior Software Engineer</strong> at Persistent Systems with{' '}
                                <strong style={{ color: 'var(--color-accent-blue)' }}>3.5+ years</strong> of hands-on experience
                                architecting and deploying enterprise-grade backend systems.
                            </p>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                                My core expertise lies in <strong style={{ color: 'var(--color-text-primary)' }}>Java, Spring Boot, and Microservices</strong> —
                                with deep practical experience in enterprise messaging via{' '}
                                <strong style={{ color: 'var(--color-accent-blue)' }}>IBM MQ</strong>, legacy integration with{' '}
                                <strong style={{ color: 'var(--color-accent-blue)' }}>IBM i (AS/400)</strong>, and data persistence with{' '}
                                <strong style={{ color: 'var(--color-accent-blue)' }}>DB2 and MySQL</strong>.
                            </p>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                                Working with enterprise clients like <strong style={{ color: 'var(--color-text-primary)' }}>Veolia North America</strong> and{' '}
                                <strong style={{ color: 'var(--color-text-primary)' }}>Baxter Healthcare Corporation</strong>, I've delivered systems that process
                                real-world workloads with zero-tolerance for data loss, driving a{' '}
                                <strong style={{ color: 'var(--color-accent-emerald)' }}>15% reduction in platform bugs</strong> and consistently exceeding client expectations.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="glass-card" style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{
                                width: '40px', height: '40px', minWidth: '40px',
                                background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                                borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.1rem',
                            }}>🎓</div>
                            <div>
                                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.15rem' }}>
                                    {education.degree}
                                </p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                                    {education.institution} · CGPA: <strong style={{ color: 'var(--color-accent-blue)' }}>{education.cgpa}</strong> · Class of {education.year}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — highlight cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
                    >
                        {highlights.map((h, i) => (
                            <motion.div
                                key={h.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="glass-card"
                                style={{ padding: '1.5rem' }}
                            >
                                <div style={{
                                    width: '40px', height: '40px',
                                    background: `rgba(${h.color === 'blue' ? '59,130,246' : h.color === 'cyan' ? '6,182,212' : '16,185,129'}, 0.14)`,
                                    border: `1px solid ${colorMap[h.color]}33`,
                                    borderRadius: '0.75rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: colorMap[h.color],
                                    marginBottom: '1rem',
                                }}>
                                    {h.icon}
                                </div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                                    {h.title}
                                </h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                                    {h.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          #about [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default About;
