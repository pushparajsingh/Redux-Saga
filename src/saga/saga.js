import {GET_LOGIN_FAILURE,GET_LOGIN_REQUESTED,GET_LOGIN_SUCCESS,GET_DATA_REQUESTED,GET_DATA_SUCCESS, GET_SHOW_POST_REQUESTED,GET_SHOW_POST_SUCCESS,GET_DELETE_REQUESTED,GET_DELETE_SUCCESS, GET_UPDATE_REQUESTED,GET_SINGLE_REQUESTED,GET_SINGLE_SUCCESS} from "../constants";
import { call, put, takeEvery } from 'redux-saga/effects'
import {Apidata,Api,ApiPost,ApiDelete,ApiUpdate,ApiSingle} from './Api'

function* fetchUser(action)
{
  try {
  const response = yield call(Api,action.payload);
  localStorage.setItem('user-info',JSON.stringify(response.data));
  localStorage.setItem('token',(response.data.token));
  localStorage.setItem('user_id',(response.data.user.id));

  yield put({type:GET_LOGIN_SUCCESS, user:response.data }) 
  }
  
  catch(e)
  {
 yield put ({ type:GET_LOGIN_FAILURE,error:e.message});
  }
}

function* fetchData()
{
  try
  {
   let token = localStorage.getItem('token');
    const responce = yield call(Apidata,token);
    yield put({type:GET_DATA_SUCCESS, user:responce.data }) 
  }
  catch(e)
  {
    
  }
}

function* fetchPost(data)
{
  try {
  // console.log('saga data invoked',data);
  let responce = yield call(ApiPost,data.payload);
  yield put({type:GET_SHOW_POST_SUCCESS,user:responce.data})
  }

  catch(e){

  }
}

function* fetchDelete(action)
{console.log("fetch delete run",action)
 
  try{
  const reponce = yield call(ApiDelete,action.payload)
  yield put({type:GET_DELETE_SUCCESS,user:reponce.data})
  }
  catch(e){
   console.log(e.message);
  }
}
function* fetchUpdate(e)
{
  // console.log(44,e.payload,e.data);
  try{
     yield call(ApiUpdate,e.payload,e.data); 
  }
  catch(e){
    console.log(e.message);
  }

}

function* fetchSingle(id)
{
// console.log('ram',id.payload);
  try{
  const response = yield call(ApiSingle,id.payload);
  // console.log(888,response.data.post)

  yield put({type:GET_SINGLE_SUCCESS,sin:response.data.post})
  }
  catch(e){
   
    console.log(e.message);
  }
}

function* mySaga() {
 
  yield takeEvery(GET_LOGIN_REQUESTED, fetchUser);
  yield takeEvery(GET_DATA_REQUESTED,fetchData);
  yield takeEvery(GET_SHOW_POST_REQUESTED,fetchPost)
  yield takeEvery(GET_DELETE_REQUESTED,fetchDelete)
  yield takeEvery(GET_UPDATE_REQUESTED,fetchUpdate);
  yield takeEvery(GET_SINGLE_REQUESTED,fetchSingle);
}


export default mySaga