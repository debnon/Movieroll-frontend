import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import logo from '../../graphics/logo2.png';
import logo from '../../graphics/wheel3.svg';
import Register from './Register';

import './Login.css';


// const fetchUserToken =  () => {
//     axios.post("http://localhost:8080/api/v1/user/authenticate").then(res => {
//         console.log(res);
//         // const data = res.data;
//         setUserProfiles(res.data);
//     });
// };

// http://www.movieroll.co.uk/api/v1/user/authenticate
async function loginUser(credentials) {
    return fetch('https://api.movieroll.co.uk/api/v1/user/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

async function registerUser(credentials) {
    return fetch('https://api.movieroll.co.uk/api/v1/user/registration', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {

    // handle post request with email/username and password
    // return and save JWT
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            "emailID": username,
            "password": password
        });
        
        if (token["jwt-token"]) {
            setToken(token);
        } else {
            console.log("Invalid login");
        }
        
    }


    //handle registration
    const [rUsername, setrUserName] = useState();
    const [rPassword, setrPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [emailID, setEmail] = useState();
    const [contactnumber, setContactnumber] = useState();
   
    const handleRegistration = async e => {
        e.preventDefault();
        const token = await registerUser({
            "id": "25",
            "username": rUsername,
            "password": rPassword,
            "firstname": firstname,
            "lastname": lastname,
            "emailID": emailID,
            "contactnumber": contactnumber
        });
        setTimeout(function(){
            signInButton();
        }, 1000);
        
        
    }

    // handle popup 
    // const popup = document.querySelector('.popup');

    // const showPopup = () => {
    //     popup.classList.add('open');
    // }
    // const hidePopup = () => {   
    //     popup.classList.remove('open');
    // }

    const [isPopupActive, setIsPopupActive] = React.useState(false);
    const signInButton = () => {
        setIsPopupActive(false);
    };  
    const signUpButton = () => {
        setIsPopupActive(true);
    };

    return (

    <div className="h0">
        <div className="h1">
            <img src={logo} alt="M logo" />

            <p className="pr">Movieroll helps you find the movies you were always looking for</p>
        </div>  
        <form className="main" onSubmit={handleSubmit}>
            <input type="text" placeholder="Email address or phone number" className="txt" onChange={e => setUserName(e.target.value)}/><br/>
            <input type="password" placeholder="Password" className="txt" onChange={e => setPassword(e.target.value)}/><br/>
            <input type="submit" value="Log In" className="login-btn"/><br/>
            <div className="a-link">
            <a href="" className="link">Forgotten Password?</a>
            </div>
            
            <div className="ca" onClick={signUpButton}>
                <a className="pca" >Create New Account</a>
            </div>
        </form>
            
      <div className={`popup${isPopupActive ? " open" : ""}`}>
        <div className="blocker" onClick={signInButton}></div>
        <Register
        handleRegistration={handleRegistration}
        setrUserName={setrUserName}
        setrPassword={setrPassword}
        setFirstname={setFirstname}
        setLastname={setLastname}
        setEmail={setEmail}
        setContactnumber={setContactnumber}
        />
        {/* <div classNameName={`${isShowRegister ? "active" : ""} show`}> */}
        
        
      </div>
      
            
     </div>

    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}