import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "../../services/api";
// import { Container } from './styles';

function Detail(props) {
  const { id } = useParams();
  const [detailBook, setDetailBook] = useState({});

  const history = useHistory();

  useEffect(() => {
    api
      .get(`/${id}`)
      .then((response) => {
        setDetailBook(response);
        console.log("ahhhhhhh", detailBook);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar o livro");
        console.log(error);
      });
    console.log("beeeeee", detailBook);
  }, []);

  function handleBack() {
    history.goBack();
  }

  return <h1>{detailBook.title}</h1>;
}

export default Detail;
