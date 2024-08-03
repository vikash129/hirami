import styles from '../style/BusinessEfficiency.module.css';

function MyComponent() {
  return (
    <>
      <div className={styles.div}>
        <div>Our pathway to</div>
        <div className={styles.businessEfficiencyGrowth}>
          Business Efficiency &{" "}
          <span style={{color:'#bd2930'}}>Growth</span>
        </div>
        <div className={styles.enhance1}>
          Hiremi enhances business efficiency with expert project management and
          recruitment outsourcing. We secure top talent, support development
          through jobs and mentorship, ensure sustainable growth, fostering a
          skilled workforce and successful partnerships.
        </div>
        <div className={styles.div2}>
          <div className={styles.learnMore}>Learn more</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d733363e097e253120053c5d8e159e06e1269e6e24c9dcf58fd67479ec1bbde?apiKey=52b9845d79844477866309b9694c9eff&&apiKey=52b9845d79844477866309b9694c9eff"
            className={styles.img}
          />
        </div>
      </div>
      
    </>
  );
}

export default MyComponent