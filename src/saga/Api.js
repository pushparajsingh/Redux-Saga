import axios from "axios";

export function Api(data) {
	console.log(555, data)
    const body = {
      "user": {
        "email": data.email,
        "password":  data.password
      }
    }
    return axios.request({
	    method: 'post',
	    url: 'https://react-rails-api-demo.herokuapp.com/api/v1/signin',
	    data: body
  	});
}

export function Apidata(token)

{
    return axios.get('https://react-rails-api-demo.herokuapp.com/api/v1/posts',{headers: {Authorization:`Bearer ${token}`}})
    
}


export function ApiPost(data) {
  console.log('Api invoked',data);
  let token = localStorage.getItem('token');
  const user_id = localStorage.getItem('user_id')
  const body = {
   "post":{
      "title":data.title,
      "description":data.description,
      "user_id":user_id
    }
  }
  // console.log("body",body);
  return axios.post('https://react-rails-api-demo.herokuapp.com/api/v1/posts',body,{headers:{Authorization:`${token}`}})
}

export function ApiDelete(id){  
  console.log(id)
  console.log("deleteData")
  const token=localStorage.getItem('token')
  //const userid=localStorage.getItem('user_id') 
  console.log(574,token)
  return axios.delete(`https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`,{headers: {Authorization: `${token}`}})
  }


  export function ApiUpdate(id,data) {
    console.log('Api invoked',data);
    console.log('Api invoked',id);

    let token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id')
    const body = {
     "post":{
        "title":data.title,
        "description":data.description,
        "user_id":user_id
      }
    }
    // console.log("body",body);
    return axios.put(`https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`,body,{headers:{Authorization:`${token}`}})
  }

  export function ApiSingle(id) {
    // console.log('Api invoked',id);
    let token = localStorage.getItem('token');
    return axios.get(`https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`,{headers:{Authorization:`${token}`}})
  }