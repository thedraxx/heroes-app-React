import React from 'react'
import {Herolist} from '../hero/Herolist'

export const MarvelScreen = () => {
    const publisher = 'Marvel Comics'

    return (
        <div>
            <h1>MarvelScreen</h1>
            <Herolist  publisher = {publisher} />
        </div>
    )
}
