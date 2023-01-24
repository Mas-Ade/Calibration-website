import login1 from '../Assets/pictures/login1.jpg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const LoginPages = () => {
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

									<Form>
      								<Row className="mb-2">
        							<Form.Group as={Col} controlId="formGridCity">
          							<Form.Label>Id User</Form.Label>
          							<Form.Control />

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
          							<Form.Label>Password</Form.Label>
          							<Form.Control />
        							</Form.Group>
									</Row>
									<Button variant="primary" type="submit">Login </Button>
									</Form>
									
										{/* <form action="#" class="signin-form ">
			      							<div class="form-group mt-3">
                          <label class="form-control-placeholder" for="username">Username
			      								<input type="text" class="form-control" value=""></input>
                            </label>
			      							</div>
		            						<div class="form-group mt-3">
                            <label class="form-control-placeholder" for="password">Password
		              							<input id="password-field" type="password" class="form-control" name=""></input>
		             							</label>
		            						</div>
		            						  <div class="form-group mt-3">
		            							<button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
		           							 </div>
		          						</form> */}
		        			</div>
		      			</div>
					</div>
				</div>
			</div>
		</div>
  )
}


export default LoginPages;