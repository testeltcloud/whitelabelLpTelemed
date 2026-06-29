import React from 'react';
import { securityFeatures, seals } from './data';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Security: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <Reveal>
        <SectionHeader
          pill="Segurança e Praticidade"
          pillVariant="blue"
          title="Simples, rápido e totalmente seguro"
          subtitle="Nossa plataforma foi desenvolvida pensando na sua experiência. Tecnologia de ponta para você cuidar da sua saúde com tranquilidade."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {securityFeatures.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={i} delay={i * 80}>
              <div className="flex flex-col items-center gap-5 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-iconbg">
                  <Icon className="text-navy" size={32} />
                </div>
                <h3 className="text-xl font-bold text-navy">{f.title}</h3>
                <p className="max-w-xs text-base leading-relaxed text-textmuted">{f.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-20 rounded-3xl bg-canvas p-8 md:p-12">
        <div className="mb-10 flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold text-navy">Selos de Segurança</h3>
          <p className="text-textmuted">Sua compra protegida em todas as etapas</p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {seals.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy">
                  <Icon className="text-white" size={24} />
                </div>
                <p className="text-center text-sm font-semibold text-navy">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Security;
