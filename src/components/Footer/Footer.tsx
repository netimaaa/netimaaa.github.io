import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.info}>Some information</div>
          <div className={styles.infoCopyright}>Some copyright</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
