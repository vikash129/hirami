import React from 'react';
import styles from '../style/HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageSrc }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentColumn}>

        <div className={styles.contentWrapper}>

          <h1 className={styles.heroTitle}>
            <span className={styles.boldText}>College ke </span>
            <span className={styles.redText}>sath bhi !! </span>
            <br />
            <span className={styles.boldText}>College ke </span>
            <span className={styles.blackText}>baad bhi ! </span>
          </h1>

          <p className={styles.heroDescription}>{description}</p>

          <div className={styles.ctaWrapper}>
            <button className={styles.downloadAppButton}>Download App</button>
            <button className={styles.forBusinessButton}>For Business</button>
          </div>
        </div>
      </div>
      
      <div className={styles.imageColumn}>
        {/* <div className={styles.imageWrapper}> */}
          <img loading="lazy" src={"https://cdn.builder.io/api/v1/image/assets/TEMP/ec7966c94f0035631cc420aec04e6252f286107843637d5bb8a73bd95fbd8c7e?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff"} alt="Hero illustration" className={styles.heroImage} />
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroSection;