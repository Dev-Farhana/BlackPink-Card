import React from 'react';

const Card = ({name,image, profession, index}) => {
  
    return (
    <div className='Card'>
        <img src={image}  />
            <h2> {name} </h2>
            <p> {profession} </p>
            <p>"BlackPink" </p>
     </div>
  )
}

export default Card;