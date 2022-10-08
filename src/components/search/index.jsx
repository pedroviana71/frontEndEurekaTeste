import { useState } from "react";
import styles from "./index.module.css";
import { api } from "../../actions";
import { regexCEP } from "../../utils/functions/regex";

const Search = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});

  const handleFind = async () => {
    const data = await api.get(cep);
    setAddress(data.data);
    console.log(data.data);
  };

  const handleChange = (e) => {
    const cepRegex = regexCEP(e);
    setCep(cepRegex);
  };

  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="99999-999" onChange={handleChange} />
      <button onClick={() => handleFind(cep)}>Pesquisar</button>
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
