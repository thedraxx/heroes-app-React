import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const Herolist = ({ publisher }) => {

    // envia el publisher a la funcion getHeroesByPublisher para obtener los heroes de esta editorial
    // Se agrego el useMemo para que solo se ejecute cuando el publisher cambie
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (

                    <HeroCard hero={hero} key={hero.id} />
                ))
            }
        </div>
    )
}
