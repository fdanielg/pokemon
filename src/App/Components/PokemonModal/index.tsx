import React from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function PokemonModal() {
  return (
    <ReactModal
      overlayClassName={styles.overlay}
      className={styles.modal}
      isOpen={true}
    >
      <div className={styles.container}>
        <div className={styles.image}>
          <Image width={200} height={200} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pô que mão" />
        </div>

        <div className={styles.name}>
        Bulbassaur
      <div className={styles.cuba}>Stats</div>
      <div className={styles.stats}>
        <div>HP</div>
        <div>Attack</div>
        <div>Defense</div>
        <div>Sp. attack</div>
        <div>Sp. defense</div>
        <div>Speed</div>
      </div>
        </div>


      </div>
    </ReactModal>
  );
}
