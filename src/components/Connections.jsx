import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionSlice';
import { BASE_URL } from '../utils/constants';

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);

    const fetchConnections = async() =>{
        try{
            const res = await axios.get(BASE_URL + '/user/connections', {withCredentials:true},);
            //console.log(res.data);
            dispatch(addConnection(res.data.data));
        }catch(err){
            console.log(err);
        }
    };

    useEffect(() =>{
        fetchConnections();
    }, [])

    if(!connections) return;
    if(connections.length === 0) return <h1 className='text-center my-10 text-2xl font-bold'>No Connections Found</h1>;

    return (
    <div className='text-center my-10'>
        <h1 className='text-3xl'>Connections</h1>

        {connections.map((connection) => {
            const {firstName, lastName,photoUrl, age, gender, about} = connection;
            
            return (
                <div
                    className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
                <div>
                    <img
                        alt="photo"
                        className="w-20 h-20 rounded-full"
                        src={photoUrl}
                    />
                </div>
                <div className="text-left mx-6 ">
                    <h2 className="font-bold text-xl">
                    {firstName + " " + lastName}
                    </h2>
                    {age && gender && <p>{age + ", " + gender}</p>}
                    <p>{about}</p>
                </div>
                </div>
            );
        })}
    </div>
    )
}

export default Connections;