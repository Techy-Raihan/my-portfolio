import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useInView } from '../hooks/useAnimations';
import SectionHeader from '../components/SectionHeader';
import { systemDesignBlocks } from '../data/portfolioData';

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
    blue: { accent: 'var(--color-accent-blue)', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.25)' },
    cyan: { accent: 'var(--color-accent-cyan)', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.25)' },
    emerald: { accent: 'var(--color-accent-emerald)', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
};

const nodeTypeStyle: Record<string, { label: string }> = {
    source: { label: 'SOURCE' },
    broker: { label: 'BROKER' },
    service: { label: 'SERVICE' },
    storage: { label: 'DB' },
    api: { label: 'API' },
    gateway: { label: 'GATEWAY' },
};

const Architecture: React.FC = () => {
    const [ref, inView] = useInView();

    return (
        <section id="architecture" className="section" ref={ref} style={{ background: 'var(--color-bg-primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <SectionHeader
                        label="System Design"
                        title={<>Architecture <span>Patterns</span></>}
                        subtitle="Visual blueprints of enterprise systems architected and implemented in production."
                    />
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {systemDesignBlocks.map((block, i) => {
                        const c = colorMap[block.color] || colorMap.blue;
                        return (
                            <motion.div
                                key={block.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.15 + i * 0.15 }}
                                className="glass-card"
                                style={{ padding: '2rem', overflow: 'hidden', position: 'relative' }}
                            >
                                {/* Top accent */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                                    background: `linear-gradient(90deg, ${c.accent}, transparent)`,
                                }} />

                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.75rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                                            {block.title}
                                        </h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: '600px', lineHeight: 1.65 }}>
                                            {block.description}
                                        </p>
                                    </div>
                                    <span style={{
                                        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                                        padding: '0.3rem 0.75rem',
                                        background: c.bg, border: `1px solid ${c.border}`,
                                        borderRadius: '9999px', color: c.accent,
                                        whiteSpace: 'nowrap',
                                    }}>
                                        Production
                                    </span>
                                </div>

                                {/* Node flow */}
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.25rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                                    {block.nodes.map((node, j) => (
                                        <React.Fragment key={node.label}>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.85 }}
                                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ delay: 0.4 + i * 0.1 + j * 0.08 }}
                                                style={{
                                                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
                                                    padding: '0.875rem 1.125rem',
                                                    background: c.bg, border: `1px solid ${c.border}`,
                                                    borderRadius: '0.75rem', minWidth: '120px',
                                                    position: 'relative',
                                                }}
                                            >
                                                {/* Node type badge */}
                                                <span style={{
                                                    position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)',
                                                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                                                    padding: '0.1rem 0.45rem',
                                                    background: 'var(--color-bg-primary)', border: `1px solid ${c.border}`,
                                                    borderRadius: '9999px', color: c.accent,
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                    {nodeTypeStyle[node.type]?.label || node.type.toUpperCase()}
                                                </span>

                                                <span style={{ fontSize: '1.5rem' }}>{node.icon}</span>
                                                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-primary)', textAlign: 'center', lineHeight: 1.3 }}>
                                                    {node.label}
                                                </span>
                                            </motion.div>

                                            {j < block.nodes.length - 1 && (
                                                <motion.div
                                                    initial={{ opacity: 0, scaleX: 0 }}
                                                    animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                                                    transition={{ delay: 0.5 + i * 0.1 + j * 0.08 }}
                                                    style={{ display: 'flex', alignItems: 'center', color: c.accent, flexShrink: 0 }}
                                                >
                                                    <div style={{
                                                        width: '32px', height: '2px',
                                                        background: `linear-gradient(90deg, ${c.accent}88, ${c.accent})`,
                                                    }} />
                                                    <FiArrowRight size={14} />
                                                </motion.div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Architecture;
