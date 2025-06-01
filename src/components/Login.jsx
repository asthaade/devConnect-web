import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Login = () =>{

    const [emailId , setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = async() =>{
        try{
            const res = await axios.post(
                BASE_URL+ "/login",
            {
                emailId,
                password,
            }, { withCredentials: true });
            dispatch(addUser(res.data));
            navigate("/")
        }catch(err){
            setError(err?.response?.data || "Something went wrong");
        }
    }

    const handleSignup = async() =>{
        try{
            const res = await axios.post(BASE_URL + '/signup',{
                firstName, lastName, emailId, password,},
                {withCredentials:true});
            dispatch(addUser(res.data.data));
            return navigate('/profile');
        }catch(err){
            setError(err?.response?.data || "Something went wrong");
        }
    }
    
    return (
        <div className="flex justify-center my-10">
        <div className="card card-border bg-base-300 w-96 justify-cente">
    <div className="card-body">
    <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
        </h2>
    <div>
        { !isLoginForm &&(
    <>
    <fieldset className="fieldset">
        <legend className="fieldset-legend py-2">First Name :</legend>
        <input
        type="text"
        value = {firstName}
        className="input"
        placeholder="Enter firstName"
        onChange={(e) => setFirstName(e.target.value)}
        />
    </fieldset>
    <fieldset className="fieldset">
        <legend className="fieldset-legend py-2">Last Name</legend>
        <input
        type="text"
        value = {lastName}
        className="input"
        placeholder="Enter LastName"
        onChange={(e) => setLastName(e.target.value)}
        />
    </fieldset>
    </>
    )}


    <fieldset className="fieldset">
        <legend className="fieldset-legend py-2">Email ID :</legend>
        <input
        type="text"
        value = {emailId}
        className="input"
        placeholder="Enter emailId"
        onChange={(e) => setEmailId(e.target.value)}
        />
    </fieldset>
    <fieldset className="fieldset ">
        <legend className="label-text">Password :</legend>
        <input
        type="text"
        value = {password}
        className="input input-bordered w-full max-w-xs"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        />
    </fieldset>
    </div>
    <p className="text-red-600">{error}</p>
    <div className="card-actions justify-center m-2">
    <button className="btn btn-primary" onClick={ isLoginForm ? handleLogin : handleSignup}
    >
        {isLoginForm ? "Login" : "SignUp"}
    </button>
    </div>
    <p className = "m-auto cursor-pointer py-2"
        onClick={() => setIsLoginForm((value)=> !value)}
        >
            {isLoginForm ? "New User? SignUp Here" : "Existing User? Login Here"}
        </p>
</div>
</div>
    </div>
    )
}

export default Login;