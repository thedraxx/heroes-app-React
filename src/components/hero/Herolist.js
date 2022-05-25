import React from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const Herolist = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (

                    <HeroCard hero={hero} key={hero.id} />
                ))
            }
        </div>
    )
}
