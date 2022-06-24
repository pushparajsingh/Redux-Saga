import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { getdata } from '../actions/action';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(getdata(data));
    navigate('/dashboard');
  }
  

  return (<>
  
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("email", { required: true })} />&nbsp;&nbsp;
      {errors.email && <span style={{color:"red"}}>This email is required</span>}
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span style={{color:"red"}}>This password is required</span>}&nbsp;&nbsp;
      
      <input type="submit" />
    </form>
     </>
  );
}