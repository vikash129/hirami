import React from 'react';
import styles from '../style/Footer.module.css';
import LinkGroup from './LinkGroup';
import ContactInfo from './ContactInfo';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoColumn}>
            <div className={styles.logoWrapper}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f72d8f9e0095639a04944713557d85c29891e66cca3499fe894ddf0b7756244d?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" className={styles.logo} alt="Company Logo" />
              <p className={styles.tagline}>
                Your one-stop destination for jobs, internships, and mentorship programs all over India.
              </p>


              <div className={styles.appDownload}>

                <span className={styles.getTheApp}>Get the app</span>

                <div className={styles.appStores}>
                  {/* <span className={styles.divider} /> */}
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d4d112e65466e234d3994779b10682e1a40577fbf7875c90f47bc7b2e7b79dc?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" className={styles.appStore} alt="App Store" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7623e79f06b1670e82a8b3f6b06a5d788b368a8d892a08929de6f867be6eb42c?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff" className={styles.playStore} alt="Play Store" />
                </div>


              </div>


            </div>
          </div>
          <div className={styles.linksColumn}>
            <div className={styles.linksWrapper}>
              <LinkGroup title="Colleges" links={['College Partnership']} />
              <LinkGroup
                title="Individuals"
                links={['Mentorship', 'Monitoring', 'Jobs', 'Internship']}
              />
              <LinkGroup
                title="Businesses"
                links={['Project Oversight', 'Outsourcing', 'Hiring Platform']}
              />
              <LinkGroup
                title="Company"
                links={['About us', 'Business', 'Our App', 'Contact Us']}
              />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© 2021 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;