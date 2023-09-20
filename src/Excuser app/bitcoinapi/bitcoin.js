import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bit.css"; // Import the CSS file for card styles
import { Pagination } from "@mui/material";

const Bitcoin = () => {
  const [bitdata, setBitdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Set the number of cards per page

  useEffect(() => {
    const FetchBitCoin = async () => {
      try {
        const response = await axios.get(
          "https://api.coinstats.app/public/v1/coins?skip=0"
        );
        // Store the fetched data in the component's state
        setBitdata(response.data.coins);
      } catch (error) {
        console.log(error);
      }
    };
    FetchBitCoin();
  }, []); // Adding an empty dependency array to ensure the effect runs only once on component mount.

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h2>Bitcoin Information</h2>

      <input
        style={{ width: "20%" }}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search coins..."
      />

      <div
        className="bitcoin-cards-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "space-between",
          marginTop: "30px",
        }}
      >
        {bitdata.length > 0 ? (
          bitdata
            .filter((coin) =>
              coin.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) // Slice the array based on the current page number
            .map((coin) => (
              <div key={coin.id} className="card">
                <div className="card-border-top"></div>
                <div className="img">
                  <img src={coin.icon} alt={coin.name} />
                </div>
                <span>Name: {coin.name}</span>
                <span>Rank: {coin.rank}</span>
                <span>Price: {coin.price}</span>
                <p className="job">{coin.symbol}</p>
                {/* You can add more information here based on the coin data */}
                <a href={coin.exp} target="_blank" rel="noopener noreferrer">
                  More
                </a>
              </div>
            ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Pagination
        style={{ marginLeft: "500px" }}
        count={Math.ceil(
          bitdata.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).length / itemsPerPage
        )}
        page={currentPage}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default Bitcoin;
