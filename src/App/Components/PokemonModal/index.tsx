import React from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

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
        <div style={{display: 'flex', gap: '50px'}}>
        <div>HP</div>
        <ProgressBar width="300px" completed={100} customLabel='100'  />
        </div>
        <div style={{display: 'flex', gap: '50px'}}>
        <div>Attack</div>
        <ProgressBar width="300px" completed={53} customLabel="53" />
        </div>
        <div style={{display: 'flex', gap: '50px'}}>
        <div>Defense</div>
        <ProgressBar width="300px" completed={70} customLabel='70' />
        </div>
        <div style={{display: 'flex', gap: '50px'}}>
        <div>Sp. attack</div>
        <ProgressBar width="300px" completed={40}  customLabel='40'/>
        </div>
        <div style={{display: 'flex', gap: '50px'}}>
        <div>Sp. defense</div>
        <ProgressBar width="300px" completed={60}  customLabel='60'/>
        </div>
        <div style={{display: 'flex', gap: '50px'}}>
        <div>Speed</div>
        <ProgressBar width="300px" completed={75}  customLabel='75'/>
        </div>

      </div>
        </div>


      </div>
    </ReactModal>
  );
}
