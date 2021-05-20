import React from "react";

import "./styles.scss";

function Header({ title }) {
  console.log(title);
  return (
    <div className="header__container">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
