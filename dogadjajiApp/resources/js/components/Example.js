import React, { useEffect } from 'react';
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
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function Example() {
    const[token,setToken] = useState();


  const [dogadjaji,setDogadjaji] = useState([ ])
  const [omiljeni, setOmiljeni] = useState([]);


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
