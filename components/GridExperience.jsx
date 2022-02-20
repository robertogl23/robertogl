import styles from "../styles/gridExperience.module.css";

export default function GridExperience() {
  return (
    <section className={styles.layout}>
      <div className={styles.grid}>
        <div className={`${styles.box} ${styles["box-1"]}`}>
          <header></header>
          <footer>
            <h4>Front-End</h4>
            <ul>
              <li>HTML, CSS y JavaScript/TypeScript</li>
              <li>React ( Hooks, APIS, NextJS, Remix )</li>
              <li>Flutter</li>
            </ul>
          </footer>
        </div>
        <div className={`${styles.box} ${styles["box-2"]}`}>
          <header></header>
          <footer>
            <h4>Back-End</h4>
            <ul>
              <li>NodeJS ( Express, MongoDB)</li>
              <li>
                ASP .Net ( WebForms, WCF, RestFull MVC, Entity Framework, LinQ)
              </li>
              <li>Java ( Spring Boot, JPA, Hibernate)</li>
            </ul>
          </footer>
        </div>
        <div className={`${styles.box} ${styles["box-3"]}`}>
          <header></header>
          <footer>
            <h4>Bases de Datos</h4>
            <ul>
              <li>
                SQL ( Tramsactions, Stored Procedures, Views,Inner
                Join/Right/Left,Triggers )
              </li>
              <li>SQL Server</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </footer>
        </div>
        <div className={`${styles.box} ${styles["box-4"]}`}>
          <header></header>
          <footer>
            <h4>Servidores</h4>
            <ul>
              <li>IIS</li>
              <li>AWS</li>
              <li>Vercel</li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  );
}
