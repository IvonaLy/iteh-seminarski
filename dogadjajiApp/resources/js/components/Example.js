import React from 'react';
import ReactDOM from 'react-dom';
 
 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Kontakt from './Kontakt';
import { useState } from 'react';
import Dogadjaji from './Dogadjaji';
import Omiljeni from './Omiljeni';
import Login from './Login';

function Example() {
    const[token,setToken] = useState();


  const [dogadjaji] = useState([
    {
      id: 1,
      image: "https://belgrade-beat.rs/photos/activities/3423/t-1673860579.jpg",
      naziv: "Okupacija Srbije",    
      opis:  "Posetite tribinu i konferenciju za štampu pod nazivom Okupacija Srbije ",
      vreme: "13:00",
      mesto: "Pres centar UNS",
      cena_ulaznice: 1000,
      omiljen:0
    },
    {
      id: 2,
      image: "https://belgrade-beat.rs/photos/activities/505/t-1515769313.jpg",
      naziv: "Plivanje za Casni krst",    
      opis:  "Tradicionalna verska manifestacija obeležavanje praznika Krstovdan i Bogojavljenje ",
      vreme: "12:00",
      mesto: "Zemunski kej",
      cena_ulaznice: 0,
      omiljen:0

    },
    {
      id: 3,
      image: "https://belgrade-beat.rs/photos/activities/3353/t-1669822980.jpg",
      naziv: "Benito Roman",    
      opis:  "Izložba Veličanstvena decenija. Ustav u praksi. Fotografije Benita Romana, 1975 - 1985.",
      vreme: "13:00",
      mesto: "Institut Servantes",
      cena_ulaznice:300,
      omiljen:0


    },
    {
      id: 4,
      image: "https://belgrade-beat.rs/photos/activities/3383/t-1671250452.jpg",
      naziv: "Zimski festival na Tasmajdanu",    
      opis:  "Bogat programmom za sve generacije ",
      vreme: "10:00",
      mesto: "Park Tasmajdan",
      cena_ulaznice:400,
      omiljen:0


    },
  ])
  const [omiljeni, setOmiljeni] = useState([]);

  function osvezi() {
    let fav = dogadjaji.filter((p) => p.omiljen > 0);
    setOmiljeni (fav);
    console.log(omiljeni)
  }
  function dodaj( id) {
    console.log(id)
   
    dogadjaji.forEach((d) => {
      if (d.id === id) {
        d.omiljen=1;
        console.log(d)
      }
    });
    osvezi();

  }
  function addToken(auth_token){
    setToken(auth_token);
  }
  return (
    <div className="App">
       <BrowserRouter  >
      <Navbar token={token} ></Navbar>
      <Routes>
        <Route path="/" element={<Login addToken={addToken}></Login>}></Route>
        <Route path="/dogadjaji" element={<Dogadjaji dogadjaji={dogadjaji} dodaj={dodaj}></Dogadjaji>}></Route>
        <Route path="/omiljeni" element={<Omiljeni dogadjaji={omiljeni} ></Omiljeni>}></Route>
         
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
        
      </Routes>
        <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}
export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
