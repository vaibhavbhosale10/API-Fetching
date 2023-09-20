import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Pagination, Stack } from "@mui/material";
import { MoveLeft, MoveRight } from "lucide-react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PokemonAPI = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const pokemonData = response.data.results;
        setPokemons(pokemonData);
        console.log(pokemons);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemons();
  }, []);

  // Function to handle page change
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page when searching
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter pokemons based on search term
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current pokemons for the current page
  const currentPokemons = filteredPokemons.slice(startIndex, endIndex);

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Pokemon..."
      />

      {/* Display Pokemons */}
      {currentPokemons.map((pokemon, index) => (
        <div key={index}>
          <h2>Name: {pokemon.name}</h2>
          <p>URL: {pokemon.url}</p>
        </div>
      ))}

      {/* Pagination Component */}
      <Stack spacing={2} direction="row" justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(filteredPokemons.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
          showFirstButton
          showLastButton
          nextIcon={<MoveLeft />}
          prevIcon={<MoveRight />}
        />
      </Stack>
    </div>
  );
};

export default PokemonAPI;
