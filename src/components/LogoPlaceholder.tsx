import React from 'react';

interface Props {
  light?: boolean;
}

/**
 * Banner placeholder exibido em todos os locais onde a logo do cliente
 * apareceria na LP original. Substitua este componente pela sua logo.
 */
const LogoPlaceholder: React.FC<Props> = ({ light }) => (
  <div
    className={`flex h-[52px] min-w-[150px] items-center justify-center rounded-lg border-2 border-dashed px-4 md:h-[64px] md:min-w-[190px] ${
      light
        ? 'border-white/50 bg-white/10 text-white'
        : 'border-coral/60 bg-coralBg text-coralText'
    }`}
  >
    <span className="text-center text-xs font-extrabold uppercase leading-tight tracking-[0.12em] md:text-sm">
      Sua logo aqui
    </span>
  </div>
);

export default LogoPlaceholder;
