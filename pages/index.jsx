import Head from "next/head";
import Image from "next/image";
import SectionLayout from "../components/SectionLayout";
import styles from "../styles/Home.module.css";
import programmingSvg from "../assets/programming.svg";
import GridExperience from "../components/GridExperience";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roberto - Programador JR</title>
        <meta name="description" content="Programador JR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <SectionLayout>
          <header>
            <h1>
              Hola me llamo <span className="color-blue-1">Roberto!</span>
            </h1>
            <h3 className="color-yellow-1">Programador JR</h3>
            <p>
              Cuento con experiencia en el desarrollo de aplicaciones
              web/moviles con integraciones a servicios REST/SOAP
            </p>
          </header>
          <div className={styles["image-layout"]}>
            <Image src={programmingSvg} alt="programming" />
          </div>
        </SectionLayout>
        <section className="center">
          <h2>Experiencia con estas <span className="color-pink-1">tenologias!</span></h2>
        </section>
        <GridExperience/>
      </main>
    </div>
  );
}