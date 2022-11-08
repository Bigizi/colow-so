import React from 'react'
import './paiement.css'
import Client from '../../Ressources/Images/client.png'
import Screen1 from '../../Ressources/Images/screen1.png'
import Screen2 from '../../Ressources/Images/screen2.png'
import Screen3 from '../../Ressources/Images/screen3.png'
import Screen4 from '../../Ressources/Images/screen4.png'

function Paiement() {
  return (
    <div className='paiement-container'>
        <div className='paie-top'>
            <h4>Pré-requis</h4>
            <p id='paragraph1'>Si vous ne détenez pas un client_key.<br/>
                et client_token, veuillez visiter la section générale
            </p>
            <h4>Premier pas</h4>
            <h5>A. Flux d'appel pour éffectuer un paiement</h5>
        </div><br/>
        <div className='screenshot'>
            <div>
                <img src={Client} alt='client' id='clt'/>
            </div><br/>
            <div>
                <img src={Screen1} alt='screen1' id='all-screen'/>
            </div><br/>
            <div>
                <h5>B.Exemple d'implemenation en PHP</h5>
                <img src={Screen2} alt='screen2' id='all-screen'/>
            </div><br/>
            <div>
                <img src={Screen3} alt='screen3' id='all-screen'/>
            </div><br/>
            <div>
                <img src={Screen4} alt='screen4' id='all-screen'/>
            </div>
        </div>
        
    </div>
  )
}

export default Paiement;