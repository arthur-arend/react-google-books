import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useBooks } from "../../contexts/books";
import "./styles.scss";

function Card(props) {
  const { favBooks, setFavBooks } = useBooks();
  const [controlFavs, setControlFavs] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickCard = (e) => {
    if (true) {
      history.push(`/detail/${e}`);
    }
  };

  const handleFav = (bookData) => {
    const favs = favBooks;

    favBooks.forEach((fav) => {
      if (fav.id === props.props.id) {
        setControlFavs(false);
      }
    });

    if (true) {
      favs.push(bookData);
      setFavBooks(favs);
    }
  };

  return (
    <div className="card__content">
      <div className="card__left">
        {props.props.volumeInfo.imageLinks ? (
          <img
            className="card__left--img"
            src={`${props.props.volumeInfo.imageLinks.thumbnail}`}
            alt="Capa do Livro"
          />
        ) : (
          <p className="no-image__content">No Image</p>
        )}
      </div>
      <div className="card__right">
        <h1 className="card__content--title">
          Título: {props.props.volumeInfo.title}
        </h1>

        <p className="card__content--description">
          Descrição:{" "}
          {props.props.volumeInfo.description
            ? props.props.volumeInfo.description
            : "Este livro não possui descrição"}
        </p>

        <p className="card__content--date">
          Lançamento: {props.props.volumeInfo.publishedDate}
        </p>
        {controlFavs ? (
          <button
            type="button"
            className="fav__button"
            onClick={() => handleFav(props.props)}
          >
            Favoritar
          </button>
        ) : null}

        <button
          type="button"
          className="detail__button"
          onClick={() => handleClickCard(props.props.id)}
        >
          Detalhes
        </button>
      </div>
    </div>
  );
}

export default Card;
