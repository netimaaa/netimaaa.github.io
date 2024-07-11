import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
