import React from 'react'
import Favorites from '../Favorites/Favorites'
import './FavoritesContainer.css'

const FavoritesContainer = ({faves, removeFromFavorites}) => {
  if (faves.length) {
    return (
      <div data-testid="favorites-container">
      <section className='favorites-header'>
        <h2 className='greeting'>Your favorite listings</h2>
      </section>
        <section className="favorites-container">
      {faves.map(fave => {
        return (
            <Favorites
              name={fave.name}
              area_id={fave.area_id}
              listing_id={fave.listing_id}
              remove={removeFromFavorites}
            />
        )
      })}
      </section>
      </div>
    )
  } else {
    return (
      <p>You dont have any favorites yet</p>
    )
  }
}

export default FavoritesContainer