import Image from 'next/image';


const Login = () => (
    <div className="login_container">
        <Image src="/assets/logo.svg" width="300px" height="100px" />

        <div className="login_text">
            Please use your credentials to log in.
        </div>
        <div className="login_form">
            <input type="text" className="input login"></input>
            <input type="password" className="input password"></input>

            <button className='next_button'>Log in ➔</button>
        </div>
    </div>
);

export default Login;
