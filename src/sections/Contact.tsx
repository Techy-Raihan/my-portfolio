import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useInView } from '../hooks/useAnimations';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
    const [ref, inView] = useInView();
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        setStatus('sending');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                formRef.current!,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            );
            setStatus('success');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 5000);
    };

    const contactItems = [
        { icon: <FiMail size={16} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: <FiPhone size={16} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: <FiMapPin size={16} />, label: 'Location', value: personalInfo.location, href: '#' },
    ];

    return (
        <section id="contact" className="section" ref={ref} style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                    <SectionHeader
                        label="Contact"
                        title={<>Let's <span>Connect</span></>}
                        subtitle="Open to senior-level backend engineering opportunities, consulting, and collaboration."
                        align="center"
                    />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>
                    {/* Left side — info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                            Whether you have an exciting backend challenge, want to discuss microservices architecture, or are looking for a senior engineer who can deliver at enterprise scale — let's talk.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            {contactItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.875rem',
                                        padding: '0.875rem 1rem',
                                        background: 'rgba(13,31,56,0.6)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: '0.625rem',
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; e.currentTarget.style.background = 'rgba(59,130,246,0.08)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.background = 'rgba(13,31,56,0.6)'; }}
                                >
                                    <div style={{
                                        width: '36px', height: '36px',
                                        background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                                        borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--color-accent-blue)',
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                            {item.label}
                                        </p>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social buttons */}
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[
                                { icon: <FiGithub size={18} />, href: personalInfo.github, label: 'GitHub' },
                                { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="btn-outline"
                                    style={{ flex: 1, justifyContent: 'center', padding: '0.75rem' }}
                                >
                                    {s.icon} {s.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-card"
                        style={{ padding: '2rem' }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                        Full Name *
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Smith"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                        Email Address *
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="Senior Engineer Opportunity / Project Collaboration"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about the opportunity, challenge, or project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="form-input"
                                    style={{ resize: 'vertical', minHeight: '130px' }}
                                />
                            </div>

                            {/* Status messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '0.5rem', color: 'var(--color-accent-emerald)', fontSize: '0.875rem' }}
                                >
                                    <FiCheckCircle /> Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '0.5rem', color: '#ef4444', fontSize: '0.875rem' }}
                                >
                                    <FiAlertCircle /> Failed to send. Please email me directly.
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="btn-primary"
                                style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                            >
                                {status === 'sending' ? (
                                    <>Sending...</>
                                ) : (
                                    <><FiSend /> Send Message</>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
          #contact [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Contact;
