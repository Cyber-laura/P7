import React, { useState } from 'react'

import vectorLeft from "../assets/VectorLeft.png"
import vectorRight from "../assets/VectorRight.png"
import '../style/Carrousel.scss';

function Carrousel({ card }) {

    let [pictures, setPictures] = useState(0);
    let numberOfImages = card.length;

    const handleNextDiapo = () => {
        if (pictures === numberOfImages - 1) {
            setPictures(numberOfImages = 0);
        } else {
            setPictures(pictures + 1);
        }
    }
    const handlePreviousDiapo = () => {
        if (pictures === 0) {
            setPictures(numberOfImages - 1);
        } else {
            setPictures(pictures - 1);
        }
    }


    return (
        <div className="carrousel">
            {
                numberOfImages > 1 && <img className="vector-left" src={vectorLeft} alt="" onClick={handleNextDiapo} />
            }
            {
                card.map((elem, index) => {
                    return (
                        <img key={index} src={elem} className={index === pictures ? 'carrousel-img-actif' : 'carrousel-img'} alt="" />
                    )
                })
            }
            {
                numberOfImages > 1 && <img className="vector-right" src={vectorRight} alt="" onClick={handlePreviousDiapo} />
            }

        </div>
    )

}

export default Carrousel;
