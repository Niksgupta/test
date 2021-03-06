import React, {useState} from 'react';
import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import "../components/Login.css"
import facebook from "../assets/Facebook.png"
import {Link, useHistory} from "react-router-dom";


export default function Register() {
     
    const history = useHistory('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birth, setBirth] = useState('[]');

    const signup = (event)=>{
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((auth) => {
             // Signed in 
               history.push("/")
    // ...
  })

    .catch((e) =>{
        if(
            e.message === "The password is invalid or the user does not have a password."
        ){
            alert("Please check your credentials again");
        } else if (
            e.message === "There is no user record correspounding to this identifier. The user may have been deleted"
        ) {
            alert("Please check your credentials again");
        } else{
            alert(e.message);
        }
    })

}

    return (
        <div>
        <center>
            <img className="login_logo" alt = "img" src={facebook}></img>

        </center>
        <div className="form-style-6">
            
            <form>
        {/* <center>
            <img className="login_logo" alt = "img" src={facebook}></img>

        </center> */}
        <h1>Sign Up</h1>
        
        <h5 className="label">First Name</h5>
        <input type="name" placeholder="First Name" value={firstname}
        onChange={(e)=> setFirstName(e.target.value)}  />
         
        <h5 className="label">Last Name</h5>
        <input type="name" placeholder="Last Name" value={lastname}
        onChange={(e)=> setLastName(e.target.value)}  />
 
       <h5 className="label">Email Address</h5>
       <input type="email" name="field1" placeholder="Enter Email Address" 
        onChange= {(event)=> setEmail(event.target.value)} />
        
        <h5 className="label">Set Password</h5>
        <input type="password" name="field2" placeholder="Set Password" 
        onChange= {(event)=> setPassword(event.target.value)} />

        <h5 className="label">Date of Birth</h5>
        <input type="date" placeholder="Date of birth" 
        onChange = {(event)=> setBirth([...birth, event.target.value])} />
        
        

        <input type="submit" value="SignUp" 
         onClick={signup} /> 

               <center>
                <div className="sideinfo">
                        <Link to ="/" style={{textDecoration : 'none'}}>
                         <h5 className="rtd-register">Already have an account ? Log In</h5>
                        </Link>
                </div>
                </center>
        </form>
        </div>
        </div>
                    
    )
};
