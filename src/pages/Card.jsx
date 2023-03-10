import React from 'react'
import { useParams } from "react-router-dom"

import cards from '../datas/data'
import Error from '../pages/Error'
import Carrousel from "../components/Carrousel";
import Dropdown from '../components/Dropdown';
import Rate from '../components/Rate'
import '../style/pages/_Card.scss';

function Card() {

    const id = useParams();
    const cardId = cards.find(cardsFlat => cardsFlat.id === id.id);

    if (!cardId) {
        return <Error />
    }

    return (
        <>
            <section className="fiche">
                <Carrousel card={cardId.pictures} />
            </section>
            <div className="container-info-hôtes">
                <section className="section-info-hôte">
                    <div className="info-logement">
                        <h1>{cardId.title}</h1>
                        <h2>{cardId.location}</h2>
                        <div className="tag">
                            {cardId.tags.map((element, index) => {
                                return (<span key={index}>{element}</span>)
                            })
                            }
                        </div>
                    </div>
                    <div className="propriétaire-rate">
                        <div className="information-prorietaire">
                            <p className="nom-du proprio">{cardId.host.name}</p>
                            <img src={cardId.host.picture} alt="hôte" />
                        </div>
                        <div className="rate">
                            <Rate rating={cardId.rating} />
                        </div>
                    </div>
                </section>
                <div className="equipement-description">
                    <Dropdown titre="Description" description={cardId.description}></Dropdown>
                    <Dropdown titre="Equipement" description={cardId.equipments}></Dropdown>
                </div>
            </div>
        </>

    )

}
export default Card;
