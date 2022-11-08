import React from 'react'
import './Recurrent.css'
import Client from '../../Ressources/Images/client.png'
import Screenshot from '../../Ressources/Images/Screenshot.png'

function Recurrent() {
  return (
    <div className='container-recurrent'>
        <div className='top'>
            <h4>Pré-requis</h4>
            <p id='paragraph1'>Si vous ne détenez pas un client_key.<br/>
            et client_token, veuillez visiter la section générale
            </p>
            <h4>Premier pas</h4>
            <h5>A. Flux d'appel pour éffectuer un paiement</h5>
        </div>
        <div className='bottom'>
            <div>
                <img src={Client} alt='client' id='clt1'/>
            </div><br/>
            <div>
                <img src={Screenshot} alt='shot' id='shot'/>
            </div>
        </div>
    </div>
  )
}

export default Recurrent;