import React from 'react';
import Spot from '../Spot/Spot';

function Rotation({name, spots}) {
  return (
    <div className='rotation-container'>
        <h2>{name}</h2>
        <ul>
            {spots.map(spot => (
                <Spot 
                    key={spot}
                    name={spot}
                />
            ))}
        </ul>
    </div>
  )
}

export default Rotation