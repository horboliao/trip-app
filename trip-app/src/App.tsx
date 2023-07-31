import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import TripCard from "./components/TripCard";

function App() {
    const startDate = new Date('2023-08-01');
    const endDate = new Date('2023-08-15');
  return (
    <div>
        <h1 className='text-3xl'>
            Weather
            <span className='font-bold'> Forecast</span>
        </h1>
        <SearchBar/>
        <TripCard
            city="New York"
            startDate={startDate}
            endDate={endDate}
            imageUrl="https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg"
        />
    </div>
  );
}

export default App;
