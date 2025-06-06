import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';
const Feed = () => {

    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed);

    const getFeed = async() =>{
        if (feed) return;
        try{
            const res = await axios.get(BASE_URL + "/feed", {withCredentials: true});
            console.log(res.data)
            console.log(res);
            dispatch(addFeed(res?.data?.data));
        }
        catch(err){
            console.log(err);
        }
    };
    useEffect(()=>{
        getFeed();
    },[])

    if(!feed) return null;
    if(feed.length === 0) return <h1 className='flex justify-center my-10 text-2xl font-bold'>No new User Found</h1>
    return (
        feed && (
            <div className='flex justify-center my-10'>
                <UserCard user={feed[0]}/>
            </div>
        )
    )
};


export default Feed;