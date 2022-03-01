import Image from "next/image";
import styles from "../styles/cardProject.module.css";
import svg from "../assets/path9.png";
import svg2 from "../assets/time-tracking.png";
export default function CardProject() {
  return (
    <section className={styles.layout}>
      <header>
        <section></section>
        <Image height={"320px"} src={svg} alt="icon" />
      </header>
      <footer>
        <Image height={"380px"} width="420" src={svg2} alt="icon" />
      </footer>
    </section>
  );
}
