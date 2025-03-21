import styles from './page.module.css';
import OurCrew from './OurCrew';
import OurValues from './OurValues';
import OurPartners from './OurPartners';

// TASK - React 1 week 1 DONE
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues/>
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew/>
        </section>
        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners/>
        </section>

         {/* TASK - React 1 week 1 DONE*/}
         {/* Add in the "OurPartners" component here */}
      </main>
    </div>
  );
}

export default Crew;
