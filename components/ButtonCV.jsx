import styles from "../styles/buttonCV.module.css";
import Confetti from "../utils/confetti";
export default function ButtonCV() {
  const handleClick = () => setInterval(Confetti(), 250);
  return (
    <a
      onClick={handleClick}
      className={styles["btn-cv"]}
      href="/roberto-carlos-galicia-lopez.pdf"
      download
    >
      CV
    </a>
  );
}
