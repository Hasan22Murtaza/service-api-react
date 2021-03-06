import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.Logout = this.Logout.bind(this);
	}

	Logout() {
		
		localStorage.clear();
		this.setState({
			redirect: true
		});
	}

    render() {
		if (this.state.redirect) {
			return <Redirect push to="/" />;
		}

        return (
    <div>
     <header className="pc-header ">
		<div className="header-wrapper">
			<div className="mr-auto pc-mob-drp">
				<ul className="list-unstyled">
					<li className="dropdown pc-h-item">
						<Link to="/fan/events" className="pc-head-link active dropdown-toggle arrow-none mr-0">
							Events List
						</Link>
					</li>
					<li className="dropdown pc-h-item">
					<Link to="/fan/vanues" className="pc-head-link active dropdown-toggle arrow-none mr-0">
							Vanues
						</Link>
					</li>
					
				</ul>
			</div>
			<div className="ml-auto">
				<ul className="list-unstyled">
					<li className="dropdown pc-h-item">
						<a className="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
							<i data-feather="search"></i>
						</a>
						<div className="dropdown-menu dropdown-menu-right pc-h-dropdown drp-search">
							<form className="px-3">
								<div className="form-group mb-0 d-flex align-items-center">
									<i data-feather="search"></i>
									<input type="search" className="form-control border-0 shadow-none" placeholder="Search here. . ." />
								</div>
							</form>
						</div>
					</li>
					
					
					<li className="dropdown pc-h-item">
						<a className="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
							<img src="/assets/static/theme/images/user/avatar-2.jpg" alt="user-image" className="user-avtar" />
							<span>
								<span className="user-name">Joseph William</span>
								<span className="user-desc">Fan</span>
							</span>
						</a>
						<div className="dropdown-menu dropdown-menu-right pc-h-dropdown">
							<div className=" dropdown-header">
								<h6 className="text-overflow m-0">Welcome !</h6>
							</div>
							<Link href="#!" to={"/fan/profile"} className="dropdown-item">
											<i data-feather="user"></i>
											<span>Profile</span>
										</Link>
							
							<a href="#!" onClick={() => this.Logout()} className="dropdown-item">
								<i data-feather="power"></i>
								<span>Logout</span>
							</a>
						</div>
					</li>
				</ul>
			</div>

		</div>
	</header>


            </div>
        );
    }
}

export default Header;