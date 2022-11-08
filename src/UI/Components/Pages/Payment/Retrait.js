import React from 'react'
import './Retrait.css'
import Screenshot2 from '../../Ressources/Images/Screenshot2.png'

function Retrait() {
  return (
    <div className='retrait-container'>
        <div className='retrait-top'>
            <h4>Pré-requis</h4>
            <p id='paragraph1'>Si vous ne détenez pas un client_key<br/>
            et client_token, veuillez visiter la section générale
            </p>
            <p id='retrait-para'>Veuillez noter que l’opération de rétrait<br/>
               s’effectue en deux étape. Une initiation et une<br/>
               validation par la suite.
            </p>
        </div>
        <div className='retrait-bottom'>
            <img src={Screenshot2} alt='screen1' id='retrait-img'/>
        </div>
    </div>
  )
}

export default Retrait;