import cards from '../datas/data'
import { useParams } from "react-router-dom"
import { useState } from 'react'

import Carrousel from "../components/Carrousel"

import React from 'react'
import '../style/Card.scss';


function Card() {

    const id = useParams();
    const cardId = cards.find(cardsFlat => cardsFlat.id === id.id);



    const [bool, setBool] = useState(false)



    const handleDropdown = (e) => {
        setBool(!bool)
    }

    return (
        <main>
            <section className="fiche">
                <Carrousel card={cardId.pictures} />
            </section>

            <div className="Name-City-Note-Flag-Icone">
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
                        <span className="nom-du proprio">{cardId.host.name}</span>
                        <img src={cardId.host.picture} alt="hôte" />
                    </div>

                </div>
                <div className="equipement-description">
                    <span onClick={handleDropdown}>Description</span>
                    {bool && <><div className="description">
                        <p className="name-du-proprietaire"> texte aleatoire</p>
                    </div>
                        <div className="equipement">texte aleatoire
                        </div></>}

                </div>
            </div>
        </main>

    )

}


export default Card