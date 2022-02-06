import React from "react";
import { HeroesList } from "../components/Heroes/HeroesList";

export const DCScreen = () => {
  return (
    <div>
      {" "}
      <h1>Dc screen</h1> <HeroesList publisher={"DC Comics"} />
    </div>
  );
};
