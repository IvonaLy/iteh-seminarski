 
 
 
 
 function NasDogadjaj({dogadjaj}) {

 
    return (
      <main><div className="card">
    
      <div className="card__body">
        <div className="half">
          <div className="featured_text">
            <h1>{dogadjaj.name.text}</h1>
            
            
          </div>
          <div className="image">
            <img src={dogadjaj.logo.original.url} alt=""/>
          </div>
        </div>
        <div className="half">
          <div className="description">
            <p>  <b> {dogadjaj.description.text}</b></p>
            <p>   While not technically a part of Belgrade itself, Avala is a nearby mountain that overlooks the city like some sort of angry big brother, in the familial sense, as opposed to the Orwellian. It is easy to imagine the minds behind 1984’s main antagonist directing traffic from Avala Tower, however, a 205-metre tall spindle that was destroyed by NATO in 1999 before being rebuilt in 2009. This is the tallest tower in the Balkans, and it is arguably the number one attraction at Avala. The Monument to the Unknown Hero gives it a good run for its money, but the tower just about wins out.</p>

          </div>
          <span className="stock"> JOS:  {dogadjaj.capacity} KARATA</span>
          
        </div>
      </div>
 
    </div></main>
    );
  }
  
  export default NasDogadjaj;
  