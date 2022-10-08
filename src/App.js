import Header from "./components/header";
import Search from "./components/search";
import styles from "./utils/styles/app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Search />
    </div>
  );
}

export default App;
