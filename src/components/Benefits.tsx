import React from 'react';
import { benefits } from './data';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Benefits: React.FC = () => (
  <section id="beneficios" className="bg-gradient-1 py-16 md:py-28">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <Reveal>
        <SectionHeader
          pill="Benefícios"
          pillVariant="coral"
          title="Tudo que você precisa em um só lugar"
          subtitle="Nossa plataforma oferece uma experiência completa de cuidados médicos, com praticidade e economia."
        />
      </Reveal>
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(26,41,66,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,41,66,0.10)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-coralBg">
                  <Icon className="text-navy" size={20} />
                </div>
                <h3 className="mb-2 text-lg font-bold leading-snug text-navy">{b.title}</h3>
                <p className="text-sm leading-relaxed text-textmuted">{b.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Benefits;
