import React from 'react'
import './Depot.css'
import Screenshot1 from '../../Ressources/Images/Screenshot1.png';

function Depot() {
  return (
    <div className='container-depot'>
        <div className='depot-top'>
            <h4>Pré-requis</h4><br/>
            <p id='paragraph1'>Si vous ne détenez pas un client_key <br/>
                 et client_token, veuillez visiter la section générale
            </p><br/>
            <p id='depot-para'>Veuillez noter que l’opération de dépôt<br/>
             s’effectue en deux étape.<br/>
             Une initiation et une validation par la suite.
            </p>
        </div><br/>
        <div className='depot-bottom'>
            <img src={Screenshot1} alt='screen' id='depot-img'/>
        </div>
    </div>
  )
}

export default Depot;