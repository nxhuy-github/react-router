import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

function ItemDetail(props) {

  const [item, setItem] = useState({})

  useEffect(() => {
    console.log(props.match) // 'match' is a prop
    fetchItem()
  }, [])

  const fetchItem = async () => {
    const detail = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?id=${props.match.params.id}`)
    const data = await detail.json()
    console.log(data)
    setItem(data)
  }
  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;
