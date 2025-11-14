import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AppContext } from '../Provider/createContext';

const DoctorDetails = () => {
    const doctor = useLoaderData();

    const {handleAppointments} = useContext(AppContext);

    const { name, image, education, speciality, fees, workingAt, experience } = doctor;

    return (
        <div>
            {/* image div */}
            <div className='flex justify-center items-center gap-10 my-20'>
                <div className='w-[500px]'>
                    <img className='rounded-xl' src={image} alt="" />
                </div>

                {/* text div */}
                <div className='space-y-8'>
                    <h1 className='text-green-600 font-bold text-5xl'>Name : {name}</h1>
                    <h1 className='font-bold text-2xl'>Education : {education}</h1>
                    <h1 className='font-bold text-2xl'>Experience : {experience}</h1>
                    <h1 className='font-bold text-2xl'>Speciality : {speciality}</h1>
                    <h1 className='font-bold text-2xl'>Working At : {workingAt}</h1>
                    <h1 className='font-bold text-2xl'>Fees : {fees}</h1>
                    <div>
                        <button onClick={() => handleAppointments(doctor)} className='btn btn-success btn-outline text-black w-full'>Book Appointment Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DoctorDetails;