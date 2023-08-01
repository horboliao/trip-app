import React, { useEffect, useState } from 'react';

interface LeftTimerProps {
    dayOfWeek: string;
    weatherImageUrl: string;
    temperature: number;
    city: string;
    time: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
}

const LeftTimer: React.FC<LeftTimerProps> = ({ dayOfWeek, weatherImageUrl, temperature, city, time }) => {


    return (
        <div className="w-1/3 bg-blue-950 text-white flex flex-col items-center justify-center">
            <p className="text-4xl font-bold">{dayOfWeek}</p>

            <div className="flex flex-row space-x-1 my-6">
                <img src={weatherImageUrl} alt="Weather Icon" className="w-14 h-14 object-contain" />
                <p className="text-6xl ">{temperature}</p>
                <p>°C</p>
            </div>

            <p className="text-3xl">{city}</p>

            <div className="flex flex-row space-x-10 mt-20">
                <div className="space-y-0.5 flex flex-col items-center">
                    <p className="text-2xl font-bold">{time.days}</p>
                    <p>днів</p>
                </div>
                <div className="space-y-0.5 flex flex-col items-center">
                    <p className="text-2xl font-bold">{time.hours}</p>
                    <p>годин</p>
                </div>
                <div className="space-y-0.5 flex flex-col items-center">
                    <p className="text-2xl font-bold">{time.minutes}</p>
                    <p>хвилин</p>
                </div>
                <div className="space-y-0.5 flex flex-col items-center">
                    <p className="text-2xl font-bold">{time.seconds}</p>
                    <p>секунд</p>
                </div>
            </div>
        </div>
    );
};

export default LeftTimer;
