 
import { Link } from "react-router-dom";
function Navbar({token}) {
  return (

      <div className="navbar">
        {

            token==null? 
               <Link to="/" className="navbar-items">Login  </Link>
               
            :
                window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                <Link to="/admin" className="navbar-items">Admin  </Link>
            :
            <>
                        <Link to="/dogadjaji" className="navbar-items">Dogadjaji  </Link>
          
                 <Link to="/omiljeni" className="navbar-items">  <p>Moji dogadjaji</p> </Link>   
           </>
 

        }
        


       
   </div>
    
  );
}

export default Navbar;
