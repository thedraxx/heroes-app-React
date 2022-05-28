import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { heroesImages } from '../../helpers/heroImages';
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = () => {

  // recibe el id del heroe que fue enviado desde el componente HeroCard gracias a useParams
  const { heroeId } = useParams();

  //Encuentra el heroe gracias al id que recibe, se agrego el useMemo para que solo se ejecute cuando el id cambie
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  //Si no encuentra un heroe, Navigate lo redirigue a la pantalla principal
  if (!hero) {
    return <Navigate to='/' />
  }

  // const imgPath = `/assets/${hero.id}.jpg`; // public/assets/1.jpg

  const navigate = useNavigate();

  const handleReturn = (e) => {
    e.preventDefault()
    if (hero.publisher === 'Marvel Comics') {
      navigate('/marvel')
    } else {
      navigate('/dc')
    }
  }

  return (
    <div className='row mt-5 animate__animated animate__bounceInLeft'>
      <div className='col-4 ' >
        <img
          src={heroesImages(`./${hero.id}.jpg`)}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className='col-8 animate__animated animate__bounceInRight'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b>{hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>publisher: </b>{hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance: </b>{hero.first_appearance}
          </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          regresar
        </button>

      </div>
    </div>
  )
}
