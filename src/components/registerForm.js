
import React from 'react'
import { useForm } from "react-hook-form";
import { Input, PasswordInput, Button} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks';
import '../styles/registerform.css'
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const router = useNavigate()
  const { register, handleSubmit } = useForm();
  const  defaultProps = { 
    username:"",
    email: "",
    password: ""
  }

  const [userDetails, setRegister] = useLocalStorage({key:'userDetails', defaultValue:defaultProps});



const onSubmit = (data) => {

  setRegister(data)
} 
  
const goToLogin = ()=>{
        router("/login")
      }

  return (

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='p-4'>Register Form</h1>
      <Input {...register("username", { required: true })}   placeholder="Username"/>
      <Input type="email" {...register("email", { required: true })} placeholder="Email"/>
      <PasswordInput
          type="password"
          {...register('password')}
          placeholder='Enter your password..'
          required  
        />
        <Button type="submit" 
        > Submit </Button>
    </form> 
    
  )
}

export default RegisterForm