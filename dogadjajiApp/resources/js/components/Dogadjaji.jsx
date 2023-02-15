import { useState } from "react";
import DogadjajKartica from "./DogadjajKartica";

 
 
 function Dogadjaji({dogadjaji}) {
 
    return (
        <div>
             
            <div className="all-events">
              
               { dogadjaji .map((d) => ( <DogadjajKartica dogadjaj={d} key={d.id}  />  ))}
                     
                
    
        </div>
      </div>
    );
  }
  
  export default Dogadjaji;
  