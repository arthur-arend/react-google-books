import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../../components/Card";
import Header from "../../components/Header";

import { useBooks } from "../../contexts/books";

import "./styles.scss";
import api from "../../services/api";

const Home = () => {
  const [pagination, setPagination] = useState(0);
  const { books, setBooks, searchField, setSearchField, favBooks } = useBooks();
  const history = useHistory();

  useEffect(() => {
    if (books) {
      searchBooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const searchBooks = () => {
    if (searchField) {
      api
        .get(`?q=${searchField}&startIndex=${pagination}&maxResults=9`)
        .then((res) => {
          if (res.data.items || res.data.items > 0) {
            setBooks(res.data.items);
          } else {
            alert("Não foram encontrados Livros para a pesquisa");
          }
        })
        .catch((error) => {
          alert("Ocorreu um erro ao buscar o livro");
        });
    }
  };

  const changePagination = (control) => {
    if (books) {
      if (control === -1 && pagination > 0) {
        setPagination(pagination - 5);
      } else if (control === 1) {
        setPagination(pagination + 5);
      }
    }
  };

  const goToFavorites = () => {
    history.push("/favorites");
  };

  return (
    <div className="home__content">
      <Header title={"Home"} />
      <div className="search__bar">
        <h1>Biblioteca Online</h1>
        <input
          type="text"
          value={searchField}
          placeholder="Pesquisar Livro"
          className="search__bar--input"
          onChange={(e) => setSearchField(e.target.value)}
        />
        <button
          type="button"
          className="search__bar--button"
          onClick={() => searchBooks()}
        >
          Buscar
        </button>
        <button
          type="button"
          className="search__bar--fav"
          onClick={goToFavorites}
        >
          Favoritos
        </button>
      </div>
      <div className="result__content">
        {books !== undefined
          ? books.map((book) => {
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
          Previus
        </button>
        {pagination + 1}
        <button type="button" onClick={() => changePagination(1)}>
          Next
        </button>
      </nav>
    </div>
  );
};

export default Home;
