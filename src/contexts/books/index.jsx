import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// import { Container } from './styles';
import api from "../../services/api";

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const getBooks = () => {
      api.get(`?q=${searchField}`).then((res) => {
        setBooks(res.data.items);
      });
    };
  }, [searchField]);

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        searchField,
        setSearchField,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BooksContext);

  if (!context) throw new Error("useBooks must be used within a BooksContext.");

  const { books, setBooks, searchField, setSearchField } = context;

  return {
    books,
    setBooks,
    searchField,
    setSearchField,
  };
};

BooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
