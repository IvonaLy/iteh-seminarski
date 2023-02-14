import { useState } from "react";

 
function Kontakt() {
 
    const [proukaData,setPorukaData]=useState({
            ime:"",
            email:"",
            poruka:""
    });
    
    const handleInput = (e) =>{
        console.log(e.target.value)
        e.persist();
        setPorukaData({...proukaData,[e.target.name]:e.target.value});
      
    }
    function prikaziPoruku(){
        alert("Zdravo "+proukaData.ime+", Vasa poruka je sacuvana: "+proukaData.poruka)
    }
    return (
       
                    
                    <div id="right">
                        <h2>Contact us</h2>
                        <input type="text" className='field' placeholder='Vase ime' onInput={handleInput} name="ime"/>
                        <input type="email" className='field' placeholder='Vas e-mail'   onInput={handleInput} name="email"/>
                        <textarea className='field area' placeholder='Poruka'  onInput={handleInput} name="poruka"></textarea>
                        <button className='btn' onClick={prikaziPoruku}>Posalji</button>
                    </div>
              
           
      
      
    );
  }
  
  export default Kontakt;
  