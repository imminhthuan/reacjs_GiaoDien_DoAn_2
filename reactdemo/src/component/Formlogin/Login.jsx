import React from "react";
import '../../CssLogin/style.css';

function Login () {
    return (
        <div className="container loginbody">
            <div className="login">
                <form>
                    <h2>Hello!<br/><span>Welcome</span></h2>
                    <div className="inputBox">
                        <input type="text" placeholder="Username"/>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" placeholder="Password"/>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <label>
                        <input type="checkbox"/>Keep me logged in
                    </label>
                    <div className="inputBox">
                        <input type="submit" value="Log in"/>
                    </div>
                </form>
                <h4>OR</h4>
                <div className="fingerprint">
                    <div className="fingerprintBox">
                        <img src="finger.png" alt=""/>
                    </div>
                    <p>Login with fingerprint</p>
                </div>
            </div>
        </div>
    )
}

export default Login