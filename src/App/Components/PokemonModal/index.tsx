import React from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

interface Props {
  name: string;
  id: string;
  image: string;
}

export default function PokemonModal({ name, id, image }: Props) {
  return (
    <ReactModal overlayClassName={styles.overlay} className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image width={200} height={200} src={image} alt="pô que mão" />
        </div>

        <div className={styles.name}>
          {name}
          <div className={styles.cuba}>Stats</div>
          <div className={styles.stats}>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>HP</div>
              <ProgressBar width="300px" completed={100} customLabel="100" />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>Attack</div>
              <ProgressBar width="300px" completed={53} customLabel="53" />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>Defense</div>
              <ProgressBar width="300px" completed={70} customLabel="70" />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>Sp. attack</div>
              <ProgressBar width="300px" completed={40} customLabel="40" />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}> Sp. defense</div>
              <ProgressBar width="300px" completed={60} customLabel="60" />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>Speed</div>
              <ProgressBar width="300px" completed={75} customLabel="75" />
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
