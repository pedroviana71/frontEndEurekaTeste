import React, { useState } from "react";
import styles from "./index.module.css";
import { clsx } from "clsx";
import { IoCopyOutline } from "react-icons/io5";

const Address = ({ address, showInvalidAddress }) => {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const showMessageTextCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${address.logradouro}, ${address.bairro}, ${address.localidade}, ${address.uf}`
    );
    showMessageTextCopied();
  };

  return (
    <>
      {address.logradouro && (
        <div className={styles.addressContainer}>
          <div className={styles.address}>
            <p>Bairro: {address.bairro}</p>
            <p>Logradouro: {address.logradouro}</p>
            <p>Localidade: {address.localidade}</p>
            <p>UF: {address.uf}</p>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleCopy} className={styles.button}>
              <IoCopyOutline
                className={clsx(hover ? styles.copyIconHover : styles.copyIcon)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
            </button>
            {copied && <p>Copiado!</p>}
          </div>
        </div>
      )}
      {showInvalidAddress && (
        <div className={clsx(!showInvalidAddress && styles.addressContainer)}>
          <p>CEP inválido</p>
        </div>
      )}
    </>
  );
};

export default Address;
