import React from 'react'
import { Link } from 'react-router-dom'
import Pictures from '../../Ressources/Images/small_icon.png'
import Picture from '../../Ressources/Images/picture.PNG'
import './General.css'

function General() {
  return (
    <div className='general-container'>
        <div className='requis'>
                <div>
                    <h4>Pré-requis</h4>
                    <p id='pay-p'>Pour utiliser l’API Colowso-Pay, vous devriez détenir une carte marchande de<br/> Colow-so. Pour en faire la demande, veuillez cliquer sur le lien suivant: site web Colow-so.<br/> Un marchand peut utiliser l’API Colowso-Pay pour permettre au visiteur de sa plateforme de<br/> commerce d’effectuer des paiements en utilisant la carte Colowso. Pour cela, le marchand aura besoin <br/>des informations d’identifications suivantes: client_key et client_token. Le marchand peut demander<br/> les informations d’identifications </p>
                </div>
                <div id='picture1'>
                    <img src={Picture} alt='pic1'/>
                </div>
            </div>
            <div id='premier'>
                <h4>Premier pas</h4>
                <p id='pay-p'>A. Connection au tableau de board marchand</p><br/>
            </div>
            <div className='paragraph-p'>
                <div>
                    <img src={Pictures} alt='icon1'/><br/>
                    <img src={Pictures} alt='icon2'/><br/>
                    <img src={Pictures} alt='icon3'/><br/>
                    <img src={Pictures} alt='icon4'/><br/>
                    <img src={Pictures} alt='icon5'/><br/>
                    <img src={Pictures} alt='icon6'/>
                </div>
                <div id='my-para'>
                    <p id='pay-p'>Cliquer sur le lien suivant pour aller sur le <Link to=''>Tableau de bord marchand.</Link><br/>
                    Si vous détenez un compte utilisateur, veuillez utiliser votre nom d’utilisateur et mot de passe pour vous connecter et ignorez les étapes ci-dessous.<br/>
                    Si vous ne détenez pas un compte utilisateur, veuillez suivre les étapes suivantes en cliquant sur Créer un compte.<br/>
                    Par la suite, veuillez remplir le formulaire d’inscription en utilisant votre numéro de carte.<br/>
                    Cliquer sur Créer. Ensuite,vous recevrez un code de confirmation sur le numéro de téléphone lié à la carte.<br/>
                    Finalement, entrer le code de confirmation et Confirmer.
                    </p>
                </div>
            </div>     
            <div className='last-container'>
                <h4 id='info'>B. Informations d’identification pour l’API Colwoso-Pay</h4>
                <div className='last-para-container'>
                <div id='my-pic'>
                    <img src={Pictures} alt='picture1'/><br/><br/><br/>
                    <img src={Pictures} alt='picture2'/>
                </div>
                <div id='paragraphs'>
                    <p>Premièrement, veuillez vous connecter à votre Tableau de bord marchand.<br/> Si vous ne détenez pas un compte utilisateur, veuillez suivre les instructions de l’étape A.</p>
                    <p>Cliquez sur configuration dans le menu de gauche.</p>
                </div>
                </div>
            </div>     
    </div>
  )
}

export default General