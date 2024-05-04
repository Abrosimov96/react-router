import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr} from './pages/Adidas';


export const Model = () => {
    const {id} = useParams()
    if (!id) return <div>MODEL</div>
    const sneaker = adidasArr.find(a => a.id === +id)
    return (

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
            {
                sneaker
                    ? <>
                        <h2>{sneaker.model}</h2>
                        <img style={{width: '500px', height: '500px', objectFit: 'cover'}} src={sneaker.picture}
                             alt={sneaker.model}/>
                        <div>{sneaker.collection}</div>
                        <div>{sneaker.price}</div>
                    </>
                    :
                    <div>Model is not found!</div>
            }

        </div>
    )
        ;
};