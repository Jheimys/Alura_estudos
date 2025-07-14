import styles from './LunchSection.module.css';
import lunchImage from '../../assets/lunch_and_learn.jpg'
import nutritionIcon from '../../assets/balanced-diet.png'
import livro from '../../assets/livro.png';


const LunchAndLearnSection = () => (
  <section className={styles.container}>
    <div className={styles.textBlock}>
      <h2 className={styles.title}>Lunch And Learn</h2>
      <p className={styles.subtitle}>
        Inspire innovation while savoring knowledge.
     </p>

     <div className={styles.icons}>
      <img
        src={nutritionIcon}
        alt="Nutrition icon"
        className={styles.icon}
        style={{ width: 50, height: 50 }}
      />
      <img
        src={livro}
        alt="Book icon"
        className={styles.icon}
        style={{ width: 50, height: 50 }}
      />
    </div>

    </div>
    <img
      src={lunchImage}
      alt="Lunch and Learn"
      className={styles.image}
    />
  </section>
);

export default LunchAndLearnSection;
