import React, { useState } from 'react';

const Login = () => {
    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    

    const changePassword = (e) =>{
        console.log(e.target.name, e.target.value)
        setPassword(e.target.value)
        console.log(password)
       

    }
    const changeConfirmPass = (e) =>{
        console.log(e.target.name, e.target.value)
        setConfirmPassword(e.target.value)
        console.log(confirmPassword)
        if(password === confirmPassword){
            //alert('password not matched')
            console.log('Password not matched')
        }
    }

    const handleSubmit= () =>{

    }



    return (
        <div >
            <h2>this is password</h2>
            <form onSubmit={handleSubmit}>
               
                <input type="text"  name="email" placeholder='Your email address' required />
                <br />
                <input type="password" onBlur={changePassword} name="password" placeholder="Your password" required />
               
                <br />
                <input type="password" onBlur={changeConfirmPass} name="confirmPassword" placeholder='varify password' required />
                {
                    errorConfirmPassword && (<p className="text-danger">{errorConfirmPassword}</p>)
                }
                <br />
                
                
                <input type="submit" value= "summit" />

            </form>
        </div>
    );
};

export default Login;