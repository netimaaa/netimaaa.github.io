import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>
          Hi, my name is <span className={styles.headerTitleName}>Timur</span>
        </h1>
        <div className={styles.headerSubtitle}>I’m a student of Innopolis University</div>
        <button type="button" className={styles.btn}>
          <span className={styles.btnText}>My projects</span>
          <span className={styles.btnIcon}>
            <img src="/img/btn.svg" alt="" className={styles.btnImage} />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
