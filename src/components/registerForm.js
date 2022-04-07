
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Input, UnstyledButton} from '@mantine/core'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import '../styles/registerform.css'


const RegisterForm = () => {
  const [passwordShow1, setPasswordShow1] = useState(true)
   const [passwordShow2, setPasswordShow2] = useState(true)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
     console.log(JSON.stringify(data));
     if (data.current_password !== null) {
      if (data.confirm_password === data.password) {
        console.log('successfully')
      } else {
        console.log('not successfully')
      }
     }
  
  }
  return (
    <div className='register'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='p-4'>Register Form</h1>
      <Input {...register("firstName", { required: true })}  className='input' placeholder="First name" />

      <Input className='input' {...register("lastName", { minLength: 2 })} placeholder="Last name" />
      <Input className='input'type="email" {...register("email", { required: true })} placeholder="Email" />

      <Input
          className='input'
          type={passwordShow1 ? 'password' : null}
          {...register('password')}
          placeholder='Enter your password..'
          required
          rightSection={
            <UnstyledButton
              onClick={() => {
                setPasswordShow1(!passwordShow1)
              }}
            >
              {passwordShow1 ? <BsEyeSlashFill /> : <BsEyeFill />}
            </UnstyledButton>
          }
        />

       <Input
         className='input'
          type={passwordShow2 ? 'password' : null}
          {...register('confirm_password')}
          placeholder='Confirm password..'
          required
          rightSection={
            <UnstyledButton
              onClick={() => {
                setPasswordShow2(!passwordShow2)
              }}
            >
              {passwordShow2 ? <BsEyeSlashFill /> : <BsEyeFill />}
            </UnstyledButton>
          }
        />
        {/* <div className='select-title d-flex justify-content-evenly'>
          <h5>Enter your gender</h5>
            <select className='select-text' {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
          </select>
       </div> */}
        <input type="submit" />
       {/* <Button type='submit' className='btn-lg' variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Register</Button> */}
      {/* <Button type="submit" >Register</Button> */}
    </form>
    </div>
    
  )
}

export default RegisterForm