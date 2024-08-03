import React from 'react';
import styles from '../style/Footer.module.css';

interface LinkGroupProps {
  title: string;
  links: string[];
}

const LinkGroup: React.FC<LinkGroupProps> = ({ title, links }) => {
  return (
    <div className={styles.linkGroup}>
      <h3 className={styles.linkGroupTitle}>{title}</h3>
      {links.map((link, index) => (
        <a key={index} href="#" className={styles.link}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default LinkGroup;