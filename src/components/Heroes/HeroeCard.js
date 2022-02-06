import React from "react";
import { Link } from "react-router-dom";

export const HeroeCard = ({
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  id,
}) => {
  const imagesuri = `${process.env.PUBLIC_URL}/assets/images/heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-glutter">
          <div className="col-4 ">
            <img src={imagesuri} className="card-img-top " alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{first_appearance}</p>
              <p className="text-muted">{characters}</p>
              <p className="text-muted">{publisher}</p>
              <Link to={`/heroe/${id}`}>Ver mas</Link>
            </div>
          </div>

          {/* <ul className="list-group list-group-flush">
            <li className="list-group-item">{publisher}</li>
            <li className="list-group-item">{alter_ego}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              {characters}
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
