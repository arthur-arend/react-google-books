import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState();
  const [favBooks, setFavBooks] = useState([]);
  const [searchField, setSearchField] = useState("");

  // useEffect(() => {
  //   if (books) {
  //     const getBooks = () => {
  //       api.get(`?q=${searchField}`).then((res) => {
  //         setBooks(res.data.items);
  //       });
  //     };
  //   }
  // }, [searchField]);

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        searchField,
        setSearchField,
        favBooks,
        setFavBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BooksContext);

  if (!context) throw new Error("useBooks must be used within a BooksContext.");

  const {
    books,
    setBooks,
    searchField,
    setSearchField,
    favBooks,
    setFavBooks,
  } = context;

  return {
    books,
    setBooks,
    searchField,
    setSearchField,
    favBooks,
    setFavBooks,
  };
};

BooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
