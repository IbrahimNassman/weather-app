import React from 'react'
import { useForm } from "react-hook-form";
import { Input, PasswordInput, Button} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks';
import '../styles/registerform.css'
import { Link } from "react-router-dom";


const RegisterForm = () => {
  // const router = useNavigate()
  const { register, handleSubmit } = useForm();
  const  defaultProps = { 
    username:"",
    email: "",
    password: ""
  }

  const [userDetails, setRegister] = useLocalStorage({key:'userDetails', defaultValue:defaultProps});
  // const goToLogin = ()=>{
  //   router("/login")
  // }
  


const onSubmit = (data) => {
  const array = []
  if (userDetails.length > 1) {
    userDetails.map((user) => {
      array.push(user)
      console.log("welcome in our project")
    })
    alert('welcome to our project')
  } else {
    array.push(userDetails[0])
  }
  array.push(data)
  setRegister(array)
} 
  


  return (

      <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='p-4'>Register Form</h1>
       <Input {...register("username", { required: true })} className='register-input'  placeholder="Username"/>
       <Input type="email" {...register("email", { required: true })}  className='register-email' placeholder="Email"/>
       <PasswordInput
          type="password"
          className='register-password'
          {...register('password')}
          placeholder='Enter your password..'
          required  
        />

        {/* <Button type="submit" onClick={goToLogin} */}
      
      
      <div className='d-flex justify-content-between  algin-item-center'>
        <Button type="submit" > Register </Button>
        <Link to="/login">Login</Link>
      </div>
    </form> 
    
  )
}

export default RegisterForm