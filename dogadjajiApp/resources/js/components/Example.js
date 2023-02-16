import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
 
 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Kontakt from './Kontakt';
import { useState } from 'react';
import Dogadjaji from './Dogadjaji';
import AdminPocetna from './AdminPocetna';

import Omiljeni from './Omiljeni';
import Login from './Login';
import axios from 'axios';
 
import Dodaj from './Dodaj';
import Izmeni from './Izmeni';
import Statistike from './Statistike';
import NasDogadjaj from './NasDogadjaj';
import NagradnaIgra from './NagradnaIgra';
 
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function Example() {
    const[token,setToken] = useState();

    const [izmenaID, setIzmenaID] = useState(0); 
  const [dogadjaji,setDogadjaji] = useState([ ])
  const [karte,setKarte] = useState([ ])
 

  useEffect(() => {
    const getDogadjaji = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/dogadjaji",
          {
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
          }
        );
        setDogadjaji(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getDogadjaji();
  }, [ axiosInstance]);


  useEffect(() => {
    const getKarte = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/karte",
          {
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
          }
        );
        setKarte(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getKarte();
  }, [ axiosInstance]);

 
  function addToken(auth_token){
    setToken(auth_token);
  }
  function obrisi(id){
  
    axios
    .delete("http://127.0.0.1:8000/api/dogadjaji/"+id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
    .then((res)=>{  
        console.log(res.data);
        const token = window.sessionStorage.getItem('auth_token');d
        
        window.sessionStorage.set('auth_token',token);
         
    })
    .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      });
  }
  const[dogadjaj,setDogadjaj] = useState();

  function postaviIDZaIzmenu(id){ //fja koja vraca podatke o dogadjaju koji azuriramo
    setIzmenaID(id);

       let event = dogadjaji.filter((d)=>d.id==id);
       setDogadjaj(event[0])
  }
  const [dogadjaj2,setDogadjaj2] = useState([ ])
 
  useEffect(() => {
    const getNasDogadjaj = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/nasDogadjaj/",
          {
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
          }
        );
        console.log(res.data);
        setDogadjaj2(res.data)
      } catch (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      }
    };
    getNasDogadjaj();
  }, [ axiosInstance]);
 
  return (
    <div className="App">
       <BrowserRouter  >
      <Navbar token={token} ></Navbar>
      <Routes>
        <Route path="/" element={<Login addToken={addToken}></Login>}></Route>
        <Route path="/dogadjaji/igra" element={<NagradnaIgra ></NagradnaIgra>}></Route>

        <Route path="/dogadjaji/nas" element={<NasDogadjaj dogadjaj={dogadjaj2} ></NasDogadjaj>}></Route>
        <Route path="/dogadjaji/moji" element={<Omiljeni karte={karte} ></Omiljeni>}></Route>
        <Route path="/dogadjaji" element={<Dogadjaji dogadjaji={dogadjaji}  ></Dogadjaji>}></Route>
 
         
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>

        <Route path="/admin/stats" element={<Statistike dogadjaji={dogadjaji} karte={karte}></Statistike>}></Route>
        <Route path="/admin/izmeni" element={<Izmeni id={izmenaID} dogadjaj={dogadjaj}></Izmeni>}></Route>
        <Route path="/admin/dodaj" element={<Dodaj></Dodaj>}></Route>
        <Route path="/admin" element={<AdminPocetna dogadjaji={dogadjaji} obrisi={obrisi} setIzmeniID={postaviIDZaIzmenu}></AdminPocetna>}></Route>
      


        
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
