import axios from 'axios'
import {FETCH_USER} from './types'
//handled by redux-thunk (return a function instead of action creator)
const fetchUser=()=>{
    return function(dispatch){
        axios.get('/api/current_user')
             .then(res=>dispatch({ type:FETCH_USER, payload:res }))
    }
}