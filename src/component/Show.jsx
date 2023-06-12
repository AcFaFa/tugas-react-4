import React from "react";

//for number 5a
const Show = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt="photos"
        style={{ width: 370, height: 170, padding: 10 }}
      />
      <p>{props.produkName}</p>
    </div>
  );
};

export default Show;
