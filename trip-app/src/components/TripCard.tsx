import React from 'react';

interface TripCardProps {
    city: string;
    startDate: Date;
    endDate: Date;
    imageUrl: string;
}

const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
};

const TripCard: React.FC<TripCardProps> = ({ city, startDate, endDate, imageUrl }) => {
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    return (
        <div className=" w-64 outline outline-1 outline-gray-200">
            <img src={imageUrl} alt={city} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{city}</h2>
                <p>{formattedStartDate} - {formattedEndDate}</p>
            </div>
        </div>
    );
};

export default TripCard;
