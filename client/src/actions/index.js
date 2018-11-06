import axios from 'axios'
import {FETCH_USER} from './types'
//handled by redux-thunk (return a function instead of action creator)
export const fetchUser=()=>async dispatch=>{
     const res= await axios.get('/api/current_user')
     dispatch({ type:FETCH_USER, payload:res.data })
}

/*
before refactor ES7
export const fetchUser=()=>{
    return function(dispatch){
        axios.get('/api/current_user')
             .then(res=>dispatch({ type:FETCH_USER, payload:res }))
    }
}

export const fetchUser=()=>dispatch=>{
        axios.get('/api/current_user')
             .then(res=>dispatch({ type:FETCH_USER, payload:res }))
}
*/
