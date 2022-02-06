import React from "react";
import { useMemo } from "react/cjs/react.development";
import { getHeroesByPublisher } from "../../Selectors/getDataByPublisherId";
import { HeroeCard } from "./HeroeCard";

export const HeroesList = (publisher) => {
  const data = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div>
      <hr></hr>
      <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
        {data.map((h) => (
          <HeroeCard key={h.id} {...h} />
        ))}
      </div>
    </div>
  );
};
