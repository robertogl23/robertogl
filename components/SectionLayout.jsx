import sectionStyles from "../styles/section.module.css";

export default function SectionLayout({ children, reverse = false }) {
  return (
    <section
      className={`${sectionStyles.layout} ${ reverse && 'reverse' }`}
    >
      {children}
    </section>
  );
}
