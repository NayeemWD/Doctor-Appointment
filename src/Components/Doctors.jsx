import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        setDoctors(data);
    }, [data])

    const handleSearch = (e) => {
        e.preventDefault(); 
        const searchValue = e.target.search.value; 

        const filterDoctors = data.filter((doctor) => doctor.name.toLowerCase().includes(searchValue.toLowerCase())); 

        setDoctors(filterDoctors)
    }

    return (
        <div className='my-20'>
            <div className='text-5xl text-green-600 text-center my-16 font-bold'>
                <h1>Our Hospital's Doctors : {data.length}</h1>
            </div>

            <div className='w-full py-16'> 
                <form onSubmit={handleSearch} className='flex flex-col items-center justify-center gap-10'>
                    <input className='outline-2 outline-black px-4 py-2 rounded-xl w-6/12' type="search" name="search" />
                    <button className='btn btn-out;ine btn-success w-2/12'>Submit</button>
                </form>
            </div>

            <div className='grid grid-cols-3 justify-items-center gap-10'>
                {
                    doctors?.map((doctor) => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;