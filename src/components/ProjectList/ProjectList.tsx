import styles from './ProjectList.module.css';
import Link from 'next/link';

const ProjectList = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.projectTitle}>Project</h1>
      <div className={styles.projectListRow}>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <img src="/img/project_image.png" alt="Comic Project" />
          </div>
          <div className={styles.projectListItemText}>Project 1</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <img src="/img/project_image.png" alt="Comic Project" />
          </div>
          <div className={styles.projectListItemText}>Project 2</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <img src="/img/project_image.png" alt="Comic Project" />
          </div>
          <div className={styles.projectListItemText}>Project 3</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <img src="/img/project_image.png" alt="Comic Project" />
          </div>
          <div className={styles.projectListItemText}>Project 4</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <img src="/img/project_image.png" alt="Comic Project" />
          </div>
          <div className={styles.projectListItemText}>Project 5</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <img src="/img/project_image.png" alt="Comic Project" />
          </div>
          <div className={styles.projectListItemText}>Project 6</div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
