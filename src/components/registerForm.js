import React from 'react'
import { useForm } from "react-hook-form";


const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(JSON.stringify(data));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} placeholder="First name" />

      <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />
      <input  type="password"  {...register("password", { pattern: /^[A-Za-z]+$/i })} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      

      <input type="submit" />
    </form>
    </div>
    
  )
}

export default RegisterForm