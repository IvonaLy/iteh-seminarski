import axios from 'axios';
import { useState } from 'react';
 
 
 
 function NasDogadjaj({dogadjaj}) {

 
    return (
      <main><div className="card">
    
      <div className="card__body">
        <div className="half">
          <div className="featured_text">
            <h1>{dogadjaj.name.text}</h1>
            
            
          </div>
          <div className="image">
            <img src={dogadjaj.logo.original.url} alt=""/>
          </div>
        </div>
        <div className="half">
          <div className="description">
            <p>   {dogadjaj.description.text}</p>
          </div>
          <span className="stock"><i className="fa fa-pen"></i>JOS:  {dogadjaj.capacity} KARATA</span>
          
        </div>
      </div>
 
    </div></main>
    );
  }
  
  export default NasDogadjaj;
  