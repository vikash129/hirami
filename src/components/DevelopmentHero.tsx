import React from 'react';
import styles from '../style/DevelopmentHero.module.css';

interface HireMiHeroProps {
  title: string;
  statsNumber: string;
  statsLabel: string;
  description: string;
}

const Hero: React.FC<HireMiHeroProps> = ({ title, statsNumber, statsLabel, description }) => {
  return (
<section className={styles.hero}>
    <div className={styles.heroContent}>
    <div className={styles.heroInner}>
      <h1 className={styles.heroTitle}>
        Apke <span className={styles.highlightRed}>Development</span> Ka
        <span className={styles.highlightWhite}>Sathi</span> Hire
        <span className={styles.highlightRed}>mi</span>!
      </h1>
      <div className={styles.statsCard}>
        <div className={styles.statsNumber}>{statsNumber}</div>
        <div className={styles.statsLabel}>{statsLabel}</div>
      </div>

      <p className={styles.heroDescription}>{description}</p>
        </div>
      </div>
    </section>

);
};


const HireMiHero: React.FC = () => {
  return (
      <Hero
        title="Apke Development Ka Sathi Hire mi!"
        statsNumber="8000+"
        statsLabel="Candidates"
        description="Empowered with internships, mentorships, and job opportunities nationwide."
      />
  );
};
export default HireMiHero;