import React from 'react';

const UserCard = ({user}) => {
    //console.log(user);
    const {firstName, lastName, photoUrl, age, gender, about} = user;
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
<figure>
    <img src = {photoUrl} alt = "photo"/>
</figure>
    <div className="card-body">
        <h2>{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
    <div className="card-actions justify-center my-4">
        <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-secondary">Send Request</button>
    </div>
    </div>
</div>
    )
}

export default UserCard;