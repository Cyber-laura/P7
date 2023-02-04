import '../style/Banner.scss';
import React from 'react';

function Banner({ image, text }) {
    return (
        <section className="Banner-box">
            <img src={image} alt="Banniere" />
            <h1>{text}</h1>
        </section>
    );
}
export default Banner