import React, { useState } from 'react'

import vectorLeft from "../assets/VectorLeft.png"
import vectorRight from "../assets/VectorRight.png"
import '../style/components/Carrousel.scss';

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
            <span className="Container-Vector-left">
                {
                    numberOfImages > 1 && <img src={vectorLeft} alt="" onClick={handleNextDiapo} />
                }
            </span>
            {
                card.map((elem, index) => {
                    return (
                        <img key={index} src={elem} className={index === pictures ? 'carrousel-img-actif' : 'carrousel-img'} alt="" />
                    )
                })
            }
            <span className="Container-Vector-right">
                {
                    numberOfImages > 1 && <img src={vectorRight} alt="" onClick={handlePreviousDiapo} />
                }
            </span>

        </div>
    )

}

export default Carrousel;
