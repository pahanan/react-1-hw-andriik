import Image from 'next/image';
import styles from './page.module.css';


const OurCrew = () => {
  // TASK - React 1 week 1 DONE
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.crewContainer}>
      <p>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.</p>
      
      <div className={styles.crewGrid}>
        <div className={styles.crewCard}>
          <Image src="/crew/image-anousheh-ansari.png" alt="Sarah Vega" width={120} height={120} />
          <p><strong>Captain Sarah Vega</strong></p>
          <p>A former NASA astronaut with over 15 years of experience, leading our missions with expertise.</p>
        </div>

        <div className={styles.crewCard}>
          <Image src="/crew/image-douglas-hurley.png" alt="Leo Redding" width={120} height={120} />
          <p><strong>Dr. Leo Redding</strong></p>
          <p>Renowned astrophysicist, ensuring that every journey is as educational as it is exhilarating.</p>
        </div>

        <div className={styles.crewCard}>
          <Image src="/crew/image-mark-shuttleworth.png" alt="Hana Lee" width={120} height={120} />
          <p><strong>Chief Engineer Hana Lee</strong></p>
          <p>Responsible for state-of-the-art technology that powers our spacecraft.</p>
        </div>

        <div className={styles.crewCard}>
          <Image src="/crew/image-victor-glover.png" alt="Alex Santos" width={120} height={120} />
          <p><strong>Mission Specialist Alex Santos</strong></p>
          <p>Ensuring smooth space travel experiences with his expertise in adventure tourism.</p>
        </div>
      </div>
    </div>
  );
}

export default OurCrew;