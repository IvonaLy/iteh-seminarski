 
 import { BiTime ,BiCalendar} from 'react-icons/bi';
 import { BiCategory } from 'react-icons/bi';

 function DogadjajKartica({dogadjaj,dodaj}) {
     return (
   
         <div className="card">
      
         <div className="card-header" >
              <img className='card-img-top'  src ={dogadjaj.slika}   /> 
         </div>
         <div className="card-body">
         <h4 className = "naslovKartice">  {dogadjaj.naziv}   </h4>
             <div className="tag tag-teal"> <BiTime></BiTime>{dogadjaj.vreme}    </div>  <br />
             <div className="tag tag-teal1"> <BiCalendar></BiCalendar>{dogadjaj.datum}    </div>  <br />
             
              

             
            
           
             <p className='cena'>  {dogadjaj.mesto.naziv_mesta}  </p>   
             <div className="tag tag-teal2"> <BiCategory></BiCategory>{dogadjaj.kategorija.naziv}    </div>  
             <button className="sortbtn btn" onClick={()=>dodaj(dogadjaj.id)}>Dodaj u omiljene</button>
             
             
         </div> 
     </div>
       
     );
   }
   
   export default DogadjajKartica;
   