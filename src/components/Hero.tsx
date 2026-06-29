import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HERO_IMAGES } from './data';

interface Props {
  onScrollToPlans?: () => void;
}

const Hero: React.FC<Props> = ({ onScrollToPlans }) => {
  const [heroIdx, setHeroIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIdx((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate z-[1] h-[calc(100vh+60px)] min-h-[560px] overflow-hidden bg-navy md:h-[calc(100vh+80px)] md:min-h-[680px]">
      {/* Slides */}
      {HERO_IMAGES.map((src, i) => {
        const active = heroIdx === i;
        return (
          <div
            key={src}
            className="absolute inset-0 transition-[opacity,transform] duration-[1600ms] ease-in-out"
            style={{
              zIndex: active ? 1 : 0,
              opacity: active ? 1 : 0,
              transform: active ? 'scale(1)' : 'scale(0.92)',
            }}
          >
            <Image
              src={src}
              alt={`Atendimento médico por telemedicina ${i + 1}`}
              fill
              sizes="100vw"
              quality={72}
              priority={i === 0}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="object-cover"
            />
          </div>
        );
      })}

      {/* Overlay azul */}
      <div className="hero-gradient pointer-events-none absolute inset-0 z-[2]" />
      {/* Degradê coral */}
      <div className="hero-coral pointer-events-none absolute inset-0 z-[2]" />

      {/* White wipe inicial */}
      <div
        className={`pointer-events-none absolute inset-0 z-[3] bg-white ${
          mounted ? 'animate-heroWhiteWipe' : ''
        }`}
        style={{ opacity: mounted ? 0 : 1 }}
      />

      {/* Conteúdo */}
      <div className="relative z-[4] mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 pb-12 text-center md:pb-20">
        <h1
          className="mb-8 max-w-5xl text-4xl font-extrabold leading-[1.1] text-white opacity-0 [text-shadow:0_2px_20px_rgba(0,0,0,0.3)] md:text-6xl lg:text-7xl"
          style={mounted ? { animation: 'heroTextUp 0.6s ease-out 0.05s forwards' } : undefined}
        >
          Cuidar da Sua Família é Nossa Maior Missão
        </h1>
        <p
          className="mb-12 max-w-3xl text-lg font-normal leading-relaxed text-white opacity-0 md:text-2xl"
          style={mounted ? { animation: 'heroTextUp 0.6s ease-out 0.15s forwards' } : undefined}
        >
          Consultas médicas 24h todos os dias, em até 10 minutos, por vídeo chamada no seu telefone
          celular ou computador.
        </p>
        <div
          className="flex flex-wrap justify-center gap-3.5 opacity-0"
          style={mounted ? { animation: 'heroTextUp 0.6s ease-out 0.25s forwards' } : undefined}
        >
          <button
            onClick={onScrollToPlans}
            className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-navy shadow-lg transition-colors hover:bg-[#f1f5fa]"
          >
            Conhecer os Planos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
