import {  useState } from "react";


import axios from "axios";
 
   
function Izmeni({dogadjaj}) {
    const [dogadjajData,setDogadjajData]=useState({
        id: dogadjaj.id,
        naziv: dogadjaj.naziv,
        vreme: dogadjaj.vreme,      
        datum: dogadjaj.datum,     
        slika: dogadjaj.slika,     
        user_id: parseInt(window.sessionStorage.getItem("auth_id")),
         mesto_id: dogadjaj.mesto.id,
         kategorija_id: dogadjaj.kategorija.id,

    });

 
    console.log(dogadjajData)
    function handleInput(e){ 
        
        let newdogadjajData = dogadjajData;  
      
        newdogadjajData[e.target.name]=e.target.value;  
        
        setDogadjajData(newdogadjajData);  
         
    }

    function handleUpdate(e){
 
        e.preventDefault();   

        console.log(dogadjajData)
        var config = {
            method: 'put',
            url: '/api/dogadjaji/'+dogadjajData.id,
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
            data:dogadjajData          };

          axios(config)
            .then(function (response) {
            
            console.log(response);
            
            alert("USPEH")

            })
            .catch(function (error) {
            
                alert("GRESKA")
                if (error.response) {
                
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    
                    console.log(error.request);
                } else {
                  
                    console.log('Error', error.message);
                }
            

            }); 
         
           

    }
 
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Azuriraj</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                    
                    <form method="POST" onSubmit={handleUpdate} className="signin-form">
                            <div className="form-group">
                                <input type="text" className="form-control" name="naziv" placeholder="naziv" required onInput={handleInput} defaultValue={dogadjajData.naziv}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="vreme" placeholder="Vreme" required onInput={handleInput} defaultValue={dogadjajData.vreme}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="datum" placeholder="datum(gggg-mm-dd)" required onInput={handleInput } defaultValue={dogadjajData.datum}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="slika" placeholder="URL slike" required onInput={handleInput} defaultValue={dogadjajData.slika}/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="kategorija_id">Kategorija</label>

                                    <select name="kategorija_id" id="kategorija_id" onInput={handleInput} defaultValue={dogadjajData.kategorija_id}>
                                    <option value={1}>Zabava</option>
                                    <option value={2}>Koncert</option>
                                    <option value={3}>Za decu</option>
                                    <option value={4}>Aktivnost i dozivljaj</option>
                                    <option value={5}>Umetnost i kultura</option>
                                    <option value={6}>sport i adrenalin</option>

                                  
                                    </select>
                            </div>
                            <div className="form-group">
                            <label htmlFor="mesto_id">Mesto</label>

                                    <select name="mesto_id" id="mesto_id" onInput={handleInput} defaultValue={dogadjajData.mesto_id}>
                                    <option value={1}>Institut Servantes</option>
                                    <option value={2}>Galerija Haos</option>
                                    <option value={3}>Savski park</option>
                                    <option value={4}>Institut za transfuziju krvi</option>
                                    <option value={5}>Stark arena</option>
                                     

                                  
                                    </select>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3">IZMENI</button>
                            </div>
                        
                    </form>
            
                </div>
                    </div>
                </div>
            </div>
        </section>
                    
                 
              
           
      
      
    );
  }
  
  export default Izmeni;
  