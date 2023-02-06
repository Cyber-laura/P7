import etoile from "../assets/etoile.png"
import etoileVide from "../assets/etoileVide.png"
import React, { useState, useEffect } from 'react';

import "../style/components/_Rate.scss"

const Rate = ({ rating }) => {
    console.log(rating);
    const [starArray, setStarArray] = useState(Array(5).fill(0));


    useEffect(() => {
        setStarArray(Array(5).fill(0));
        for (let i = 0; i < rating; i++) {
            setStarArray(prevState => {
                prevState[i] = 1;
                return [...prevState];
            });
        }
    }, [rating]);

    return (
        <div className='container-rate'>
            {starArray.map((star, index) => {
                return (
                    <img
                        key={index}
                        src={star ? etoile : etoileVide}
                        alt='star'
                        className='star'
                    />
                );
            })}
        </div>
    );
};

export default Rate;
