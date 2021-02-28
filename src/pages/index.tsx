import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Next CAPRICHOOO!!!</h1>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
      </section>
    </div>
  );
}
