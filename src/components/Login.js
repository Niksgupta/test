import React, {useState} from 'react';
import facebook from "../assets/Facebook.png"
import {Link, useHistory} from "react-router-dom";
import "../components/Login.css"
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login =(event)=>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
            history.push("/")
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
                <h1>Log In</h1>

            <form>
          {/* <center>
                <img className="login_logo" alt = "img" src={facebook}></img>

            </center> */}
                <input type="email" name="field1" placeholder="Enter Email Address" 
                onChange= {(event)=> setEmail(event.target.value)} />

                <input type="password" name="field2" placeholder="Enter Password" 
                onChange= {(event)=> setPassword(event.target.value)} />

                <input type="submit" value="Login" 
                onClick={login} />

                <center>
                <div className="sideinfo">
                 <h5>Forgotten Password</h5>
                    <h5 className="dot">.</h5>
                        <Link to ="/register" style={{textDecoration : 'none'}}>
                         <h5 className="rtd">Sign up</h5>
                        </Link>
                </div>
                </center>
            </form>
</div>
</div>

    )
};

export default Login;

















        {/* // <div className="login">
        //     <form>
        //         {/* <center>
        //         <img className="login_logo" src={gif}  />

        //         </center> */}
        //         <center>
        //         {/* <h1 className="login_logo">F A C E B O O K</h1> */}
        //         <img className="login_logo" alt = "img" src={facebook}></img>

        //         </center>
        //         <center>
        //             <input className="form-style-6" type="email" placeholder="Enter your email"  />
       
        //         </center>
        //         <center>
        //             <input className="form-style-6" type="password" placeholder="Enter password" />
        //         </center>
        //         <center>
        //             <button className= "form-style-6" type="submit" >
        //                 Log In 
        //                 </button>
        //         </center>
        //         <center>
        //             <div>
        //                 <h5>Forgotten Password</h5>
        //                 <h5 className="dot">.</h5>
        //                 <Link to ="/register" style={{textDecoration : 'none'}}>
        //                     <h5>Sign up</h5>
        //                     </Link>
        //             </div>
        //         </center>
        //     </form>

        // </div>
        // </div>
        //  */}

        

      