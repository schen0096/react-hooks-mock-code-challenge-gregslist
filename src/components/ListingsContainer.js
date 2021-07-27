import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({submittedSearchState}) {

  const [ itemList, setItemList ] = useState([]) 
  const [ sortList, setSortList ] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(json => setItemList(json));
  },[]
  )

  if(!itemList){
    return(
      <h1>Loading Data</h1>
    )
  }

  const searchedItemList =
    itemList.filter(item=>{
      if (submittedSearchState.length > 0 ){
        return(
          item.description.toLowerCase().includes(submittedSearchState)
        )
      }
    })

  function DeleteItem(id){
      const newItemList = itemList.filter(item=>{
        return item.id !== id
      })
      setItemList(newItemList)
    }

  const searchedItemFunction = 
    searchedItemList.map(item=>{return(<ListingCard key={item.id} item={item} deleteItem={DeleteItem}/>)})

  const originalItemFunction = 
    itemList.map(item=>{return(<ListingCard key={item.id} item={item} deleteItem={DeleteItem}/>)})

  function handleSort(){
    setSortList(!sortList)
  }

  function sortedList(){
      const newSortedList = [...itemList].sort((a,b) => {
        if (a.description < b.description){
          return -1
        } if (a.description > b.description){
          return +1
        } else {
          return 0
        }
      })
      const sortedListFunction = newSortedList.map(item=>{return(<ListingCard key={item.id} item={item} deleteItem={DeleteItem}/>)})
      return ( sortList ? sortedListFunction : originalItemFunction )
      // return sortedListFunction
  }

  return (
    <>
      <button onClick ={handleSort} >Sort Listings</button>
      <main>
        <ul className="cards">
          { searchedItemList.length > 0 ? searchedItemFunction : sortedList() }
        </ul>
      </main>
    </>
  );
}

export default ListingsContainer;
