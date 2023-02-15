import axios from 'axios';
import { useState } from 'react';
 
 
 
 function DogadjajiRegion({}) {
    const [dogadjaji,setDogadjaji] = useState([ ])
 
    const url = 'https://www.eventbriteapi.com/v3/events/search/';
    const params = {
      'location.address': 'Balkans',
      'location.within': '1000km',
      'sort_by': 'date'
    };
    const headers = {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json;',
        "Content-Type": "application/x-www-form-urlencoded",
      'Authorization': 'Bearer WQP3XGV66PP6FM26EHFV'
    };
    
    axios.get(url, {params: params, headers: headers})
      .then((response) => {
        const events = response.data.events;
        setDogadjaji(events)
        console.log(dogadjaji)
      })
      .catch((error) => {
        console.log(error);
      });
    
    return (
        <div>
             
            <div className="all-events">
              
               
                     
                
    
        </div>
      </div>
    );
  }
  
  export default DogadjajiRegion;
  