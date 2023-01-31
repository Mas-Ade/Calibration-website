import login1 from '../Assets/pictures/login1.jpg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react';
import axios from 'axios';


const LoginPages = () => {

	const { register, handleSubmit , formState: { errors } } = useForm();

	const url = `http://10.202.100.84:3003/api/getdata_staff`
    const getDB = async () => {
    const datas = await axios.get(url)
    return datas
    }

	const [ dbUser, setDbUser] = useState([])
	
	useEffect (() => {
    getDB().then((result) => {
    setDbUser (result.data.data)
    console.log("result :", dbUser)
    })   
     },[])

	const onSubmit = datas => {
	console.log(datas)
	alert(JSON.stringify(datas))
	}

  return(
		 <div class="ftco-section">
		  <div class="container">
			  <div class="row justify-content-center bor">
				  <div class="col-md-7 col-lg-5 bg-light shadow p-3 mb-5"> 
					  <div class="wrap bg-warning">
            			<div class="card-img mt-2">
                			<img class="img-fluid max-width: 100%" alt="logo dept. NIN" src={login1}></img>
                				</div>

							  		<div class="login-wrap p-4 p-md-4">
			      					<div class="w-100 ">
			      						<h1 class="mb-2 text-dark font-weight-bold ">Login</h1>
			      					</div>

									<Form onSubmit={handleSubmit(onSubmit)}>
      								<Row className="mb-2">
        							<Form.Group as={Col} controlId="formGridCity">
          							<Form.Label>ID USER</Form.Label>
          							<Form.Control {...register("staff_name", { required: true })} />
									{errors?.staff_name?.type === "required" && <p>Masukan ID USER</p>}

        							</Form.Group>
									<Form.Group as={Col} controlId="formGridCity">
          							<Form.Label>Autorize</Form.Label>
          							<Form.Select defaultValue="Choose...">
									<option>....</option>
									<option>Production</option>
									<option>Engineering</option>
									<option>Admin</option>
									
									</Form.Select>
									</Form.Group>
									</Row>
									<Row className="mb-3">
        							<Form.Group as={Col} controlId="formGridCity">
          							<Form.Label>PASSWORD</Form.Label>
          							<Form.Control type='password' {...register("password", { required: true })} />
        							{errors?.password?.type === "required" && <p>Masukan PASSWORD</p>}
									</Form.Group>
									</Row>
									<Button variant="primary" type="submit">Login </Button>
									</Form>
									
		        			</div>
		      			</div>
					</div>
				</div>
			</div>
		</div>
  )
}


export default LoginPages;