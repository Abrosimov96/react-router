import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr, SneakersItem} from './pages/Adidas';
import {pumaArr} from './pages/Puma';

type ModelType = {
    [key: string]: SneakersItem[]
}

const crossModel: ModelType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    const {model, id} = useParams()
    console.log(model, id)
    if (!id) return <div>MODEL</div>
    if (model !== 'adidas' && model !== 'puma') return <div>MODEL</div>
    const sneaker = crossModel[model].find(a => a.id === +id)
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