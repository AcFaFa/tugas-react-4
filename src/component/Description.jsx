import React from "react";
import { useState } from "react";

const Description = (props) => {
  const [fill, setfill] = useState("-");
  const showDescription = () => {
    fill == "-"
      ? setfill(`Name :  ${props.produkName} and Price : ${props.produkPrice}`)
      : setfill("-");
  };

  return (
    <div>
      <p>{fill}</p>
      <button onClick={() => showDescription()}>Description</button>
    </div>
  );
};

export default Description;
