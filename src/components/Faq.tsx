import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { faqs } from './data';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Faq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Reveal>
          <SectionHeader
            pill="Dúvidas Frequentes"
            pillVariant="blue"
            title="Perguntas e Respostas"
            subtitle="Tire suas dúvidas sobre nossos serviços de telemedicina."
          />
        </Reveal>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_rgba(26,41,66,0.06)]"
              >
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left transition-colors hover:bg-[#FAFBFD]"
                >
                  <span className="text-base font-semibold text-navy">{f.q}</span>
                  <FaChevronDown
                    className={`text-navy transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-6 leading-relaxed text-textmuted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
