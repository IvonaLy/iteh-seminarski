import { useState } from "react";

 
function NagradnaIgra() {
 
 
    const [gradData,setGradData]=useState({
        grad:"",
      
    });
    const handleInput = (e) =>{
        console.log(e.target.value)
        e.persist();
        setGradData({...gradData,[e.target.name]:e.target.value});
      
    }
    function prikaziPoruku(){
       if(gradData=="Subotica"){
            alert("Osvojili ste 2 karte za koncert po izboru")
       }else{
            alert("Vise srece drugi put")

       }
    }
    return (
       <div className="nagrada">
                <img src="https://source.unsplash.com/random/?city" alt=""  className="nagrada-slika" />

                <p> Pogodi o kom gradu se radi i osvoji nagradu!</p>
                <input type="text" onChange={handleInput} name="grad"/>
                <button onClick={prikaziPoruku}>Pogadjaj</button>
       </div>
          
    );
  }
  
  export default NagradnaIgra;
  