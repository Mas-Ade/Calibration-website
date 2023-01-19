import login1 from '../Assets/pictures/login1.jpg';

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
							  <div class="login-wrap p-4 p-md-5">
			      					<div class="w-100 ">
			      						<h1 class="mb-4 .fs-2">Login</h1>
			      					</div>
										<form action="#" class="signin-form ">
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
		          						</form>
		        			</div>
		      			</div>
					</div>
				</div>
			</div>
		</div>
  )
}


export default LoginPages;