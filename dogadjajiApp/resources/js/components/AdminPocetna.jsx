import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
 
 
function AdminPocetna({dogadjaji,obrisi,setIzmeniID}) {
  let navigate = useNavigate();
  function azuriraj(id){
      setIzmeniID(id);

       navigate("/admin/izmeni/");
  }
    return (
  
      <div className='adminPocetna'>
        <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th className="th-sm">ID
              </th>
              <th className="th-sm">Naziv
              </th>
              <th className="th-sm">Vreme
              </th>
              <th className="th-sm">Datum
              </th>
              <th className="th-sm">Kategorija
              </th>
              <th className="th-sm">Mesto
              </th>
              <th className="th-sm">Korisnik
              </th>
              <th className="th-sm">Opcije
              </th>
            </tr>
          </thead>
          <tbody>
              {dogadjaji.map((d)=>(<tr key={d.id}><td>{d.id}</td><td>{d.naziv}</td><td>{d.vreme}</td><td>{d.datum}</td><td>{d.kategorija.naziv}</td><td>{d.mesto.naziv_mesta}</td><td>{d.user.name}</td><td><button className="btn" onClick={() => obrisi(d.id)}><BsFillTrashFill></BsFillTrashFill></button><button className="btn" onClick={() => azuriraj(d.id)}><BsPencilFill></BsPencilFill></button></td></tr>))}
            </tbody>
 
      </table>
      </div>
      
    );
  }
  
  export default AdminPocetna;
  