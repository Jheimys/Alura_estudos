import React, { useEffect, useRef, useState } from 'react';
import styles from './Parallax.module.css';

type ParallaxBannerProps = {
  image: string;
  children?: React.ReactNode;
  height?: string;
};

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ image, children, height = '70vh' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    },
    { threshold: 0.1 }
  );

  io.observe(container);

  return () => {
    io.unobserve(container); // usa referência salva
  };
}, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !bgRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // aplica efeito de parallax se estiver visível na viewport
      if (containerTop < windowHeight && containerTop > -windowHeight) {
        const move = containerTop * 0.3; // ajusta a intensidade do efeito
        bgRef.current.style.transform = `translateY(${move}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={styles.parallaxContainer}
      style={{
        height,
        '--parallax-img': `url(${image})`,
      } as React.CSSProperties}
    >
      <div
        ref={bgRef}
        className={`${styles.backgroundImage} ${visible ? styles.visible : ''}`}
        aria-hidden="true"
      />
      {children && <div className={styles.content}>{children}</div>}
    </section>
  );
};

export default ParallaxBanner;
