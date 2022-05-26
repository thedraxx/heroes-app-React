import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { getHeroesByName } from '../selectors/getHeroByName';
import queryString from 'query-string';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // usamos query string para obtener el parametro de la url, ?q="nombreSuperheroe"
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    //SearchText va a obtenr el valor del input gracias a la url y si no existe lo pone vacio
    searchText: q,
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    //Gracias al navigate, lo que hace es redireccionar a la url con el parametro q,que contiene el nombre del superheroe
    navigate(`?q=${searchText}`);
  }

  // Envia al componente getHeroesByName el valor de q y busca los heroes que coincidan con el nombre
  // se usa useMemo para que no se vuelva a ejecutar la funcion getHeroesByName si no se cambia el valor de q
  // q cambia cuando hacemos click en el boton buscar
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  return (
    <>
      <h1> SearchScreen</h1>
      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Search a Hero'
              className='form-control'
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              className='btn btn-primary btn-block mt-2'
              type='submit'
            >
              Search...
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ? <div className='alert alert-info'> Search a Hero</div>
              : (heroesFiltered.length === 0)
              && <div className='alert alert-danger'> There are no results {q} </div>
          }


          {
            heroesFiltered.map(hero => (
              //Lo enviamos a HeroCard para que renderize el heroe que se busco
              <HeroCard
                key={hero.id}
                hero={hero}
              />
            ))
          }
        </div>
      </div>
    </>
  )
} 