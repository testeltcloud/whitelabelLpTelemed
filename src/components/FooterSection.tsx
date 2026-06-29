import React from 'react';
import { FaApple, FaGooglePlay, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import LogoPlaceholder from './LogoPlaceholder';

const AppBadge: React.FC<{ icon: React.ElementType; label: string; sublabel: string }> = ({
  icon: Icon,
  label,
  sublabel,
}) => (
  <button
    type="button"
    className="flex w-full items-center gap-2 rounded-lg border border-white/30 bg-white/20 px-4 py-2.5 text-left transition-colors hover:border-white/50 hover:bg-white/30"
  >
    <Icon className="flex-shrink-0 text-white" size={20} />
    <span className="flex flex-col">
      <span className="text-[9px] leading-none text-white/75">{sublabel}</span>
      <span className="text-[13px] font-bold leading-tight text-white">{label}</span>
    </span>
  </button>
);

const FooterSection: React.FC = () => (
  <footer id="contato" className="bg-navy pb-8 pt-12 text-white md:pt-16">
    <div className="mx-auto max-w-7xl px-5 md:px-6">
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <LogoPlaceholder light />
          <p className="max-w-sm text-sm leading-relaxed opacity-85">
            Cuidando da sua saúde com tecnologia e praticidade. Atendimento médico de qualidade,
            acessível 24 horas por dia.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <h3 className="text-lg font-extrabold">Baixe o App</h3>
          <div className="flex w-full max-w-[220px] flex-col gap-3">
            <AppBadge icon={FaApple} label="App Store" sublabel="Disponível na" />
            <AppBadge icon={FaGooglePlay} label="Google Play" sublabel="Disponível no" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <h3 className="text-lg font-extrabold">Contato</h3>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="mt-[3px]" size={16} />
            <span className="text-sm opacity-90">(00) 0000-0000</span>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-[3px]" size={16} />
            <span className="text-sm opacity-90">Sua cidade - UF</span>
          </div>
        </div>
      </div>

      <div className="mb-6 h-px bg-white/20" />

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Sua Marca. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-85">
          <a href="#" className="transition-colors hover:text-coral">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
