import styles from "./ProjectList.module.css";
import Link from "next/link";
import Image from "next/image";

const ProjectList = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.projectTitle}>Project</h1>
      <div className={styles.projectListRow}>
        <Link href="/comic" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <Image
              src="/img/project_image.png"
              alt="Comic Project"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.projectListItemText}>COMIC PROJECT</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <Image
              src="/img/project_image.png"
              alt="Project 2"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.projectListItemText}>Project 2</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <Image
              src="/img/project_image.png"
              alt="Project 3"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.projectListItemText}>Project 3</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <Image
              src="/img/project_image.png"
              alt="Project 4"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.projectListItemText}>Project 4</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <Image
              src="/img/project_image.png"
              alt="Project 5"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.projectListItemText}>Project 5</div>
        </Link>
        <Link href="/" className={styles.projectListItem}>
          <div className={styles.projectListItemImage}>
            <Image
              src="/img/project_image.png"
              alt="Project 6"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.projectListItemText}>Project 6</div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
