import Image from "next/image";
import styles from "./styles.module.scss";
import { useState } from "react";

export interface PokemonProps {
  name: string;
  type: string;
  id: string;
  image: string;
  onClick?: () => void;
}

export default function PokemonCard({
  name,
  type,
  id,
  image,
  onClick,
}: PokemonProps) {
  const [selectedColor, setSelectedColor] = useState("");

  switch (type) {
    case "dragon":
      setSelectedColor("#9c1bba ");
    case "ghost":
      setSelectedColor("#e7f1de ");
    case "normal":
      setSelectedColor("#000000");
    case "poison":
      setSelectedColor("#745f64 ");
    case "grass":
      setSelectedColor("#64e410 ");
    case "psychic":
      setSelectedColor("#e9ad0b");
    case "fighting":
      setSelectedColor("#293b80 ");
    case "electric":
      setSelectedColor("#e0e21a");
    case "ice":
      setSelectedColor("#96f2dc  ");
    case "fire":
      setSelectedColor("#ff0011");
    case "bug":
      setSelectedColor("#8cacad");
    case "ground":
      setSelectedColor("#756521 ");
    case "rock":
      setSelectedColor("#cacaca");
    case "water":
      setSelectedColor("#96f2dc");
    case "fairy":
      setSelectedColor("#f391a0");
      break;
  }
  return (
    <div onClick={onClick} className={styles.container}>
      <div className={styles.wrapperImage}>
        <Image width={110} height={110} alt={name} src={image} />
      </div>

      <h5>#{id}</h5>

      <div className={styles.wrapperBottom}>
        <h1>{name}</h1>
        <h4 style={{ color: selectedColor }}>{type}</h4>
      </div>
    </div>
  );
}
