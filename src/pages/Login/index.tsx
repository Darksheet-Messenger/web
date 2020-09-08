import React from 'react';
import { FaUser, FaLock, FaChevronRight, FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import './styles.css';

function Login() {
    return (
        <div id="login-page">
            <header id="login-top">
                <h1>&#10077;Darksheet&#10078;</h1>
                <button className="signup header-signup">SignUp</button>
            </header>
            <div id="login-content">
                <div>
                    <h1>Login</h1>
                </div>
                <form>
                    <div id="input-block">
                        <FaUser size={18} className="icon" color="rgb(182, 207, 214)" />
                        <input type="text" id="username" name="username" placeholder="Username"/>
                    </div>
                    <div id="input-block">
                        <FaLock size={18} className="icon" color="rgb(182, 207, 214)" />
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <button id="btn-submit" type="submit"><FaArrowAltCircleRight size={20} color="#dad9eb" /></button>
                </form>
                <div id="links">
                    <a href="#">I forgot my username</a><br/>
                    <a href="#">I forgot my password</a>
                </div>
            </div>
            <footer>
                <h2>I don't have an account</h2>
                <button className="signup">SignUp</button>
            </footer>
        </div>
    );
}

export default Login;