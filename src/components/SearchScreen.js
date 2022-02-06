import React, { useState } from "react";
import { useMemo } from "react/cjs/react.development";
import { useForm } from "../Hooks/useForm";
import { GetHeroesByName } from "../Selectors/getHeroesByName";
import { HeroeCard } from "./Heroes/HeroeCard";

export const SearchScreen = () => {
  const initialValue = { searchText: "" };
  const [formValues, handlerInputChange] = useForm(initialValue);
  const { searchText } = formValues;
  const filtered = useMemo(() => GetHeroesByName(searchText), [searchText]);
  const handlerSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div>
      <br />
      <div className="row">
        <div className="col-5">
          <h4>Search a Super Heroe</h4>
          <hr />
          <form onSubmit={handlerSearch}>
            <input
              type="text"
              className="searchText form-control"
              placeholder="Type a name"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handlerInputChange}
            />
            <button type="submit" className="btn btn-outline-info mt-2">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          {" "}
          <h4>Resultados:</h4>
          <hr />
          {filtered.length === 0 && (
            <div className="alert alert-info">No se encotraron resutaldos</div>
          )}
          {filtered &&
            filtered.map((f) => {
              return <HeroeCard key={f.id} {...f}></HeroeCard>;
            })}
        </div>
      </div>
    </div>
  );
};
