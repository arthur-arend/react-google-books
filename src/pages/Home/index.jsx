import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";

// import { useBooks } from "../../contexts/books";

import "./styles.scss";
import api from "../../services/api";

function Home() {
  const [barState, setBarstate] = useState("");
  const [resultSearch, setResultSearch] = useState();
  const [pagination, setPagination] = useState(0);
  // const [fav, setFav] = useState([]);
  // const { books, setBooks, setSearchField } = useBooks();

  useEffect(() => {
    if (resultSearch) {
      searchBooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const searchBooks = () => {
    api
      .get(`?q=${barState}&startIndex=${pagination}&maxResults=9`)
      .then((res) => {
        if (res.data.items) {
          setResultSearch(res.data.items);
        } else {
          alert("Não foram encontrados Livros para a pesquisa");
        }
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar o livro");
        console.log(error);
      });
  };

  const changePagination = (control) => {
    if (resultSearch) {
      if (control === -1 && pagination > 0) {
        setPagination(pagination - 5);
      } else if (control === 1) {
        setPagination(pagination + 5);
      }
    }
  };

  return (
    <div className="home__content">
      <Header title={"Home"} />
      <div className="search__bar">
        <h1>Pesquisador de Livros</h1>
        <input
          type="text"
          value={barState}
          placeholder="Pesquisar Livro"
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
          ? resultSearch.map((book) => {
              return (
                <div className="card__wrapper">
                  <Card key={book.id} props={book} />
                </div>
              );
            })
          : null}
      </div>
      <nav className="navigation__content">
        <button type="button" onClick={() => changePagination(-1)}>
          Previos
        </button>
        {pagination + 1}
        <button type="button" onClick={() => changePagination(1)}>
          Next
        </button>
      </nav>
    </div>
  );
}

export default Home;
