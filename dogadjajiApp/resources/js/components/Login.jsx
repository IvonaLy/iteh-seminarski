import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
function Login({addToken}) {
 
    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
    
    function handleInput(e){ 
        
        let newUserData = userData;  
      
        newUserData[e.target.name]=e.target.value;  
        
        setUserData(newUserData);  
         
    }
    let navigate = useNavigate();
    function handleLogin(e){
 
        e.preventDefault();   

        console.log(userData)
        axios
            .post("http://127.0.0.1:8000/api/login", userData )
            .then((res)=>{  
                console.log(res.data[0]);
                if(res.data.success===true){             
                   
                  
                  
                    window.sessionStorage.setItem("auth_token",res.data[0].token);
                    window.sessionStorage.setItem("auth_name",res.data[0].username);
                    window.sessionStorage.setItem("auth_id",res.data[0].id);

                    addToken(res.data[0].token);
                    console.log(res.data[0].token);
                    if(res.data[0].role === 'admin')
                    {
                        window.sessionStorage.setItem("auth_name","Admin");

                         navigate("/admin")
                    }
                    else{
                        navigate("/dogadjaji");  
                    }



                }else{
                    alert("NEUSPESNO");
                }
            });
           

    }
 
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Uloguj se</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                    
                    <form method="POST" onSubmit={handleLogin} className="signin-form">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Email" required onInput={handleInput}/>
                            </div>
                        <div className="form-group">
                            <input id="password-field" type="password" name="password" className="form-control" placeholder="Password" required onInput={handleInput}/>
                            <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                        </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                            </div>
                        
                    </form>
            
                </div>
                    </div>
                </div>
            </div>
        </section>
                    
                 
              
           
      
      
    );
  }
  
  export default Login;
  