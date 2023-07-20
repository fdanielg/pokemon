import { useState } from "react";
import Logo from "../../Components/Logo";
import PokemonCard, { PokemonProps } from "../../Components/PokemonCard";
import styles from "./styles.module.scss";

export default function HomePage() {
  const [openModal, setOpenModal] = useState("");
  const pokemons: PokemonProps[] = [
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },

    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: "1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: "2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      name: "Ivysaur",
      type: "Grass",
    },
  ];

  return (
    <>
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
              {pokemons.map((item) => {
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
