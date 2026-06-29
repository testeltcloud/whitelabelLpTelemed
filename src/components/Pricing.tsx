import React, { forwardRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiCheckCircle, FiUser, FiUsers } from 'react-icons/fi';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const CYCLES = ['Mensal', 'Trimestral', 'Anual'] as const;
type Cycle = (typeof CYCLES)[number];

const placeholderFeatures = ['Personalize os benefícios do plano'];

/** Faixa que marca onde os planos reais devem ser configurados */
const PersonalizeTag: React.FC<{ light?: boolean }> = ({ light }) => (
  <div
    className={`mb-6 flex items-center justify-center rounded-lg border-2 border-dashed px-4 py-2.5 ${
      light ? 'border-white/50 bg-white/10 text-white' : 'border-coral/60 bg-coralBg text-coral'
    }`}
  >
    <span className="text-center text-xs font-extrabold uppercase tracking-[0.12em]">
      Personalize seu plano
    </span>
  </div>
);

const Pricing = forwardRef<HTMLDivElement>((_props, ref) => {
  const [billing, setBilling] = useState<Cycle>('Mensal');
  const [people, setPeople] = useState(1);

  const cycleSuffix = billing === 'Anual' ? '/ano' : billing === 'Trimestral' ? '/trimestre' : '/mês';

  return (
    <section id="planos" ref={ref} className="bg-gradient-2 py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeader
            pill="Planos Promocionais"
            pillVariant="blue"
            title={
              <>
                Acesso à saúde de elite,
                <br />
                sem burocracia.
              </>
            }
          />
        </Reveal>

        {/* Seletor de ciclo */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {CYCLES.map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBilling(cycle)}
              className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-colors ${
                billing === cycle ? 'bg-navy text-white' : 'bg-blueTagBg text-textmuted hover:bg-blueTag'
              }`}
            >
              {cycle}
            </button>
          ))}
        </div>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Card individual placeholder */}
          {[0, 1].map((idx) => (
            <div
              key={idx}
              className="flex h-full min-h-[620px] w-full flex-col rounded-3xl bg-white p-6 shadow-[0_4px_20px_rgba(26,41,66,0.06)] lg:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-iconbg">
                  <FiUser className="text-navy" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold leading-tight text-navy">
                    Plano Individual {idx + 1}
                  </h3>
                  <p className="mt-1 text-sm text-textmuted">Plano válido para 1 pessoa</p>
                </div>
              </div>

              <PersonalizeTag />

              <div className="mb-8 flex items-end gap-1">
                <span className="text-3xl font-black text-navy">R$ 00,00</span>
                <span className="pb-1 text-textmuted">{cycleSuffix}</span>
              </div>

              <div className="mb-10 flex flex-1 flex-col gap-4">
                {placeholderFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 flex-shrink-0 text-navy" size={20} />
                    <span className="text-sm text-navy">{f}</span>
                  </div>
                ))}
              </div>

              <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-navy py-4 text-base font-bold text-white transition-colors hover:bg-navyDeep">
                Escolher este plano
                <FaArrowRight />
              </button>
            </div>
          ))}

          {/* Card familiar destacado */}
          <div className="relative flex h-full w-full">
            <div className="absolute -top-5 left-1/2 z-[2] -translate-x-1/2 rounded-full bg-gradient-to-r from-brandyellow to-brandorange px-6 py-2 text-xs font-black tracking-[0.1em] text-navy shadow-md">
              MAIS POPULAR
            </div>
            <div className="flex h-full min-h-[620px] w-full flex-col rounded-3xl bg-navy p-6 text-white shadow-[0_12px_40px_rgba(26,41,66,0.25)] lg:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
                  <FiUsers className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold leading-tight text-white">
                    Plano Familiar / Empresarial
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    1 titular + {people} dependente{people > 1 ? 's' : ''} ({people + 1} pessoas)
                  </p>
                </div>
              </div>

              <PersonalizeTag light />

              <div className="mb-1 flex items-end gap-1">
                <span className="text-3xl font-black text-white">R$ 00,00</span>
                <span className="pb-1 text-white/70">/pessoa</span>
              </div>
              <p className="mb-6 text-sm text-white/80">
                Total {cycleSuffix.replace('/', '')}: R$ 00,00
              </p>

              <p className="mb-3 text-xs font-bold tracking-[0.1em] text-white/90">
                ESCOLHA A QUANTIDADE DE PESSOAS
              </p>
              <div className="mb-6 grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((n) => {
                  const active = people === n;
                  return (
                    <button
                      key={n}
                      onClick={() => setPeople(n)}
                      className={`flex h-[60px] flex-col items-center justify-center rounded-lg transition-all ${
                        active ? 'bg-white text-navy' : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <span className="text-xl font-extrabold leading-none">{n + 1}</span>
                      <span className="mt-0.5 text-xs font-medium opacity-80">pessoa(s)</span>
                    </button>
                  );
                })}
              </div>

              <div className="mb-10 flex flex-1 flex-col gap-4">
                {placeholderFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 flex-shrink-0 text-white" size={20} />
                    <span className="text-sm text-white">{f}</span>
                  </div>
                ))}
              </div>

              <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-white py-4 text-base font-bold text-navy transition-colors hover:bg-[#f1f5fa]">
                Escolher este plano
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
