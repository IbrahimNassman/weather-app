import React from 'react'
import { useForm } from 'react-hook-form';
import { Input, PasswordInput, Button} from '@mantine/core'
import '../styles/login.css';
import { Link } from 'react-router-dom'
import { useLocalStorage } from '@mantine/hooks';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [userdata] = useLocalStorage({key:'userDetails'});
    const onSubmit = (data) => {
        
const userExist =()=>{ 

    console.table(data)
    console.table(userdata)
        //kolla om användaren existerar i userDB
    } 
userExist()

    
};
    return (
<form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='p-4'>Login</h1>
    <Input type="email" {...register("email", { required: true })} placeholder="Email"/>
    <PasswordInput
        type="password"
        {...register('password')}
        placeholder='Enter your password..'
        required  
        />
        <Button type="submit"  > Submit </Button>
    </form> 

    )
}

export default Login;