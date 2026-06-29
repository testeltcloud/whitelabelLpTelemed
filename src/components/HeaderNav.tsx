import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiGrid, FiHeart, FiPhone, FiUser, FiX } from 'react-icons/fi';

const LOGO_SRC = '/images/hero/Sua%20logo%20aqui%20200x200.svg';

interface Props {
  onScrollToPlans?: () => void;
}

const HeaderNav: React.FC<Props> = ({ onScrollToPlans }) => {
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // estado compacto (pílula) já na menor rolagem
      setCompact(y > 8);
      // esconde o header ao entrar na seção de Benefícios (fim do hero)
      const benefits = document.getElementById('beneficios');
      if (benefits) {
        setHidden(benefits.getBoundingClientRect().top <= 80);
      } else {
        setHidden(y > window.innerHeight * 0.9);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Planos', icon: FiGrid, onClick: onScrollToPlans },
    { label: 'Benefícios', icon: FiHeart, href: '#beneficios' },
    { label: 'Contato', icon: FiPhone, href: '#contato' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] isolate transition-[transform,opacity] duration-300 ease-out ${
        hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      } ${
        compact
          ? 'px-3 md:px-4'
          : 'border-b border-brandborder bg-white shadow-[0_1px_8px_rgba(26,41,66,0.06)]'
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-4 transition-none ${
          compact
            ? 'max-w-3xl rounded-full border border-white/25 bg-navy/35 px-4 py-1 shadow-[0_12px_34px_rgba(15,31,61,0.30)] backdrop-blur-md backdrop-saturate-150 md:px-8'
            : 'max-w-7xl px-4 py-0 md:px-6'
        }`}
      >
        <a href="/" aria-label="Início" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt="Logo"
            width={200}
            height={200}
            fetchPriority="high"
            className={compact ? 'h-9 w-auto md:h-11' : 'h-12 w-auto md:h-16'}
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-10">
          {links.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-coral lg:text-base ${
                  compact ? 'text-white' : 'text-navy'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`text-sm font-medium transition-colors hover:text-coral lg:text-base ${
                  compact ? 'text-white' : 'text-navy'
                }`}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navyDeep md:inline-flex lg:px-6 lg:text-base">
            Área de Cliente
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="menu"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors md:hidden ${
              compact ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-canvas'
            }`}
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[120] md:hidden">
          <div
            className="absolute inset-0 bg-navyDeep/55 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-72 flex-col rounded-l-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-brandborder px-5 py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_SRC} alt="Logo" width={200} height={200} className="h-12 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="fechar menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-textmuted hover:bg-iconbg hover:text-navy"
              >
                <FiX size={20} />
              </button>
            </div>
            <div className="flex-1 px-4 py-5">
              <p className="mb-2 px-3 text-xs font-bold uppercase tracking-[0.08em] text-textmuted">
                Navegação
              </p>
              <div className="flex flex-col gap-3">
                {links.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-iconbg text-navy">
                        <Icon size={20} />
                      </span>
                      {item.label}
                    </>
                  );
                  const cls =
                    'flex w-full items-center gap-3 rounded-xl border border-brandborder bg-white px-4 py-3 text-left text-base font-semibold text-navy shadow-sm transition-all hover:border-navy hover:bg-canvas';
                  return item.href ? (
                    <a key={item.label} href={item.href} className={cls} onClick={() => setMenuOpen(false)}>
                      {content}
                    </a>
                  ) : (
                    <button
                      key={item.label}
                      className={cls}
                      onClick={() => {
                        setMenuOpen(false);
                        item.onClick?.();
                      }}
                    >
                      {content}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="border-t border-brandborder px-4 py-5">
              <button className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-navy text-base font-bold text-white shadow-lg hover:bg-navyDeep">
                <FiUser size={20} />
                Área de Cliente
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
