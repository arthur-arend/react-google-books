import React from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";

import { useBooks } from "../../contexts/books";
import "./styles.scss";

function Favorites() {
  const { favBooks } = useBooks();

  return (
    <div className="favorites__container">
      <Header title={"Favoritos"} />
      <h1>Minha estante</h1>
      <div className="favorites__content">
        {favBooks.map((fav) => {
          return (
            <div className="card__wrapper">
              <Card key={fav.id} props={fav} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
