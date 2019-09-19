import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

function ItemDetail(props) {

  const [item, setItem] = useState({
    images: {},
    ratings: {}
  })

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
      <h1>{item.name}</h1>
      <h2>{item.type}</h2>
      <ul>
        <li>avgStars: {item.ratings.avgStars}</li>
        <li>totalPoints: {item.ratings.totalPoints}</li>
        <li>numberVotes: {item.ratings.numberVotes}</li>
      </ul>
      <img src={item.images.information} />
    </div>
  );
}

export default ItemDetail;
