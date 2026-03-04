import React from 'react';
import { motion } from 'framer-motion';
import { useInView, useCountUp } from '../hooks/useAnimations';
import { metrics } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

const accentColors = [
    'var(--color-accent-blue)',
    'var(--color-accent-cyan)',
    'var(--color-accent-emerald)',
    'var(--color-accent-blue)',
];

const MetricCard: React.FC<{
    value: number;
    suffix: string;
    label: string;
    description: string;
    color: string;
    index: number;
    trigger: boolean;
}> = ({ value, suffix, label, description, color, index, trigger }) => {
    const count = useCountUp(value, 2200, trigger);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={trigger ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12 }}
            style={{
                padding: '2rem',
                background: 'rgba(13, 31, 56, 0.7)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${color}22`,
                borderRadius: '1rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}55`;
                e.currentTarget.style.boxShadow = `0 0 30px ${color}18`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${color}22`;
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {/* Glow bg */}
            <div style={{
                position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
                width: '120px', height: '120px',
                background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`,
                pointerEvents: 'none',
            }} />

            <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 900, letterSpacing: '-0.03em',
                marginBottom: '0.25rem',
                fontFamily: 'var(--font-mono)',
                color,
                position: 'relative',
            }}>
                {count}{suffix}
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.35rem' }}>
                {label}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                {description}
            </div>
        </motion.div>
    );
};

const Metrics: React.FC = () => {
    const [ref, inView] = useInView(0.3);

    return (
        <section id="metrics" style={{ padding: '5rem 0', background: 'var(--color-bg-secondary)', position: 'relative', overflow: 'hidden' }} ref={ref}>
            {/* Subtle grid */}
            <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <SectionHeader
                        label="Impact"
                        title={<>By the <span>Numbers</span></>}
                        subtitle="Consistent results across enterprise engagements."
                        align="center"
                    />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                    {metrics.map((m, i) => (
                        <MetricCard
                            key={m.label}
                            {...m}
                            color={accentColors[i]}
                            index={i}
                            trigger={inView}
                        />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          #metrics [style*="repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #metrics [style*="repeat(4, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Metrics;
