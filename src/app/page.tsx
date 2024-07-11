import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import ProjectList from "../components/ProjectList/ProjectList";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Header />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Home;
