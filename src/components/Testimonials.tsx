import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import { testimonials, stats } from './data';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

type ParsedStat = {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  thousands: boolean;
  decSep: ',' | '.';
};

/** Extrai número, prefixo e sufixo de strings como "+2 milhões", "50.000+", "4.9", "98%". */
function parseStat(v: string): ParsedStat | null {
  if (v.includes('/')) return null; // ex.: "24/7" — sem animação
  const prefix = (v.match(/^[^\d]*/) || [''])[0];
  const rest = v.slice(prefix.length);
  const numStr = (rest.match(/^[\d.,]+/) || [''])[0];
  if (!numStr) return null;
  const suffix = rest.slice(numStr.length);

  const decMatch = numStr.match(/([.,])(\d{1,2})$/);
  if (decMatch && !(decMatch[1] === '.' && decMatch[2].length === 3)) {
    // decimal (ex.: 4.9)
    const decSep = decMatch[1] as ',' | '.';
    const normalized = numStr
      .replace(decSep === '.' ? /,/g : /\./g, '')
      .replace(decSep, '.');
    return {
      prefix,
      suffix,
      target: parseFloat(normalized),
      decimals: decMatch[2].length,
      thousands: false,
      decSep,
    };
  }
  // inteiro, com possível separador de milhar (ex.: 50.000)
  const thousands = /[.,]/.test(numStr);
  return {
    prefix,
    suffix,
    target: parseInt(numStr.replace(/[.,]/g, ''), 10),
    decimals: 0,
    thousands,
    decSep: '.',
  };
}

function formatStat(p: ParsedStat, n: number): string {
  if (p.decimals > 0) {
    let s = n.toFixed(p.decimals);
    if (p.decSep === ',') s = s.replace('.', ',');
    return p.prefix + s + p.suffix;
  }
  const r = Math.round(n);
  const s = p.thousands ? r.toLocaleString('pt-BR') : String(r);
  return p.prefix + s + p.suffix;
}

const CountUp: React.FC<{ value: string; className?: string }> = ({ value, className }) => {
  const parsed = useMemo(() => parseStat(value), [value]);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(parsed ? formatStat(parsed, 0) : value);

  useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const t0 = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - t0) / duration);
              const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
              setDisplay(formatStat(parsed, parsed.target * eased));
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(formatStat(parsed, parsed.target));
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [parsed, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

const Testimonials: React.FC = () => (
  <section className="bg-canvas py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <Reveal>
        <SectionHeader
          pill="Avaliações"
          pillVariant="blue"
          title="O que nossos clientes dizem"
          subtitle="Milhares de pessoas já transformaram a forma de cuidar da saúde."
        />
      </Reveal>

      <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 120}>
            <div className="relative h-full rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(26,41,66,0.06)]">
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, k) => (
                  <FaStar key={k} className="text-coral" size={16} />
                ))}
                <span className="flex-1" />
                <FaQuoteRight className="text-[#E8EDF3]" size={32} />
              </div>
              <p className="mb-8 text-base leading-relaxed text-navy">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-iconbg text-sm font-bold text-navy">
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-navy">{t.name}</span>
                  <span className="text-sm text-textmuted">{t.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <CountUp value={s.v} className="text-3xl font-extrabold text-navy md:text-4xl" />
            <span className="text-center text-sm text-textmuted">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
