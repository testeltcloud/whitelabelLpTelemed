import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { programs } from './data';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Programs: React.FC = () => (
  <section className="bg-gradient-2 py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <Reveal>
        <SectionHeader
          pill="Inclusos em Todos os Planos"
          pillVariant="blue"
          title="Programas de Apoio"
          subtitle="Acompanhamento contínuo para as principais condições crônicas — conduzido por equipe multidisciplinar e sem custo adicional."
        />
      </Reveal>

      <div className="flex flex-wrap justify-center gap-4">
        {programs.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal
              key={i}
              delay={i * 80}
              className="w-full sm:w-[calc(20%-0.8rem)]"
            >
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-brandborder bg-white px-6 pb-8 pt-9 text-center shadow-[0_4px_20px_rgba(26,41,66,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-coral/40 hover:shadow-[0_24px_48px_rgba(26,41,66,0.16)]">
                {/* barra de destaque no topo */}
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-coral to-[#FF8C6E] transition-transform duration-300 group-hover:scale-x-100" />
                {/* brilho suave atrás do ícone */}
                <span className="pointer-events-none absolute -top-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-coralLight opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />

                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-iconbg ring-1 ring-brandborder transition-all duration-300 group-hover:bg-navy group-hover:shadow-lg group-hover:ring-navy">
                  <Icon className="text-navy transition-colors duration-300 group-hover:text-white" size={28} />
                </div>

                <h3 className="mb-2 text-[15px] font-bold leading-snug text-navy">{p.title}</h3>
                <p className="text-sm leading-relaxed text-textmuted">{p.desc}</p>

                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-coralBg px-3 py-1 text-[11px] font-semibold text-coralText">
                  <FiCheck size={12} /> Incluso
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Programs;
