import { useState } from "react";
import { regexCEP } from "../../utils/functions/regex";
import { getCEP } from "../../actions/cep";
import { BiSearch } from "react-icons/bi";
import styles from "./index.module.css";
import Address from "../address";

const Search = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});
  const [showInvalidAddress, setShowInvalidAdress] = useState(false);

  const handleSearch = async () => {
    const formattedCEP = cep.replace(/[-]/g, "");
    const data = await getCEP(formattedCEP);
    if (data && !data.erro && cep) {
      setAddress(data);
      setShowInvalidAdress(false);
    } else {
      setShowInvalidAdress(true);
      setAddress({});
    }
  };

  const handleChange = (e) => {
    const cepRegex = regexCEP(e);
    setCep(cepRegex);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(cep);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          onKeyDown={(e) => handleKeyDown(e)}
          type="text"
          placeholder="Informe o CEP"
          onChange={handleChange}
          className={styles.searchInput}
          autoFocus
        />
        <button onClick={() => handleSearch(cep)} className={styles.button}>
          <BiSearch className={styles.icon} />
        </button>
      </div>
      <Address address={address} showInvalidAddress={showInvalidAddress} />
    </div>
  );
};

export default Search;
