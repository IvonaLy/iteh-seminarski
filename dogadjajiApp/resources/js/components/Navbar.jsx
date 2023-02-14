 
import { Link } from "react-router-dom";
function Navbar() {
  return (

      <div className="navbar">
     
        <Link to="/" className="navbar-items">Dogadjaji  </Link>
          
        <Link to="/omiljeni" className="navbar-items">
          <p>Moji dogadjaji</p>
            
        </Link>     

       <Link to="/kontakt" className="navbar-items"> Kontakt </Link>
   </div>
    
  );
}

export default Navbar;
