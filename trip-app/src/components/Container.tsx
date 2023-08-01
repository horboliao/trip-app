import React from 'react';
import SearchBar from "./SearchBar";
import TripCard from "./TripCard";
import AddTrip from "./AddTrip";
import WeatherCard from "./WeatherCard";

const Container = () => {
    const startDate = new Date('2023-08-01');
    const endDate = new Date('2023-08-15');
    return (
        <div className="mx-10 my-6 flex flex-col space-y-10 w-2/3">
            <h1 className='text-2xl'>
                Weather
                <span className='font-bold'> Forecast</span>
            </h1>
            <SearchBar/>
            <div className="flex flex-row space-x-8">
                <TripCard
                    city="New York"
                    startDate={startDate}
                    endDate={endDate}
                    imageUrl="https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg"
                />
                <AddTrip/>
            </div>
            <h2 className='text-xl font-bold'>Weather</h2>
            <div className="flex flex-row space-x-8">
                <WeatherCard
                    dayOfWeek={"Monday"}
                    weatherImageUrl={"https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg"}
                    maxTemperature={28}
                    minTemperature={18}/>
                <WeatherCard
                    dayOfWeek={"Monday"}
                    weatherImageUrl={"https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg"}
                    maxTemperature={28}
                    minTemperature={18}/>
                <WeatherCard
                    dayOfWeek={"Monday"}
                    weatherImageUrl={"https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg"}
                    maxTemperature={28}
                    minTemperature={18}/>
                <WeatherCard
                    dayOfWeek={"Monday"}
                    weatherImageUrl={"https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg"}
                    maxTemperature={28}
                    minTemperature={18}/>
            </div>
        </div>
    );
};

export default Container;
