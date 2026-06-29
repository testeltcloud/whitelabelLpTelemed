import React from 'react';

export const Pill: React.FC<{ variant?: 'coral' | 'blue'; children: React.ReactNode }> = ({
  variant = 'coral',
  children,
}) => (
  <span
    className={`inline-block rounded-full px-5 py-2 text-sm font-semibold ${
      variant === 'coral' ? 'bg-coralBg text-coralText' : 'bg-blueTagBg text-navy'
    }`}
  >
    {children}
  </span>
);

interface Props {
  pill: string;
  pillVariant?: 'coral' | 'blue';
  title: React.ReactNode;
  subtitle?: string;
}

const SectionHeader: React.FC<Props> = ({ pill, pillVariant = 'coral', title, subtitle }) => (
  <div className="mb-14 flex flex-col items-center gap-5 text-center">
    <Pill variant={pillVariant}>{pill}</Pill>
    <h2 className="max-w-3xl text-2xl font-extrabold leading-[1.15] text-navy md:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="max-w-2xl text-base leading-relaxed text-textmuted md:text-lg">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
