import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, threshold = 0.15, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -80px 0px' },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, visible]);

  return (
    <div
      ref={ref}
      className={`${visible ? 'reveal-up' : 'reveal-init'} ${className || ''}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
