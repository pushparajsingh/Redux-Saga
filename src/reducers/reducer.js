import { GET_LOGIN_SUCCESS,GET_LOGIN_FAILURE,GET_DATA_SUCCESS, GET_SHOW_POST_SUCCESS,GET_DELETE_SUCCESS,GET_SINGLE_SUCCESS } from "../constants"
const initialState = {
    // user:[],
    dashboard:[],
    delete:[],
    single:[]
}

const LoginReducer = (state=initialState,action) => {

    switch(action.type){
        case GET_LOGIN_SUCCESS:
            return ({
                ...state,
                user:action.payload
            })

        case GET_LOGIN_FAILURE:
            return ({
                ...state,
            })

        case GET_DATA_SUCCESS:
                return ({
                    ...state,
                dashboard:action.user
                })
        case GET_SHOW_POST_SUCCESS:
            console.log(4111,action.user);
            return({
                ...state,
                dashboard:action.user
            })
        case GET_DELETE_SUCCESS:
            // console.log(4111,action.user);
            return({
                ...state,
                 delete:action.user
            })

        case GET_SINGLE_SUCCESS:
             return({
                 ...state,
                   single:action.sin
              })
        
        default :
        return state
    }
}
export default LoginReducer;