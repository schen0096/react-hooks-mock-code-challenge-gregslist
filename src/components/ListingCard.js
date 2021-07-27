import React, { useState } from "react";

function ListingCard({deleteItem, item:{id, description, image, location}}) {

  const [ favorite, setFavorite ] = useState(false)

  function handleFavorite(){
    setFavorite(!favorite)
  }

  function handleDeleteItem(){
    fetch(`http://localhost:6001/listings/${id}`, {method:'DELETE'})
    deleteItem(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active"
          onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite"
          onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete"
        onClick = {handleDeleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
