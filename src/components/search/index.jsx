import { useState } from "react";
import styles from "./index.module.css";
import { api } from "../../actions";

const Search = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});

  const handleSearch = async () => {
    const data = await api.get(`http://localhost:3001/?cep=${cep}`);
    setAddress(data.data);
    console.log(data.data);
  };

  const handleChangeCEP = (e) => {
    setCep(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="number"
        placeholder="Digite o CEP"
        onChange={handleChangeCEP}
      />
      <button onClick={() => handleSearch(cep)}>Pesquisar</button>
      {address.logradouro && (
        <div>
          <p>Bairro: {address.bairro}</p>
          <p>Logradouro: {address.logradouro}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
