import React, { useContext } from 'react';
import { AppContext } from '../Provider/createContext';
import Doctor from './Doctor';

const Appointments = () => {

    const { appointments } = useContext(AppContext);

    return (
        <div className='min-h-[500px] m-10'>
            <div className='text-4xl text-orange-600 font-bold text-center my-10'>
                <h1>Appointment Booked : {appointments.length}</h1>
            </div>

            <div className=''>
                {
                    appointments.length > 0 ? <>
                        <div className='grid grid-cols-3 gap-10'>
                            {appointments?.map((doctor) => <Doctor key={doctor.id} doctor={doctor}></Doctor>)}
                        </div>
                    </> :
                        <>
                            <div className='text-5xl text-red-600 flex justify-center items-center h-[400px]'>
                                <h1>No Appointments Found!!</h1>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Appointments;