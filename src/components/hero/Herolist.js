import React from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroByPublisher'

export const Herolist = ({publisher}) => {
  
    const heroes = getHeroesByPublisher(publisher);
  
    return (
    <>
        <h1>Herolist - {publisher}</h1>
        <ul>
            {
                heroes.map(hero => (
                    <li key={ hero.id  } >
                        {hero.superhero}
                    </li>
                ) )
            }
            <li>

            </li>
        </ul>
    </>
  )
}
