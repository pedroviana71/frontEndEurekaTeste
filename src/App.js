import Header from "./components/header";
import Search from "./components/search";
import styles from "./utils/styles/app.module.css";

function App() {
  return (
    <main className={styles.container}>
      <Header />
      <Search />
    </main>
  );
}

export default App;
