
import styles from "./page.module.css";
import { Hero } from "./components/Hero/Hero";
import { FeaturedProjects } from "./components/FeaturedProjects/FeaturedProjects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <FeaturedProjects />
      </main>
    </div>
  );
}
