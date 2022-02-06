import React from "react";
import { HeroesList } from "../components/Heroes/HeroesList";

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Screen</h1>
      <HeroesList publisher={"Marvel Comics"} />
    </div>
  );
};
