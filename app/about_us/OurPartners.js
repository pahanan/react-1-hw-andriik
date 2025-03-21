import Image from 'next/image';
import styles from './page.module.css';


const OurPartners = () => {
  // TASK - React 1 week 1 DONE.
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.partnersContainer}>
        <p className={styles.partnersDescription}> 
          We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary. 
        </p>
        <div className={styles.partnersGrid}>
          <Image
            src="/business_partners/alphabet-logo.png" alt="alphabet" width={300} height={200} className={styles.partnerImage}
          />
          <Image
            src="/business_partners/amazon_logo.png" alt="amazon" width={300} height={200} className={styles.partnerImage}
          />
          <Image
            src="/business_partners/Microsoft-Logo-white.png" alt="Microsoft" width={300} height={200} className={styles.partnerImage}
          />
          <Image
            src="/business_partners/samsung-logo.png" alt="samsung" width={300} height={200} className={styles.partnerImage}
          />
          <Image
            src="/business_partners/QueensLogo_white.png" alt="Queens" width={300} height={200} className={styles.partnerImage}
          />
          <Image
            src="/business_partners/CBC_Logo_White.png" alt="CBC" width={300} height={200} className={styles.partnerImage}
          />
          <Image
            src="/business_partners/nyu-logo.png" alt="nyu" width={300} height={200} className={styles.partnerImage}
          />
          <Image
            src="/business_partners/sodexo-logo.png" alt="sodexo" width={300} height={200} className={styles.partnerImage}
          />
        </div>
    </div>
  );
};

export default OurPartners;
