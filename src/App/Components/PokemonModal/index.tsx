import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";

interface Props {
  id: string;
  openModal: boolean;
}

export default function PokemonModal({ id, openModal }: Props) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/pokeada/pokemon/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data)

      });
  }, [id]);

  return (
    <ReactModal
      isOpen={openModal}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            width={200}
            height={200}
            src={data?.urlImage}
            alt={data?.name}
          />
        </div>

        <div className={styles.name}>
          {data?.name}
          <div className={styles.cuba}>Stats</div>
          <div className={styles.stats}>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>HP</div>
              <ProgressBar
                width="300px"
                completed={data?.hp}
                customLabel={data?.hp}
              />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>Attack</div>
              <ProgressBar
                width="300px"
                completed={data?.attack}
                customLabel={data?.attack}
              />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>Defense</div>
              <ProgressBar
                width="300px"
                completed={data?.defense}
                customLabel={data?.defense}
              />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>Sp. attack</div>
              <ProgressBar
                width="300px"
                completed={data?.specialAttack}
                customLabel={data?.specialAttack}
              />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}> Sp. defense</div>
              <ProgressBar
                width="300px"
                completed={data?.defense}
                customLabel={data?.defense}
              />
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
              <div style={{ width: 100, textAlign: "left" }}>Speed</div>
              <ProgressBar
                width="300px"
                completed={data?.speed}
                customLabel={data?.speed}
              />
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
