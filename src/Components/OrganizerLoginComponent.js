import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class OrganizerLogin extends Component {
 

    render() {
        return (
            <div>
            <div className="auth-wrapper align-items-stretch aut-bg-img">
					<div className="flex-grow-1">
						<div className="h-100 d-md-flex align-items-end auth-side-img">
							<div className="col-sm-10 auth-content w-auto">
								<img src="/assets/static/theme/images/logo.svg" alt="" className="img-fluid" />
								<h1 className="text-white my-4">Welcome Back!</h1>
								<h4 className="text-white font-weight-normal">Signin to your account and get explore the Nextro Dashboard Template.<br />Do not forget to play with live customizer</h4>
							</div>
						</div>
						<div className="auth-side-form">
							<div className=" auth-content">
								<img src="/assets/static/theme/images/auth/auth-logo-dark.svg" alt="" className="img-fluid mb-4 d-block d-xl-none d-lg-none" />
								<h3 className="mb-4 f-w-400">Organizer Signin</h3>
								<form onSubmit={this.handleSubmit}>
									<div className="input-group mb-3">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="fal fa-phone"></i></span>
										</div>
										<input type="email" className="form-control" name="email" placeholder="Enter Your Phone Number" />
									</div>
									<div className="input-group mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="fal fa-lock-alt"></i></span>
										</div>
										<input type="password" className="form-control" placeholder="Password" name="password" />
									</div>
									<div className="form-group text-left mt-2" style={{ display : 'none'}}>
										<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input input-primary" id="customCheckdefh2" />
											<label className="custom-control-label" htmlFor="customCheckdefh2">Remeber Me.</label>
										</div>
									</div>
									<button type="submit" className="btn btn-block btn-primary mb-0">Signin</button>
								</form>

								
							</div>
						</div>
					</div>
				</div>

                 
        </div>
        )
    }
}

export default OrganizerLogin
