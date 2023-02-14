 
import { Link, useNavigate } from "react-router-dom";
function Navbar({token}) {


  function handleLogout(){ 
    const navigate = useNavigate();
     
    var config = {
      method: 'post',
      url: '/api/logout',
      headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
    };
 
    
    axios(config)
    .then(function (response) {
     
      console.log(response);
     
      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 
      window.sessionStorage.setItem('auth_id',null); 
      navigate('/');
      sessionStorage.clear();
      window.location.reload()

    })
    .catch(function (error) {
     
      
      console.log(error);
      

    }); 
  }
    
  return (

      <div className="navbar">
        {

            token==null? 
               <></>
               
            :
                window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                <>
                  <Link to="/admin" className="navbar-items">Admin  </Link>
                  <Link to="/" className="navbar-items" onClick={handleLogout}>Odjavi se  </Link>
                </>
            :
            <>
                        <Link to="/dogadjaji" className="navbar-items">Dogadjaji  </Link>
          
                 <Link to="/omiljeni" className="navbar-items">  <p>Moji dogadjaji</p> </Link>   
                 <Link to="/" className="navbar-items" onClick={handleLogout}>Odjavi se  </Link>
           </>
 

        }
        


       
   </div>
    
  );
}

export default Navbar;
