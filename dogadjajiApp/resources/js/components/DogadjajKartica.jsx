 
 import { BiTime ,BiCalendar} from 'react-icons/bi';
 import { BiCategory } from 'react-icons/bi';

 function DogadjajKartica({dogadjaj}) {
    function dodaj(id){ //kreira novu kupovinu 

        axios
        .post("http://127.0.0.1:8000/api/karte/?dogadjaj_id="+id+"&user_id="+window.sessionStorage.getItem('auth_id'),{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
        .then((res)=>{  
            console.log(res.data);
             alert("USPESNO")
             
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
     return (
   
         <div className="card1">
      
         <div className="card-header1" >
              <img className='card-img-top1'  src ={dogadjaj.slika}   /> 
         </div>
         <div className="card-body1">
         <h4 className = "naslovKartice">  {dogadjaj.naziv}   </h4>
             <div className="tag tag-teal"> <BiTime></BiTime>{dogadjaj.vreme}    </div>  <br />
             <div className="tag tag-teal1"> <BiCalendar></BiCalendar>{dogadjaj.datum}    </div>  <br />
             
              

             
            
           
             <p className='cena'>  {dogadjaj.mesto.naziv_mesta}  </p>   
             <div className="tag tag-teal2"> <BiCategory></BiCategory>{dogadjaj.kategorija.naziv}    </div>  
             <button className="sortbtn btn" onClick={()=>dodaj(dogadjaj.id)}>Kupi kartu</button>
             
             
         </div> 
     </div>
       
     );
   }
   
   export default DogadjajKartica;
   