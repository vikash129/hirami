import React from 'react';
import styles from '../style/Footer.module.css';

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.contactTitle}>Contact Us</h3>
      <div className={styles.contactItem}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6978f92eb43ed9aebea7bde5f414ad52cbf15b480c5a1279bed7f27e0ae84fa?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" className={styles.contactIcon} alt="Phone" />
        <span className={styles.contactText}>+91-9302707264</span>
      </div>
      <div className={styles.contactItem}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18f820893cbf86c90f507507d56b51a5e3c3ae5eac381ef7b66f3767f69829b5?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" className={styles.contactIcon} alt="Email" />
        <span className={styles.contactText}>support@hiremi.com</span>
      </div>
      <h3 className={styles.contactTitle}>Follow us</h3>
      <div className={styles.socialMedia}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed9669e19d1991f9f72d5d6a2df4d221c4c133272d425134e1654d61c7542fb2?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" className={styles.socialIcons} alt="Social Media Icons" />
      </div>
    </div>
  );
};

export default ContactInfo;