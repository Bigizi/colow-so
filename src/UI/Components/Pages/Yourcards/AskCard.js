import React from 'react'
import './askcard.css'
import Cartes from '../../Ressources/Images/cartes.PNG'
import { Link } from 'react-router-dom'

function AskCard() {
  return (
    <div className='crd-container'>
        <div className='card-left'>
            <div>
            <img src={Cartes} alt='' id='ask-img'/>
            </div><br/><br/><br/><br/><br/><br/><br/>
            <div>
            <span>&copy;2022 colow-so </span>&nbsp;&nbsp;&nbsp;<Link id='lnk-c'>Nous Contacter</Link>
            </div>
            
        </div>

        <div className='crd-right'>
            <form>
                <label>Votre Nom</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>Votre Nom de famille</label><br/>
                <input type='text' placeholder='votre Nom' id='card-input'/>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' placeholder='Votre Nom de famille' id='card-input'/><br/>
                <label>Votre sex</label><br/>
                <div id='crd-radio'>
                <input type="radio" value="femme"></input>
                <label>Femme</label>
                <input type="radio" value="Home"></input>
                <label>Homme</label><br/>
                </div>
                <label>Votre Date de naissance</label><br/>
                <input type='date' placeholder='Votre date de naissance' id='crd-input'/><br/>
                <label>Numero de telephone</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>Votre Pays</label><br/>
                <input type='text' placeholder='votre numero de telephone' id='card-input'/>&nbsp;&nbsp;&nbsp;&nbsp;
                <select name="country" class="form-control" id='card-input1' placeholder='Votre pays'
                >
                <option value="Canada">Canada</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Mali">Mali</option>
                <option value="Senegal">Senegal</option>
                <option value="Gabon">Gabon</option>
                </select><br/>
                <label>Votre etat/province/region</label><br/>
                <input type='text' placeholder='Votre etat/province/region' id='crd-input'/><br/>
                <label>Votre Adresse et code postal</label><br/>
                <input type='text' placeholder='Addresse et code postal' id='crd-input' /><br/>
                <label>Votre Profession</label><br/>
                <input type='text' placeholder='Votre profession' id='crd-inputs'/><br/>
                <label>Votre Adresse e-mail</label><br/>
                <input type='email' placeholder='Adrese e-mail' id='crd-inputs'/><br/>
                <label>Votre Mot de passe</label><br/>
                <input type='password' placeholder='Mot de passe' id='crd-inputs'/><br/>
                <label>Confirmation du mot de passe</label><br/>
                <input type='password' placeholder='Confirmation du mot de passe' id='crd-inputs'/><br/>
                <p><input type='checkbox' /> En m'inscrivant, j'accepte les termes et conditions</p>
                <button id='crd-btn'>Continue</button>&nbsp;&nbsp;&nbsp;<Link to=''>Mot de passe oublié?</Link><br/>
                <p id='crd-p'>Vous avez déjà un compte? <Link  id='lnk-c'>S'identifier</Link></p>
                <div>
                    <Link to=''>Termes et Conditions</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to=''>Politique de confidentialité</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AskCard