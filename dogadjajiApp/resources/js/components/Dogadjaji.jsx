import { useState } from "react";
import DogadjajKartica from "./DogadjajKartica";

 
 
 function Dogadjaji({dogadjaji,dodaj}) {
 
    return (
        <div>
             
            <div className="all-events">
              
               { dogadjaji .map((d) => ( <DogadjajKartica dogadjaj={d} key={d.id}  dodaj={dodaj} />  ))}
                     
                
    
        </div>
      </div>
    );
  }
  
  export default Dogadjaji;
  