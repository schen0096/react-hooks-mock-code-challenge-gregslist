import React,{ useState } from "react";

function Search({setSubmittedSearchState}) {

  const [ search, setSearch ] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedSearchState(e.target.input.value)
    // searchFilter(
    //   e.target.value
    // )
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        name='input'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
