import React from "react";

import { BooksProvider } from "./books";

export const AppProvider = (children) => {
  return <BooksProvider>{children}</BooksProvider>;
};
