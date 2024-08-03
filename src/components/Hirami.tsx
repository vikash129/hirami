import React from 'react';
import styles from '../style/HireMe.module.css';

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className={styles.icon} />
);

const HireMe: React.FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.flexContainer}>
            <div className={styles.column}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e1b3b9ee9f966407f21dc7681afd295fd615036338abe0a386adcb71fdeb2a9?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff"
                alt="Hire Me app interface"
                className={styles.heroImage}
              />
            </div>
            <div className={styles.column}>
              <div className={styles.textContent}>
                <h1 className={styles.brandName}>
                  <span>Hire</span>
                  <span className={styles.brandHighlight}>mi</span>
                </h1>
                <h2 className={styles.tagline}>
                  India's No. 1 Career Path App
                </h2>
                <p className={styles.description}>
                  Your one-stop destination for jobs, internships, and
                  mentorship programs all over India.
                </p>
                <div className={styles.ctaContainer}>
                  <span className={styles.ctaText}>Download Now</span>
                  <div className={styles.iconContainer}>
                    <div className={styles.divider} />
                    <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/475d5a65659f9e0f818986a3483ff0926e4e27dbe118e27bfc95e656b969be98?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" alt="App Store" />
                    <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/726d92c995071541dcc92b2d6e2a3390ca8f795140670c985716abe1098abc3d?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" alt="Google Play" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HireMe;