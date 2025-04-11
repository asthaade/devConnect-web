import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Login = () =>{

    const [emailId , setEmailId] = useState("astha@gmail.com");
    const [password, setPassword] = useState("Astha@123");
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
            //console.log(res.data);
            navigate("/")
        }catch(err){
            setError(err?.response?.data || "Something went wrong");
            //console.log(err);
        }
    }
    
    return (
        <div className="flex justify-center my-10">
        <div className="card card-border bg-base-300 w-96 justify-cente">
    <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>
    <fieldset className="fieldset">
        <legend className="fieldset-legend py-2">Email ID</legend>
        <input
        type="text"
        value = {emailId}
        className="input"
        placeholder="Enter Email Id"
        onChange={(e) => setEmailId(e.target.value)}
        />
    </fieldset>

    <fieldset className="fieldset ">
        <legend className="fieldset-legend py-2">Password</legend>
        <input
        type="text"
        value = {password}
        className="input"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        />
    </fieldset>
    </div>
    <p className="text-red-600">{error}</p>
    <div className="card-actions justify-center m-2">
    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
</div>
</div>
    </div>
    )
}

export default Login;