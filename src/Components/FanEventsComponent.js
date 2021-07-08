import React, { useState, useEffect } from 'react';
import { useGetEvents } from "../API/apiFanSite";
import Header from '../Components/partials/Header'
import Sidebar from '../Components/partials/Sidebar'
import { Link } from 'react-router-dom';

const FanEvents = ({}) => {
    const [params, setParams] = useState({});
    const [page, setPage] = useState(0);
    const { data, loading, error } = useGetEvents(params, page);

  return (
    <>

        <div className="loader-bg">
        <div className="loader-track">
            <div className="loader-fill"></div>
        </div>
    </div>

    <div className="pc-mob-header pc-header">
		<div className="pcm-logo">
			<img src="/assets/static/theme/images/logo.svg" alt="" className="logo logo-lg" />
		</div>
		<div className="pcm-toolbar">
			<a href="#!" className="pc-head-link" id="mobile-collapse">
				<div className="hamburger hamburger--arrowturn">
					<div className="hamburger-box">
						<div className="hamburger-inner"></div>
					</div>
				</div>
			</a>
			<a href="#!" className="pc-head-link" id="headerdrp-collapse">
				<i data-feather="align-right"></i>
			</a>
			<a href="#!" className="pc-head-link" id="header-collapse">
				<i data-feather="more-vertical"></i>
			</a>
		</div>
	</div>


	<Sidebar />

   <Header />

    <section className="pc-container">
    <div className="pcoded-content">
        
        <div className="row">
            <div className="col-xl-12 col-lg-12 filter-bar">
                
                <div className="row">
                   {data.map((data, index) => {
                       return (
                        <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                        <div className="card card-border-c-blue">
                            <div className="card-header">
                            <Link to={'/fan/events/'+ data.id} className="text-secondary">#{data?.id}. {data?.title ? data?.title : ''} </Link>
                                <span className="label label-primary float-right">Last Update: 28 January, 2015 </span>
                            </div>
                            <div className="card-body card-task">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="task-detail">{ data?.body }</p>
                                        <p className="task-due"><a href="" className="text-secondary bold"> Tasks : 23</a></p>
                                        <p className="task-due"><a href="" className="text-secondary bold"> Issues : 23</a></p>
                                        <p className="task-due"><a href="" className="text-secondary bold"> Discusssions : 23</a></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="task-list-table">
                                    <a href="#!"><img className="img-fluid img-radius m-r-5" src="/assets/static/theme/images/user/avatar-2.jpg" alt="1" /></a>
                                    <a href="#!"><img className="img-fluid img-radius m-r-5" src="/assets/static/theme/images/user/avatar-1.jpg" alt="1" /></a>
                                    <a href="#!" 
                                        data-toggle="modal" data-target="#team-member-modal"
                                    ><i className="fas fa-plus"></i></a>
                                </div>
                                <div className="task-board">
                                    <div className="dropdown-secondary dropdown">
                                        <button className="btn waves-effect waves-light btn-primary btn-sm dropdown-toggle b-none txt-muted" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                                className="fas fa-bars"></i></button>
                                        <div className="dropdown-menu" aria-labelledby="dropdown3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                            <a className="dropdown-item" href="#!">Archive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                       )
                   })} 


                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  );
};


export default FanEvents;
