import { heroes } from "../data/db";
export const getHeroesByPublisher = ({ publisher }) => {
  // validate publisher
  const publisherList = ["DC Comics", "Marvel Comics"];
  if (!publisherList.includes(publisher)) {
    throw new Error("publisher erroneo");
  }

  return heroes.filter((c) => c.publisher === publisher);
};
