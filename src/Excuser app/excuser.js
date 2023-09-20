import React, { useState } from "react";
import axios from "axios";

const Excuser = () => {
  const [family, setFamily] = useState([]);

  const fetchFamily = async () => {
    try {
      const response = await axios.get(
        "https://excuser-three.vercel.app/v1/excuse/family/"
      );
      setFamily(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // This console.log will show the updated family state whenever it changes
  // console.log("Family state:", family);

  return (
    <div>
      <button onClick={fetchFamily}>Generate a reason</button>

      <div>
        {family.map((excuse) => (
          <div key={excuse.id}>
            <h1>{excuse.excuse}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Excuser;
