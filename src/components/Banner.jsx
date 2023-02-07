import React from 'react';

import '../style/components/_Banner.scss';

function Banner({ image, text }) {
    return (
        <section className='banner-box'>
            <img src={image} alt='Banniere' />
            <h1>{text}</h1>
        </section>
    );
}
export default Banner