import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = () => {

  // recibe el id del heroe gracias a useParams
  const { heroeId } = useParams();

  //Encuentra el heroe gracias al id que recibe
  const hero = getHeroById(heroeId);

  //Si no encuentra un heroe, Navigate lo redirigue a la pantalla principal
  if (!hero) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <h1>HeroScreen</h1>
      <p>
        {hero.superhero}
      </p>
    </div>
  )
}
