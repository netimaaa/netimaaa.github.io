import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.aboutMe}>
      <h1 className={styles.aboutMeTitle}>About me</h1>
      <div className={styles.aboutMeInfo}>
        <div className={styles.information}>
          <div className={styles.informationText}>
            <ul>
              <li className={styles.infItem}>
                Innopolis University B23 ISE-03 student
              </li>
              <li className={styles.infItem}>
                Beginner in frontend web delopment
              </li>
              <li className={styles.infItem}>Capybara enjoyer</li>
            </ul>
          </div>
          <div className={styles.informationContact}></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
