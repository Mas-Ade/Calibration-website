import axios from "axios"

const url = 'http://localhost:8000'

export const register = (email,password) => {
return  axios.post(url + '/v1/userregister', {email, password})
}

export const login = (email,password) => {
return axios.post(url + '/v1/userlogin',  {email:email, password:password} )
}


