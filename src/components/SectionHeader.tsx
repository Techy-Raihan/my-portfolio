import React from 'react';

interface SectionHeaderProps {
    label: string;
    title: React.ReactNode;
    subtitle?: string;
    align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    label,
    title,
    subtitle,
    align = 'left',
}) => {
    return (
        <div style={{ textAlign: align }} className={align === 'center' ? 'flex flex-col items-center' : ''}>
            <span className="section-label">{label}</span>
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;
