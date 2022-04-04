import React from 'react'
import { useForm } from 'react-hook-form';
import '../styles/login.css';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
    
    //alert(JSON.stringify(data));
    console.log(data);
};
    return (
    <div className='login'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input {...register("firstName")} placeholder="first name" required />
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input {...register("lastName")} placeholder="last name" required />
            </div>

            <div>
                <label htmlFor="User">Are you User?</label>
                <input
                type="checkbox"
                {...register("User")}
                placeholder="User"
                value="yes"
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                {...register("email")}
                placeholder="user@gmail.com"
                type="email"
                />
            </div>
            <input type="submit"/>
            
            </form>
    </div>
    )
}

export default Login;