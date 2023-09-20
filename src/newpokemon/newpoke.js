import React, { useEffect, useState } from "react";
import axios from "axios";

const NewPoke = () => {
  const [newpoke, setNewPoke] = useState([]);

  const FetchNew = async () => {
    try {
      const response = await axios.get(
        "https://api.pokemontcg.io/v2/cards?page=1&pageSize=10"
      );
      console.log("pokemon dataaaa", response.data);
      setNewPoke(response.data.data); // Use response.data.data instead of response.data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchNew();
  }, []); // Provide an empty dependency array

  // Use curly braces to wrap the content inside the map function and return the JSX
  if (newpoke.length > 0) {
    return newpoke.map((pokemon) => (
      <div key={pokemon.id}>
        <p>{pokemon.id}</p> {/* Use pokemon.id instead of pokemon.data.id */}
      </div>
    ));
  } else {
    return <p>loading...</p>;
  }
};

export default NewPoke;
