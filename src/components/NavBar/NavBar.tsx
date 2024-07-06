import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Image src="/img/logo.svg" alt="Timur Farizunov" width={50} height={50} />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link href="/" className={styles.navListLink}>Projects</Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/skills" className={styles.navListLink}>Skills</Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/contact" className={styles.navListLink}>Contacts</Link>
        </li>
      </ul>
      <ul className={styles.navContacts}>
        <li className={styles.navContactsItem}>
          <a href="https://t.me/netimaaa" className={styles.navContactsLink}>
            <Image src="/img/tg.svg" alt="Telegram" width={24} height={24} />
          </a>
        </li>
        <li className={styles.navContactsItem}>
          <a href="https://github.com/netimaaa" className={styles.navContactsLink}>
            <Image src="/img/gh.svg" alt="GitHub" width={24} height={24} />
          </a>
        </li>
        <li className={styles.navContactsItem}>
          <a href="https://discord.gg/GsSMF8rsNk" className={styles.navContactsLink}>
            <Image src="/img/ds.svg" alt="Discord" width={24} height={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
