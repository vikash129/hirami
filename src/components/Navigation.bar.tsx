import React from 'react';
import styles from '../style/NavigationBar.module.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href}>{children}</a>
);

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navigationBar}>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5618cf1ca37912390d924b43582d90b090fa4e77e8a0a095bb217906a27c3446?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" 
        className={styles.logo} 
        alt="Company logo"
      />
      <div className={styles.navItems}>
        <div className={styles.linkContainer}>

          <a   href="/about" className={styles.servicesLink}>About Us</a>
          {/* <div className={styles.servicesLink}> */}
            {/* <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd31353afc37e54f04fa7e497db5b76b49438aa190d9c6e2b63496e0f91b101e?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" 
              className={styles.servicesIcon} 
              alt=""
            /> */}
            <span className={styles.servicesLink}>Services</span>
          {/* </div> */}
          <a href="/careers" className={styles.servicesLink}>Careers</a>
          <a href="/contact" className={styles.servicesLink}>Contact us</a>
        </div>
        <button className={styles.appButton}>
          Our App
          <span className={styles['visually-hidden']}>Download our app</span>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;