import React, { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import HeaderNav from '@/components/HeaderNav';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Security from '@/components/Security';
import Programs from '@/components/Programs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  const plansRef = useRef<HTMLDivElement | null>(null);

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-navy">
      <HeaderNav onScrollToPlans={scrollToPlans} />
      <Hero onScrollToPlans={scrollToPlans} />
      <Benefits />
      <Pricing ref={plansRef} />
      <Security />
      <Programs />
      <HowItWorks onScrollToPlans={scrollToPlans} />
      <Testimonials />
      <Faq />
      <FooterSection />

      <a
        href="https://api.whatsapp.com/send/?phone=&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-[100] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-whatsapp shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-105"
      >
        <FaWhatsapp className="text-white" size={28} />
      </a>
    </div>
  );
}
