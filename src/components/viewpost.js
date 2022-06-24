import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Vpost } from '../actions/action'

export default function Viewpost() {
    const {id}= useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(Vpost(id));
    },[])
    const view = useSelector(state => state.LoginReducer.single);
  return (
    <div>
      <table border={'2px solid black'} cellPadding={'20px'} cellSpacing={'0px'} align={'center'}>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>description</th>
          <th>user_id</th>
        </tr>
          <tr>
        <td>{view.id}</td>
        <td>{view.title}</td> 
        <td>{view.description}</td>
         <td>{view.user_id}</td>
         </tr>
         </table>
      
    </div>
  )
}
