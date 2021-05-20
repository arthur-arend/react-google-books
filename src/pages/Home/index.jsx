import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";

// import { useBooks } from "../../contexts/books";

import "./styles.scss";
import api from "../../services/api";

function Home() {
  const [barState, setBarstate] = useState("");
  const [resultSearch, setResultSearch] = useState();
  // const { books, setBooks, setSearchField } = useBooks();

  useEffect(() => {
    if (resultSearch) {
      searchBooks();
    }
    searchBooks();
  }, []);

  const searchBooks = () => {
    api
      .get(`?q=${barState}&maxResults=4`)
      .then((res) => {
        setResultSearch(res.data.items);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar o livro");
        console.log(error);
      });
  };

  return (
    <div className="home__content">
      <Header />
      <div className="search__bar">
        <h1>Pesquisador de Livros</h1>
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
