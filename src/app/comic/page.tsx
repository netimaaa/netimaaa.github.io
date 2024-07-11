// src/app/comic/page.tsx
"use client";

import Comic from "../../components/Comic/Comic";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/Home.module.css";

const API_URL = "https://fwd.innopolis.university/api";

interface ComicPageProps {
  safe_title: string;
  img: string;
  alt: string;
  date: string;
}

const ComicPage = async () => {
  const email = "t.farizunov@innopolis.university";
  const apiUrl = `${API_URL}/hw2?email=${email}`;

  // Fetch the comic ID
  const idResponse = await fetch(apiUrl);
  const comicId = await idResponse.json();

  // Fetch the comic details using the fetched ID
  const comicUrl = `${API_URL}/comic?id=${comicId}`;
  const comicResponse = await fetch(comicUrl);
  const comicData: ComicPageProps = await comicResponse.json();

  // Sanitize the data to prevent XSS attacks
  const sanitizeText = (text: string) => {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  const sanitizedComicData = {
    title: sanitizeText(comicData.safe_title),
    img: comicData.img,
    alt: sanitizeText(comicData.alt),
    date: comicData.date,
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <Comic {...sanitizedComicData} />
      <Footer />
    </div>
  );
};

export default ComicPage;
