
import { login } from '../../utils/axios'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import login2 from '../../Assets/pictures/login2.png';
import Footer from '../../Components/layout/footer'
import background from '../../Assets/css/bodyLogin.css'

const LoginUser = () => {
const navigate = useNavigate()

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const onSubmit = async (e) => {
    e.preventDefault()
    try{

    const result = await login(email,password)
    localStorage.setItem('dataUser', JSON.stringify(result.data.data))
    navigate('/home')
    console.log(result)
    }
    catch(error){
    console.log(error)
    }

    }

    return(
       
    <div className='ftco-section '  >
		<div className="container ">
        <div className="row justify-content-center ">
        <div className="col-md-7 col-lg-5 mt-5 p-0 mb-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded background "> 
        <div className="wrap">
        <div className="card-img ">
               			<img className="img-fluid max-width: 100%  " alt="logo dept. NIN" src={login2}></img>
                 				</div>

 							  		<div className="login-wrap p-4 p-md-4">
 			      					<div className="w-100 ">
			      						<h1 className="mb-2 text-dark font-weight-bold ">Login</h1>
			      					</div>

                                    <form onSubmit={(e) => onSubmit(e)} className="signin-form ">

			      							<div className="form-group mt-3 mb-3">
                                            <label className="form-control-placeholder">Username</label>
			      							<input type="text" className="form-control form-control-lg " required onChange={(e)=> setEmail(e.target.value) } value={email}/>	
			      							</div>

		            						<div className="form-group mb-5">
                                            <label className="form-control-placeholder" >Password</label>
		              						<input id="password-field" type="password" className="form-control form-control-lg" required onChange={(e)=> setPassword(e.target.value) } value ={password} />
		              						<span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
		            						</div>
                                            
		            						<div className="form-group">
		            						<button type="submit" className="form-control btn-lg  btn btn-primary rounded submit px-5">Login</button>
		           							</div>
		          						</form>
                         
            {/* <form onSubmit={(e) => onSubmit(e)}>
                <label>email</label>
                <input onChange={(e)=> setEmail(e.target.value) } value={email} type='email'/> 

                <label>password</label>
                <input onChange={(e)=> setPassword(e.target.value) } value ={password} type='password'/> 
                <button> submit</button>

            </form> */}
            </div>
            </div>
        </div>    
        </div>
		</div>
        <Footer />
        </div>

    )
}


export default LoginUser;


















// import login1 from '../Assets/pictures/login1.jpg';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import { useForm } from "react-hook-form"
// import { useEffect, useState } from 'react';
// import axios from 'axios';


// const LoginPages = () => {

// 	const { register, handleSubmit , formState: { errors } } = useForm();

// 	const url = `http://10.202.100.84:3003/api/getdata_staff`
//     const getDB = async () => {
//     const datas = await axios.get(url)
//     return datas
//     }

// 	const [ dbUser, setDbUser] = useState([])
	
// 	useEffect (() => {
//     getDB().then((result) => {
//     setDbUser (result.data.data)
//     console.log("result :", dbUser)
//     })   
//      },[])

// 	const onSubmit = datas => {
// 	console.log(datas)
// 	alert(JSON.stringify(datas))
// 	}

//   return(
// 		 <div className="ftco-section">
// 		  <div class="container">
// 			  <div class="row justify-content-center bor">
// 				  <div class="col-md-7 col-lg-5 bg-light shadow p-3 mb-5"> 
// 					  <div class="wrap bg-warning">
//             			<div class="card-img mt-2">
//                 			<img class="img-fluid max-width: 100%" alt="logo dept. NIN" src={login1}></img>
//                 				</div>

// 							  		<div class="login-wrap p-4 p-md-4">
// 			      					<div class="w-100 ">
// 			      						<h1 class="mb-2 text-dark font-weight-bold ">Login</h1>
// 			      					</div>

// 									<Form onSubmit={handleSubmit(onSubmit)}>
//       								<Row className="mb-2">
//         							<Form.Group as={Col} controlId="formGridCity">
//           							<Form.Label>ID USER</Form.Label>
//           							<Form.Control {...register("staff_name", { required: true })} />
// 									{errors?.staff_name?.type === "required" && <p>Masukan ID USER</p>}

//         							</Form.Group>
// 									<Form.Group as={Col} controlId="formGridCity">
//           							<Form.Label>Autorize</Form.Label>
//           							<Form.Select defaultValue="Choose...">
// 									<option>....</option>
// 									<option>Production</option>
// 									<option>Engineering</option>
// 									<option>Admin</option>
									
// 									</Form.Select>
// 									</Form.Group>
// 									</Row>
// 									<Row className="mb-3">
//         							<Form.Group as={Col} controlId="formGridCity">
//           							<Form.Label>PASSWORD</Form.Label>
//           							<Form.Control type='password' {...register("password", { required: true })} />
//         							{errors?.password?.type === "required" && <p>Masukan PASSWORD</p>}
// 									</Form.Group>
// 									</Row>
// 									<Button onClick={event =>  window.location.href='/app'} variant="primary" type="submit">Login </Button>
// 									</Form>
									
// 		        			</div>
// 		      			</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//   )
// }


// export default LoginPages;