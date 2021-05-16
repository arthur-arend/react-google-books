import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

function Card(props) {
  const hystory = useHistory();

  const handleClickCard = (id) => {
    hystory.push(`/detail/${id}`);
  };

  return (
    <div
      className="card__content"
      onClick={() => handleClickCard(props.props.id)}
    >
      <img
        className="card__content--img"
        src={`${props.props.volumeInfo.imageLinks.smallThumbnail}`}
        alt="Capa do Livro"
      />
      <h1 className="card__content--title">
        Título: {props.props.volumeInfo.title}
      </h1>
      {props.props.volumeInfo.description ? (
        <p className="card__content--description">
          Descrição: {props.props.volumeInfo.description}
        </p>
      ) : null}
      <p className="card__content--date">
        Lançamento: {props.props.volumeInfo.publishedDate}
      </p>
    </div>
  );
}

export default Card;
