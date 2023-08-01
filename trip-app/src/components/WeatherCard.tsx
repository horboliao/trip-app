import React from 'react';

interface WeatherCardProps {
    dayOfWeek: string;
    weatherImageUrl: string;
    maxTemperature: number;
    minTemperature: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ dayOfWeek, weatherImageUrl, maxTemperature, minTemperature }) => {
    const formattedMaxTemp = `${maxTemperature}°`;
    const formattedMinTemp = `${minTemperature}°`;

    return (
        <div className="w-18 flex flex-col justify-center items-center">
                <p className=" mb-4 text-gray-400">{dayOfWeek}</p>
                <img src={weatherImageUrl} alt="Weather Icon" className="w-12 h-12 object-contain" />
                <p className="mt-2">{formattedMaxTemp}/{formattedMinTemp}</p>
        </div>
    );
};

export default WeatherCard;
