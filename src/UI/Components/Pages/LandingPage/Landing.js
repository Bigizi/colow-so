import React from 'react'
import './Landing.css'
import Cards from '../../Ressources/Images/cards.PNG'
import Phone from '../../Ressources/Images/phone.PNG'
import logo from '../../Ressources/Images/logo.png'
import Bienvenu from '../../Ressources/Images/Bienve.PNG'
import Marche from '../../Ressources/Images/marche.PNG'
import Icon1 from '../../Ressources/Images/icon1.PNG'
import Icon2 from '../../Ressources/Images/icon2.PNG'
import Phone2 from '../../Ressources/Images/phone2.PNG'
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

function Landing() {
  return (
    <div className='container'>
        <div className='container-1'>
                <nav className='navigation'>
                    <img src={logo} alt="" id='logo'/>
                    <div id='links'>
                        <ul className='nav-links'>    
                            <li className='active'><Link to=''>Accueil</Link></li>
                            <li><LinkRoll to="operation">Solutions de paiement</LinkRoll></li>
                            <li><Link to='/Api-paiement'>APIColow-so</Link></li>
                            <li><Link to='/signup'>Filiales</Link></li>
                            <li><LinkRoll to="contact" offset={-100} duration={500} >Contact</LinkRoll></li>
                            <li><LinkRoll to="last-section" offset={-100} duration={500}>Apropos</LinkRoll></li>       
                        </ul>
                    </div>    
                </nav>
                <div className='content'>
                        <div className='left'>
                            <p id='p1'>Plus qu'une carte <br/> de paiement!</p><br/>
                            <Link to='/ask'><button id='btn'>Demandez votre carte</button></Link>
                        </div>
                        <div className='right'>
                            <div>
                                <img src={Cards} alt="" />
                            </div>
                            <div>
                                <img src={Phone} alt="" />
                            </div>
                            <div>
                            </div>
                        </div>
                </div> 
        </div>
        <div className='middle'>
            <Link to='/signup'>
            <img src={Bienvenu} alt=""/>
            </Link>
        </div>
        <div className='last'>
            <img src={Marche} alt='' id='img2'/>
        </div><br/>
        <div id='operation'>
            <div>
                <h2>MA CARTE COLOW-SO</h2>
                <h3>GEREZ FACILEMENT TOUTES VOS OPERATIONS DE PAIEMENTS ET <br/> DE TRANSFERTS EN TOUTES SECURITES.</h3>
                <div id='paiement'>
                    <Link to=''>Application Colowso Pay</Link><br/>
                    <Link to=''>Application ColowsoTPE</Link><br/>
                    <Link to=''>En ligne (API de paiement) </Link><br/>
                    <Link to=''>Electronique</Link><br/>
                    <Link to=''>Paiement par SMS</Link><br/>
                    <Link to=''>Transfert Visa Direct</Link><br/>
                </div><br/>
                <div className='apps'>
                    <img src={Icon1} alt=''/>
                    <img src={Icon2} alt=''/>
                </div>
            </div>
            <div id='phone2'>
                <img src={Phone2} alt=''/>
            </div>
        </div>
        <div id='last-section'>
            <h1>A PROPOS DE NOUS</h1><br/>
            <p id='para'>Colow-so vient des mots Colow et So et signifie « la maison des cauris ». Le cauri (Colow en Bambara) était utilisé comme monnaie en Afrique et dans le reste du monde. So
             signifie maison en Bambara.</p>
             <p id='para'>Créé en 2015 au Canada par Sidy Kouyaté, Colow-so est devenue aujourd’hui une plateforme incontournable et complète en services financiers. Adaptée à la réalité africaine, elle
             apporte une solution réelle à la problématique de la bancarisation en donnant à la classe moyenne et à la base classe, accès à la Banque. Avec les technologies innovantes
             entièrement développées au Canada par la communauté, elle donne accès, à toute la population africaine, aux services financiers à bas coût.</p>
             <p id='para'>Colow-so, c’est l’expertise canadienne portée vers l’Afrique par les Africains qui ont étudié et travaillé au Canada, qui a pour but d’offrir une alternative financière de taille et de
             promouvoir la relation entre le Canada et l’Afrique.</p>
             <p id='para'>L’entreprise, régulée par l’Autorité des Marchés Financiers canadiens (AMF) et le Centre d’analyse des opérations et déclarations financières du Canada (CANAFE), est gagnante
             de plusieurs distinctions dont celle de la Fintech la plus sécuritaire au Canada en 2018. Elle dispose des normes de sécurité de l’industrie dont PCI DSS (Payment Card Industry Data Security Standard)
             et ComplyAdvantage.</p>
             <p id='para'>Président et Fondateur du Groupe Colow-so, Sidy Kouyaté possède plus de 15 ans d’expérience dans le domaine des technologies de l’information, plus particulièrement en BI et
             Data Science.</p>
             <p id='para'>Diplômé de SUPINFO Paris, expert en bases de données, analyse programmation, conception, architecture, intégration, modélisation de données et gestion de contenu.
             Ses réalisations à travers les continents sont nombreuses : Bouygues Telecom France, Carrefour France, L’Oréal France, Technip, VIARAIL Canada et Ivanhoé Cambridge.</p>
             <p id='para'>Il est aussi fondateur de wenesis de Talent immigrant au canada</p>
        </div>
        <div id='contact'>
            <div className='form1'>
                <form id='frm'>
                    <label id='last-para'>Votre nom:</label><br/>
                    <input className='input-field' type='text' /><br/>
                    <label id='last-para'>Votre email:</label><br/>
                    <input className='input-field' type='email' /><br/>
                    <label id='last-para'>Votre message:</label><br/>
                    <textarea className='input-field' type='text' /><br/>
                    <button className='submit' id='frm-btn'>Contacter</button>
                </form>
                <div className='form2'>
                    <p id='last-para'><strong>Siege au Canada Colow-so Inc.</strong><br/>1242 rue Stanley,Bureau 206,<br/> 2eme etage, Montreal, QC H3B 2s7<br/> Tel: +1 438-940-2403</p>
                </div>
            </div><br/>      
            <div className='address'>
                    <div><p id='last-para'><strong>Bureau Toronto.</strong><br/>688 Richmond St W,<br/>Toronto, ON M6J1C5,<br/>Tel: +1 289-269-2517</p></div>
                    <div><p id='last-para'><strong>Bureau Winnipeg.</strong><br/>544 Wilton Bay,<br/> Winnipeg, MB R3M 2H9<br/>Tel: +1 431-489-2421</p></div>
                    <div><p id='last-para'><strong>Bureau Edmonton.</strong><br/>215, 10205-101 Street,<br/>Edmonton, AB T5J2Y9,<br/>Tel:+1 403-912-5907</p></div>
            </div>
            <div className='footer'>
                    <div className='footer-para'>
                        <div><p>info@colow-so.com<br/>+1438-940-2403</p></div>
                        <div><p>AMF:902820<br/>CANAFE:M15935735</p></div>
                    </div>
            </div>
        </div> 
    </div>
  )
}

export default Landing;