import { heroes } from "../data/db";
export const GetHeroesByName = (name = "") => {
  name = name.toLowerCase();
  return heroes.filter((h) => h.superhero.toLowerCase().includes(name));
};
