import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

export default function Home() {
  useEffect(() => {
    gsap.to('#squiggle', {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      morphSVG: '#squiggleAlt'
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <main>
      <section className={styles.topSection}>
        <h1>
          Hi I'm <strong>FLORA</strong>
        </h1>
        <p>
          Welcome to my page
        </p>
        
      </section>

      <div className={styles.dividerBottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <radialGradient id="radial" cx="30%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#8EB2BD" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#96B678" />
              <stop offset="100%" stopColor="#E1B6B7" />
            </radialGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="url(#radial)"
            id="squiggle"
          />
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#radial)"
            id="squiggleAlt"
          />
        </svg>
      </div>

      
        
      </main>

      <Footer />
    </div>
  );
}
