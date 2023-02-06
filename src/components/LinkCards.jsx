import '../style/components/LinkCards.scss';

import { Link } from 'react-router-dom'

function Card(cards) {
    return (
        <Link to={`/card/${cards.id}`}>
            <div className='cards-flat'>
                <img src={cards.imageURL} alt={cards.title} />
                <p className='cards-flat-title'>{cards.title}</p>
            </div>
        </Link>
    )
}
export default Card