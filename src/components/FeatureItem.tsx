import React from 'react';
import styles from '../style/ClientChoices.module.css';

interface FeatureItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, title, description }) => {
  return (
    <div className={styles.featureItem}>
      <img loading="lazy" src={iconSrc} alt="" className={styles.featureIcon} />
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;