import React from 'react'
import {Herolist} from '../hero/Herolist'

export const DcScreen = () => {
  const publisher = 'DC Comics'
  return (
    <div>
      <h1>DcScreen</h1>
      <Herolist  publisher = {publisher} />
    </div>
    
  )
}
