import React, {useState} from 'react';
import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import "../components/Login.css"
import facebook from "../assets/Facebook.png"
import {Link, useHistory} from "react-router-dom";
import { db } from './firebase';


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
               history.push("/login")
    // ...
  })

            .then((auth) =>{
                if(auth.user){
                  auth.user.updateProfile({
                     displayName : firstname + " " + lastname,
                     photoURL : "https://www.w3schools.com/w3images/avatar2.png"
            })
            .then((s) =>{
                db.collection('users').doc(auth.user.uid).set({
                    uid : auth.user.uid,
                    displayName : auth.user.displayName,
                    email : auth.user.email,
                    photoURL: "https://www.w3schools.com/w3images/avatar2.png",
                    birth,
                    bio: ""
                }).then((auth) =>{
                    history.push("/")
                })
                
            })
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
        
        <input type="name" placeholder="First Name" 
        onChange={(e)=> setFirstName(e.target.value)}  />

        <input type="name" placeholder="Last Name"
        onChange={(e)=> setLastName(e.target.value)}  />

        
        <input type="email" name="field1" placeholder="Enter Email Address" 
        onChange= {(event)=> setEmail(event.target.value)} />

        <input type="password" name="field2" placeholder="New Password" 
        onChange= {(event)=> setPassword(event.target.value)} />

        <input type="date" placeholder="Date of birth" 
        onChange = {(event)=> setBirth([...birth, event.target.value])} />
        

        <input type="submit" value="SignUp" 
         onClick={signup} /> 

               <center>
                <div className="sideinfo">
                        <Link to ="/login" style={{textDecoration : 'none'}}>
                         <h5 className="rtd-register">Already have an account ? Log In</h5>
                        </Link>
                </div>
                </center>
        </form>
        </div>
        </div>
                    
    )
};
