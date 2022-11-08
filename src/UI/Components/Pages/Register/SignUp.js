import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import RegisterCard from '../../Ressources/Images/cardreg.PNG'

function SignUp() {
  return (
    <div className='main'>
        <div className='form-container'>
            <div className='col-1'>
            <div id='lnk'><Link to='/'>Back to Home</Link></div><br/>
                <img src={RegisterCard} alt='register' id='register-crd'/>
            </div>
            <div className='col-2'>
                
                <div>
                    <h2>Créer un Compte</h2>
                </div>
                <div>
                    <form className=''>
                        <label>Nom</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>Nom de Famille</label><br/>
                        <input type='text' placeholder='Nom' id='inputs'/>&nbsp;&nbsp;
                        <input type='text' placeholder='Nom de Famille' id='inputs'/><br/>
                        <label>Numéro de téléphone</label><br/>
                        <input type='text' placeholder='Numéro de téléphone' id='frm-inputs1'/><br/>
                        <label>Addresse e-mail</label><br/>
                        <input type='email' placeholder='Address e-mail' id='frm-inputs'/><br/>
                        <label>Mot de passe</label><br/>
                        <input type='password' placeholder='Mot de passe' id='frm-inputs' /><br/>
                        <p><input type='checkbox' /> En m'inscrivant, j'accepte les termes et conditions</p>
                        <button id='register-btn'>S'inscrire</button>
                        <p>Vous avez déjà un compte? <Link>S'identifier</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp