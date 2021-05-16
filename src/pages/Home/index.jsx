import React, { useState } from "react";

import Card from "../../components/Card";

import "./styles.scss";
import api from "../../services/api";

function Home() {
  const [barState, setBarstate] = useState("");
  const [resultSearch, setResultSearch] = useState();

  const searchBooks = () => {
    api.get(`?q=${barState}`).then((res) => {
      setResultSearch(res.data.items);
    });
  };

  return (
    <div className="home__content">
      <div className="search__bar">
        <input
          type="text"
          placeholder="Presquisar Livro"
          className="search__bar--input"
          onChange={(e) => setBarstate(e.target.value)}
        />
        <button
          type="button"
          className="search__bar--button"
          onClick={() => searchBooks()}
        >
          Buscar
        </button>
      </div>
      <div className="result__content">
        {resultSearch !== undefined
          ? resultSearch.map((book) => <Card key={book.id} props={book} />)
          : null}
      </div>
    </div>
  );
}

export default Home;
