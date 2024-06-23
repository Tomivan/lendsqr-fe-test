import React from 'react';
import SigninImage from '../../assets/images/signin-image.svg';
import Logo from '../../assets/images/logo.svg';
import './login.component.scss';

const Login = () => {
    return(
        <div className='login'>
            <img src={Logo} alt="The official logo for Lendsqr" />
            <div className="left">
                <img src={SigninImage} alt="Vector of a man walking through a door" />
            </div>
            <div className="right">
                <h1>Welcome!</h1>
                <p>Enter details to login</p>
                <form className='form'>
                    <input type="email" placeholder='Email' />
                    <div className="password">
                        <input type="password" placeholder='Password' />
                        <p>SHOW</p>
                    </div>
                    <sub>FORGOT PASSWORD?</sub>
                    <button className='login-button'>LOG IN</button>
                </form>
            </div>
        </div>
    )
}

export default Login;