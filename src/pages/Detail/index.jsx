import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Header from "../../components/Header";

import api from "../../services/api";
import "./styles.scss";

function Detail() {
  const { id } = useParams();
  const [detailBook, setDetailBook] = useState();

  const history = useHistory();

  useEffect(() => {
    api
      .get(`/${id}`)
      .then((response) => {
        setDetailBook(response.data.volumeInfo);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar o livro");
        console.log(error);
      });
  }, [id]);

  function handleBack() {
    history.goBack();
  }

  return (
    <>
      {detailBook ? (
        <div className="detail__container">
          <Header title={"Detalhes"} />
          <div className="detail__content">
            <div className="detail__figure">
              <img
                src={`${detailBook.imageLinks.thumbnail}`}
                alt="Capa do Livro"
              />
            </div>

            <div className="detail__text-Wrapper">
              <h1>{detailBook.title}</h1>
              {detailBook.description ? (
                <p>{detailBook.description}</p>
              ) : (
                <p>Esse Livro não possuí descrição</p>
              )}
              <p>
                <strong>Data de Lançamento:</strong> {detailBook.publishedDate}
              </p>
            </div>
          </div>
          <button type="button" onClick={() => handleBack()}>
            Voltar
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
