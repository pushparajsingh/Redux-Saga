import { GET_LOGIN_REQUESTED, GET_DATA_REQUESTED, GET_SHOW_POST_REQUESTED,GET_DELETE_REQUESTED,GET_UPDATE_REQUESTED,GET_SINGLE_REQUESTED } from "../constants"
export const getdata = (data) =>{
    return({
        type:GET_LOGIN_REQUESTED,
        payload:data
    })
}

export const showdata = () =>{
    return({
        type:GET_DATA_REQUESTED
    })
}

export const addPost = (data) =>{
    // console.log("action page invoked",data)
    return({
        type:GET_SHOW_POST_REQUESTED,
        payload:data
    })
}

export const deletePost = (id) =>{
    console.log("action page invoked",id)
    return {
        type:GET_DELETE_REQUESTED,
        payload:id
    }
}

export const uPost = (data,id) =>{
    // console.log("action page invoked",id)
    return {
        type:GET_UPDATE_REQUESTED,
        payload:id,data
    }
}

export const Vpost = (id) =>{
// console.log(99,id);
    return{
      type:GET_SINGLE_REQUESTED,
      payload:id
    }
}