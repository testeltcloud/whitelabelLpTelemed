import React from 'react';
import { steps } from './data';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

interface Props {
  onScrollToPlans?: () => void;
}

const HowItWorks: React.FC<Props> = ({ onScrollToPlans }) => (
  <section className="bg-gradient-1 py-16 md:py-28">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <Reveal>
        <SectionHeader
          pill="Como Funciona"
          pillVariant="coral"
          title="Telemedicina Simples, Rápida e Segura"
          subtitle="Cuide da sua saúde sem burocracia e com médicos disponíveis a qualquer momento."
        />
      </Reveal>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-[10%] right-[10%] top-1/2 hidden border-t-2 border-dashed border-brandborder lg:block" />
        <div className="relative z-[1] grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={i} delay={i * 120}>
                <div className="relative">
                  <div className="absolute -top-[22px] left-1/2 z-[2] flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-coral text-sm font-extrabold text-white shadow-[0_4px_12px_rgba(255,107,91,0.4)]">
                    {s.n}
                  </div>
                  <div className="flex h-full flex-col items-center gap-5 rounded-3xl bg-white px-6 pb-8 pt-10 shadow-[0_4px_20px_rgba(26,41,66,0.06)]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-iconbg">
                      <Icon className="text-navy" size={28} />
                    </div>
                    <h3 className="text-center text-lg font-bold text-navy">{s.title}</h3>
                    <p className="text-center text-sm leading-relaxed text-textmuted">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <button
          onClick={onScrollToPlans}
          className="rounded-lg bg-navy px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-navyDeep"
        >
          Contrate agora
        </button>
      </div>
    </div>
  </section>
);

export default HowItWorks;
