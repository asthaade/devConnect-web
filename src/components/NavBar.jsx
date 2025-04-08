import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const user = useSelector((store) => store.user);


    return (
        <div className="navbar bg-indigo-950 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-white"> 👩‍💻DevConnect</Link>
        </div>
        {user && (
        <div className="flex gep-2">
          <p className='px-2 py-2 text-white'> Welcome, {user.firstName}</p>
          <div className="dropdown dropdown-end mx-5 flex ">
            <div tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                <img
                  alt="user profile photo"
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to = "/profile"className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
        )}
      </div>
)
}

export default NavBar;