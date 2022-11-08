import React from 'react'
import './payment.css'
import logo from '../../Ressources/Images/logo.png'
import { Link, useParams } from 'react-router-dom'
import Paiement from './Paiement'
import Recurrent from './Recurrent'
import Depot from './Depot'
import Retrait from './Retrait'
import General from './General'

function Payment() {

    const pages = {
        general: <General/>,
        paiement: <Paiement/>,
        recurrent: <Recurrent/>,
        depot:     <Depot/>,
        retrait:   <Retrait/>
    }

    let {page} = useParams();
    const currentPage = pages[page] ?? <General/>

  return (
    <div className='payment-container'>
        <div className='payment-top'>
            <div>
                <nav className='navigations'>
                    <div>
                        <img src={logo} alt="logo" id='logo'/>
                    </div>
                    <div>
                        <ul className='navigation-links'>
                            <li  id='list'><Link to='/'>Accueil</Link></li>
                            <li id='list'><Link to='/'>Solutions de paiement</Link></li>
                            <li><Link to='/Api-paiement/general' className='activee'>APIColow-so</Link></li>
                            <li id='list'><Link to='/'>Filiales</Link></li>
                            <li id='list'><Link to='/'>Contact</Link></li>
                            <li id='list'><Link to='/'>Apropos</Link></li>      
                        </ul>
                    </div>
                </nav>
                    <div className='sub-navigation'>
                        <ul className='sub-nav-links'>
                            <li><Link to='/Api-paiement/general'>General</Link></li>
                            <li><Link to='/Api-paiement/paiement'>Paiement</Link></li>
                            <li><Link to='/Api-paiement/recurrent'>Paiements récurrents</Link></li>
                            <li><Link to='/Api-paiement/depot'>Dépot</Link></li>
                            <li><Link to='/Api-paiement/retrait'>Retrait</Link></li>
                        </ul>
                    </div>
            </div>
        </div><br/>
        <div className='payment-bottom'>
            {currentPage}
        </div>
    </div>
  )
}

export default Payment