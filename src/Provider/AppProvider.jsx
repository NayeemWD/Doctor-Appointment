import React, { useState } from 'react';
import { AppContext } from './createContext';
import { useNavigate } from 'react-router';

const AppProvider = ({children}) => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

    const handleAppointments = (doctor) => {
        setAppointments((prev) => [...prev, doctor]);
        navigate('/appointments')
    }

    const age = 29;

    const obj = {
        name : "Rahim", 
        age,
        handleAppointments, 
        appointments, 
        setAppointments
    }

    return (
        <AppContext value={obj}>
            {children}
        </AppContext>
    );
};

export default AppProvider;