import React from 'react';
import { AppContext } from '../Provider/createContext';
import { Link } from 'react-router';

const Doctor = ({ doctor }) => {

    const {id, name, image, education, speciality, fees, workingAt, experience } = doctor;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{experience}</div>
                    </h2>
                    <p>{education} - {workingAt}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{speciality}</div>
                        <div className="badge badge-outline badge-success font-bold">BDT {fees}</div>
                    </div>
                    <div>
                        <Link to={`/doctors-details/${id}`} className='btn btn-success w-full font-bold'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;