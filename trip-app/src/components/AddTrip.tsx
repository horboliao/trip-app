import React from 'react';
import { FaPlus } from 'react-icons/fa';
interface TripCardProps {
}

const AddTrip: React.FC<TripCardProps> = ({ }) => {

    return (
        <div className=" w-64 h-64 bg-gray-100 flex flex-col justify-center items-center space-y-2">
            <FaPlus size={20} color="black"/>
            <p className="text-xl font-bold text-center">Add trip</p>
        </div>
    );
};

export default AddTrip;
