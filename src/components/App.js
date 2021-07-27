import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ submittedSearchState, setSubmittedSearchState ] = useState('')

  return (
    <div className="app">
      <Header setSubmittedSearchState = {setSubmittedSearchState}/>
      <ListingsContainer submittedSearchState={submittedSearchState} />
    </div>
  );
}

export default App;
