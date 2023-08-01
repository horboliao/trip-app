import React from 'react';
import './App.css';
import Container from "./components/Container";
import LeftTimer from "./components/LeftTimer";

function App() {
  return (
      <div className="flex flex-row">
        <Container/>
        <LeftTimer
            city="Berlin"
            dayOfWeek="Sunday"
            temperature={26}
            time={{days: 30, hours: 15, minutes:15, seconds:30}}
            weatherImageUrl="https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg"/>
      </div>
  );
}

export default App;
