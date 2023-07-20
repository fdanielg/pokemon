import Image from "next/image";
import styles from "./styles.module.scss";

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
  return (
    <div onClick={onClick} className={styles.container}>
      <div className={styles.wrapperImage}>
        <Image width={110} height={110} alt={name} src={image} />
      </div>

      <h5>#{id}</h5>

      <div className={styles.wrapperBottom}>
        <h1>{name}</h1>
        <h4>{type}</h4>
      </div>
    </div>
  );
}
