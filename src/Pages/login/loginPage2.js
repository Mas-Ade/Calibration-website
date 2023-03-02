
import { login } from '../../utils/axios'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import logoLogin from '../../Assets/pictures/loginweb3.png';
import logoSpan from '../../Assets/pictures/logo-span.png';



const LoginUser2 = () => {
const navigate = useNavigate()

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')

const onSubmit = async (e) => {
    e.preventDefault()
    try{

    const result = await login(username,password)
    localStorage.setItem('dataUser', JSON.stringify(result.data.data))
    navigate('/home')
    console.log(result)
    }
    catch(error){
    console.log(error)
    }

    }

    return(
       
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-9">
          <div className="card shadow" >
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block bg-light">
              <img className="img-fluid" style={{width :400 , height:500}} alt="logo dept. NIN" src={logoLogin}></img>
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">

                  <form onSubmit={(e) => onSubmit(e)} className="signin-form ">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <img className="img-fluid" style={{width :50 , height:50}} alt="logo dept. NIN" src={logoSpan}></img>
                      <span className="h1 fw-bold mb-0 mt-4">Calibration.</span>
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label fw-bold">Username</label>
                    <input type="text" className="form-control form-control-lg " required onChange={(e)=> setUsername(e.target.value) } value={username}/>
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className="form-label fw-bold" >Password</label>
                      <input id="password-field" type="password" className="form-control form-control-lg" required onChange={(e)=> setPassword(e.target.value) } value ={password} />
                      <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div className="pt-1 mb-4">
                       <button type="submit" className="btn btn-primary rounded">Login</button> 
                    </div>
                  </form>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    )
}

export default LoginUser2