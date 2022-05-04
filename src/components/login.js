import React from 'react'
import { useForm } from 'react-hook-form';
import { Input, PasswordInput, Button} from '@mantine/core'
import '../styles/login.css';
import { useNavigate , Link} from "react-router-dom";
import { useLocalStorage } from '@mantine/hooks';
import Navbar from '../components/navbar'

const Login = () => {
    const router = useNavigate()
    const { register, handleSubmit } = useForm();
    const [userdata] = useLocalStorage({key:'userDetails'});
    const goHome = ()=>{
        router("/")
    }
    const onSubmit = (data) => {
    const email=data.email 
    console.log(email)
    const userExist =()=>{ 
        console.table(data)
        console.table(userdata)
        //kolla om användaren existerar i userDB
        userdata.map((user) => {
            if (user.email=== email){
                console.log('wellcom',data)

            }else{
                console.log('you have to register') 
            }
        })

        {goHome()}

    } 

    userExist()
};
    return (
        <>
        <Navbar />
    <form  className='logoin-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='p-4'>Login</h1>
        <Input  className='login-input' type="email" {...register("email", { required: true })} placeholder="Email"/>
        <PasswordInput
            className='login-password'
            type="password"
            {...register('password')}
            placeholder='Enter your password..'
            required  
        />
        <div className='d-flex justify-content-between  algin-item-center'>
            <Button type="submit"  > Login </Button>
            <Link to='/registerForm'>Register</Link>
        </div>
    </form>
    </>
    )
}

export default Login;