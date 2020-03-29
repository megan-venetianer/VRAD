import React from 'react'
import Favorites from '../Favorites/Favorites'
const FavoritesContainer = ({faves}) => {
  console.log(faves)
  return (
    <Favorites listings={faves}/>
  )
}

export default FavoritesContainer