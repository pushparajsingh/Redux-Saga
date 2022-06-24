import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uPost } from '../actions/action';


export default function UpdatePost() {
  const {id} = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const onSubmit = data => {dispatch(uPost(data,id))
  // console.log('singledata invoked',data);
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("title", { required: true })} placeholder='update title' style={{padding:'5px'}}/><br/><br/>
      {errors.title && <span>This field is required</span>}<br/>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("description", { required: true })} placeholder='update description' style={{padding:'5px'}}/><br/><br/>
      {/* errors will return when field validation fails  */}
      {errors.description && <span>This field is required</span>}<br/><br/>
      
      <input type="submit" />
    </form>
    </div>
  )
}
