import React from "react";
import { useState } from "react";

//for number 5b
const Like = () => {
  const [like, setlike] = useState("Like");

  const change = () => {
    like == "Like" ? setlike("Not Like") : setlike("Like");
  };
  return <button onClick={() => change()}>{like}</button>;
};

export default Like;
