import React from 'react';

const UserCard = ({user}) => {
    console.log(user);
    const {firstName, lastName, photoUrl, age, gender, about} = user;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
<figure>
    <img src = {photoUrl} alt = "photo"/>
</figure>
    <div className="card-body">
        <h2>{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " ," + gender}</p>}
        <p>{about}</p>
    <div className="card-actions justify-end">
        <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-primary">Send Request</button>
    </div>
    </div>
</div>
    )
}

export default UserCard