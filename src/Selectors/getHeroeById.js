import { heroes } from "../data/db";
export const GetHeroeById = (id) => {
  //   console.log(id);
  return heroes.find((c) => c.id === id);
};
