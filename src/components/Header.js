import React from "react";
import Search from "./Search";

function Header({setSubmittedSearchState}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSubmittedSearchState={setSubmittedSearchState}/>
    </header>
  );
}

export default Header;
