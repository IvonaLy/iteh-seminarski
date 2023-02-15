import React from "react";
import ReactDOM from "react-dom";

// Set up any imports needed for react-vis
import {
  XYPlot,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
 

} from "react-vis";

  
function BarChart({karte,dogadjaji}) {
    
  const BarSeries = VerticalBarSeries;
  
  function brojKupovina(id){
    var brojac=0;
    for(var i=0;i<karte.length;i++){
        if(karte[i].dogadjaj.id==id){
            brojac++;
        }
    }
  
    return brojac;
  }

 
    const data = [];

    for(var i=0;i<dogadjaji.length;i++){
        var pom  =  brojKupovina(dogadjaji[i].id);
        if(pom!=0){
          data.push({x: dogadjaji[i].naziv,y:pom})
        }
             
    }
    for(var i=0;i<data.length;i++){
        for(var j=0;j<data.length;j++){
            if(data[i].y>data[j].y){
                var pom = data[i];
                data[i]=data[j];
                data[j]=pom;
            }
        }
    }
 
   

  return (
    <div className="App">
      <XYPlot 
        yDomain={[0,100]}
        animation
        xType="ordinal"
        width={1000}
        height={400}
        xDistance={30}
      >
       
        <HorizontalGridLines />
        <XAxis title="Dogadjaj"/>
        <YAxis  title="Broj prodatih karata"/>
        <BarSeries className="horizontal-bar-series-example" data={data} /> 
      </XYPlot>
    </div>
  );
}
export default BarChart;