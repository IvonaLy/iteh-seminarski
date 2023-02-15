 
import { MDBDataTableV5 } from 'mdbreact';
import React, { useState } from "react";
 
 function Omiljeni({karte}) {
 
  const [datatable, setDatatable] = React.useState({
       
    columns: [
      {
        label: 'Naziv',
        field: 'naziv',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'datum',
        field: 'datum',
        width: 200,
      },
      {
        label: 'vreme',
        field: 'vreme',
        width: 270,
      },
      {
        label: 'mesto',
        field: 'mesto',
        width: 270,
      }
       
    ],
    rows:  karte.filter((p)=>p.user.id==window.sessionStorage.getItem('auth_id')).map(p=>{
        return{
          naziv: p.dogadjaj.naziv,
          datum: p.dogadjaj.datum,
          vreme: p.dogadjaj.vreme,
          mesto:p.dogadjaj.mesto.naziv_mesta
        }
        

    })
   
})      
    

  return <div className='adminPocetna'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;
}
  
  export default Omiljeni;
  