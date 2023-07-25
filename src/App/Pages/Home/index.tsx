import { useState } from "react";
import Logo from "../../Components/Logo";
import PokemonCard, { PokemonProps } from "../../Components/PokemonCard";
import styles from "./styles.module.scss";
import PokemonModal from "../../Components/PokemonModal";
import React from "react";
import axios from "axios";

export default function HomePage() {
  const [openModal, setOpenModal] = useState("");
  const [pokemons2, setPokemons2] = useState<PokemonProps[]>([]);


  React.useEffect(() => {
    axios.get("http://localhost:8080/pokeada/pokemon").then((response) => {
      setPokemons2(response.data);
      console.log(pokemons2);
    });
  }, []);

  return (
    <>
    <PokemonModal />
      <div className={styles.background}>
        <div className={styles.container}>
          <div>
            <div className={styles.topWrapper}>
              <div className={styles.headerWrapper}>
                <Logo />
              </div>

              <div className={styles.filterWrapper}>
                <input placeholder="Nome do pokemon" />
                <input placeholder="Tipo de pokemon" />
                <h1>Pokémons: 100</h1>
              </div>
            </div>
            <div className={styles.pokemonsWrapper}>
              {pokemons2.map((item) => {
                return (
                  <PokemonCard
                    onClick={() => setOpenModal(item.id)}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    type={item.type}
                    key={item.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
