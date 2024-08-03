import React from 'react';
import styles from '../style/ClientChoices.module.css';
import FeatureItem from './FeatureItem';

const features = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0a427d0ee6f52065546f60a83cedc048045c0afa7f5b2927b59523f1ee01873?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff",
    title: "Verified users",
    description: "Our app ensures candidates have authentic skill sets."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d4263dec4ba13c8fc97c65c8383bb5a23fe8dd39fd116047df33750cc567747?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff",
    title: "Diverse Expertise",
    description: "Professionals across various domains, ensuring specialized expertise for your projects."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/11c358d3ada33b0365480aa826ad46ebc8973485053f38c6b54ee0de72df4384?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff",
    title: "Expert management",
    description: "We bring expertise to our clients' project management operations."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8c54909cd65fb248ae3e31ca93aa287dc9adbedae87f7f80ff6480443b74516?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff",
    title: "Certified proficiencies",
    description: "Our experts certify our workforce, ensuring high standards of quality and proficiency."
  }
];

const ClientChoices: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleColumn}>
        <h2 className={styles.title}>
          <span style={{ color: "rgba(0,0,0,1)" }}>Why do our</span> clients{" "}
          <span style={{ color: "rgba(0,0,0,1)" }}>choose us?</span>
        </h2>
      </div>
      <div className={styles.contentColumn}>


        <div className={styles.contentWrapper}>

          <div className={styles.featureGrid}>

            {features.slice(0,2).map((feature, index) => (
              <FeatureItem
                key={index}
                iconSrc={feature.iconSrc}
                title={feature.title}
                description={feature.description}
              />
            ))}

          </div>


          <div className={styles.featureGrid}>

            {features.slice(2,4).map((feature, index) => (
              <FeatureItem
                key={index}
                iconSrc={feature.iconSrc}
                title={feature.title}
                description={feature.description}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientChoices;