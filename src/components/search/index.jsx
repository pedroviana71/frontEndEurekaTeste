import { useState } from "react";
import { regexCEP } from "../../utils/functions/regex";
import { getCEP } from "../../actions/cep";
import styles from "./index.module.css";

const Search = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});

  const handleSearch = async () => {
    const formattedCEP = cep.replace(/[-]/g, "");
    const data = await getCEP(formattedCEP);
    setAddress(data);
  };

  const handleChange = (e) => {
    const cepRegex = regexCEP(e);
    setCep(cepRegex);
  };

  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="99999-999" onChange={handleChange} />
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
