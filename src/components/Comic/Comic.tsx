// components/Comic.tsx

import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic for client-side rendering
import styles from "./Comic.module.css"; // Assuming you have a CSS module for styling

interface ComicProps {
  title: string;
  img: string;
  alt: string;
  date: string;
}

// Use dynamic import to ensure useEffect is only used on client side
const Image = dynamic(() => import("next/image"), { ssr: false });

const Comic: React.FC<ComicProps> = ({ title, img, alt, date }) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Check if window is defined to ensure we're on the client side
    if (typeof window !== "undefined") {
      setFormattedDate(new Date(date).toLocaleDateString());
    }
  }, [date]);

  return (
    <div className={styles.comicContainer}>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={img}
          alt={alt}
          layout="responsive"
          width={300}
          height={300}
        />
      </div>
      <div className={styles.textContainer}>
        <p>{alt}</p>
        <p>Published on: {formattedDate}</p>
      </div>
    </div>
  );
};

export default Comic;
