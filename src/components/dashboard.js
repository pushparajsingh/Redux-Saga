import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { showdata,deletePost } from "../actions/action";
import { useNavigate } from "react-router-dom";
import Viewpost from "./viewpost";

export default function Dashboard()
{   const del = useSelector(state => state.LoginReducer.delete)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(showdata());
     },[del]);
    
     useEffect(()=>{
        dispatch(showdata());
     },[]);

    
    const data = useSelector(state => state.LoginReducer.dashboard);
    return(
        <>
        <button onClick={()=> navigate('/addpost')}>Add Post</button>
        <table border={'2px solid black'} cellPadding={'20px'} cellSpacing={'0px'} align={'center'}>
            <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>user_id</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        { data?.posts?.map( (item,index) => {
            return (<tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.user_id}</td>
                <td><button style={{backgroundColor:'red',padding:'7px',borderRadius:'25px',padding:'10px'}} onClick={()=>dispatch(deletePost(item.id))}>Delete</button>&nbsp;&nbsp;
                <button style={{backgroundColor:'yellow',padding:'7px',borderRadius:'25px',padding:'10px'}} onClick={()=>navigate(`/viewpost/${item.id}`)}>View</button>&nbsp;&nbsp;
                <button style={{backgroundColor:'green',padding:'7px',borderRadius:'25px',padding:'10px'}} onClick={()=>navigate(`/updatepost/${item.id}`)}>Update</button></td>
            </tr>)}
          )}
          </tbody>
        </table>

        </>
    )

}