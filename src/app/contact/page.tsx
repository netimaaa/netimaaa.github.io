import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
