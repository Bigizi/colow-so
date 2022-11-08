import React from 'react';
import './App.css';
import Landing from './UI/Components/Pages/LandingPage/Landing';
import {Routes, Route} from 'react-router-dom'
import SignUp from './UI/Components/Pages/Register/SignUp';
import AskCard from './UI/Components/Pages/Yourcards/AskCard';
import Payment from './UI/Components/Pages/Payment/Payment';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/ask' element={<AskCard/>} />
          <Route path='/Api-paiement' element={<Payment/>} />
          <Route path='/Api-paiement/:page' element={<Payment/>} />
        </Routes> 
    </div>
  );
}

export default App;
