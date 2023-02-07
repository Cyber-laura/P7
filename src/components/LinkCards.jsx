import { Link } from 'react-router-dom'

import '../style/components/_LinkCards.scss';

function Card(cards) {
    return (
        <Link to={`/card/${cards.id}`}>
            <div className='cards-flat'>
                <img src={cards.imageURL} alt={cards.title} />
                <p>{cards.title}</p>
            </div>
        </Link>
    )
}
export default Card;