 
 import { BiTime } from 'react-icons/bi';
 import { ImPriceTags } from 'react-icons/im';

 function DogadjajKartica({dogadjaj,dodaj}) {
     return (
   
         <div className="card">
      
         <div className="card-header" >
              <img className='card-img-top'  src ={dogadjaj.image}   /> 
         </div>
         <div className="card-body">
             <div className="tag tag-teal"> <BiTime></BiTime>{dogadjaj.vreme}    </div>  
             <div className="tag tag-teal"> <ImPriceTags></ImPriceTags>{dogadjaj.cena_ulaznice} RSD    </div>  

             
             <h4 className = "naslovKartice">  {dogadjaj.naziv}   </h4>
             <p className="opis">{dogadjaj.opis}</p>
 
             
             <p className='cena'>  {dogadjaj.mesto}  </p>   
            
             <button className="sortbtn btn" onClick={()=>dodaj(dogadjaj.id)}>Dodaj u omiljene</button>
             
             
         </div> 
     </div>
       
     );
   }
   
   export default DogadjajKartica;
   