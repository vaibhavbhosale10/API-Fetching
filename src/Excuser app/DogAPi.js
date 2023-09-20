import React, { useState } from "react";
import axios from "axios";

const DoG = () => {
  const [dog, setDog] = useState({});

  const fetchDog = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDog(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={fetchDog}>Fetch a dog</button>

      <div>
        <img src={dog.message} alt="" />
      </div>
    </div>
  );
};

export default DoG;
