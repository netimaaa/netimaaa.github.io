import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div className={styles.skills}>
                <h1 className={styles.skillsTitle}>Skills</h1>
                <div className={styles.skillsInfo}>
                    <div className={styles.skill}>
                        <h2 className={styles.skillTitle}>Frontend</h2>
                        <div className={styles.skillSubtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, porro. Quo provident tenetur eligendi necessitatibus maxime totam perspiciatis commodi molestias repellendus, iusto alias dolorem eos.</div>
                    </div>
                    <div className={styles.skill}>
                        <h2 className={styles.skillTitle}>Backend</h2>
                        <div className={styles.skillSubtitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum. Dolor ratione aspernatur repellendus perspiciatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nulla nisi culpa minus officia! Id nam maiores odit. Asperiores, aspernatur?</div>
                    </div>
                </div>
            </div>
  );
};

export default Skills;
