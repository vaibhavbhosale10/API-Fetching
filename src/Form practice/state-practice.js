import { useState } from "react";

const FormData = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>{text}</h1>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};

export default FormData;
