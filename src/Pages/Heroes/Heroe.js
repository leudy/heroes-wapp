import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GetHeroeById } from "../../Selectors/getHeroeById";

export const Heroe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  const _Heroe = useMemo(() => GetHeroeById(id), [id]);
  if (!_Heroe) {
    return <Navigate to={"/"} />;
  }
  // methods
  const handlersBack = () => {
    navigate(-1);
  };
  const { superhero, publisher, first_appearance, characters, alter_ego } =
    _Heroe;
  const images = `${process.env.PUBLIC_URL}/assets/images/heroes/${id}.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__backInLeft">
        <img src={images} alt={superhero} className="img-thumbnail" />
      </div>
      <div className="col-8 ml-3 ">
        <h3>{superhero}</h3>
        <hr />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="ml-2 mt-3">Characters</h5>
        <p>{characters}</p>
        <div className="d-grid gap-2 mt-5">
          <button
            className="btn btn-outline-danger btn-block"
            onClick={handlersBack}
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};
