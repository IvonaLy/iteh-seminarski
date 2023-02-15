import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import BarChart from './BarChart';
 
 
function Statistike({dogadjaji,karte}) {
 
    return (
      <div className="pocetnaAdmin">


          <div className='float-container'>
                <div className="float-child1">
                      UKUPAN BROJ DOGADJAJA: 
                      {dogadjaji.length}
                </div>
                <div className="float-child2">
                      UKUPAN BROJ PRODATIH KARATA: 
                      {karte.length}
                </div>
          </div>

          <div className='float-container'>
              <BarChart karte={karte} dogadjaji={dogadjaji}></BarChart>
          </div>
      </div>
      
    );
  }
  
  export default Statistike;
  