import Contador from "./components/Contador";
import OlaMundo from "./components/OlaMundo";
import Saudacao from "./components/Saudacao";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section>
      <OlaMundo />
      <Saudacao nome="Patrick" />
      <Contador />
    </section>
  );
}
