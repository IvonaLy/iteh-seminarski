import { useState } from "react";
import DogadjajKartica from "./DogadjajKartica";

 
 
 function Dogadjaji({dogadjaji,dodaj}) {
    const [sort, setSort] = useState(true);
    function sortAsc(){
    
        setSort(true);
      }
      function sortDesc(){
        
        setSort(false);
      }
    return (
        <div>
            <div className="buttons">
                <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
                <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
            </div>
            <div className="all-events">
                {sort === true ? 
                dogadjaji
                    .sort((a, b) => a.cena_ulaznice < b.cena_ulaznice ? -1 : 1)
                    .map((d) => ( <DogadjajKartica dogadjaj={d} key={d.id}  dodaj={dodaj} />  ))
                    :
                    dogadjaji
                    .sort((a, b) => a.cena_ulaznice > b.cena_ulaznice ? -1 : 1)
                .map((d) => ( <DogadjajKartica dogadjaj={d} key={d.id} dodaj={dodaj}   />  ))
                }
    
        </div>
      </div>
    );
  }
  
  export default Dogadjaji;
  