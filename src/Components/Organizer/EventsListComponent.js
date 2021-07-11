import React, { useState, useEffect } from 'react';
import { useGetEvents } from "../../API/apiOrganizer";
import Header from '../../Components/Organizer/Header'
import Sidebar from '../../Components/partials/Sidebar'
import { Link } from 'react-router-dom';

const EventsList = ({}) => {
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
    {loading &&  <img src="/dark-loader.gif" style={{marginLeft: "500px",
    marginTop: "150px"}} />}
    <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Workspaces</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#!">Home</a></li>
                            <li class="breadcrumb-item"><a href="#!">Task</a></li>
                            <li class="breadcrumb-item">Task Board</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 col-lg-12 filter-bar">
            <nav class="navbar m-b-30 p-10">
                    <ul class="nav">
                        <li class="nav-item f-text active">
                            <a class="nav-link text-secondary" href="#!">Filter: <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-secondary" href="#" id="bydate" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-clock"></i> By Date</a>
                            <div class="dropdown-menu" aria-labelledby="bydate">
                                <a class="dropdown-item" href="#!">Show all</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#!">Today</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-secondary" href="#" id="bystatus" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-chart-line"></i> By Status</a>
                            <div class="dropdown-menu" aria-labelledby="bystatus">
                                <a class="dropdown-item" href="#!">Show all</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#!">Open</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-secondary" href="#" id="bypriority" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-list-ol"></i> By Priority</a>
                            <div class="dropdown-menu" aria-labelledby="bypriority">
                                <a class="dropdown-item" href="#!">Show all</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#!">Highest</a>
                            </div>
                        </li>
                    </ul>
                    <div class="nav-item nav-grid f-view">
                       
                       <button class="btn btn-success btn-sm btn-round" data-toggle="modal" data-target="#notification-modal"><i class="feather icon-plus"></i> Create Event</button>

                       
                    </div>
                </nav>
                <div className="row">
                   {data.map((data, index) => {
                       return (
                        <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                        <div className="card card-border-c-blue">
                            <div className="card-header">
                            <Link to={'/organizer/events/'+ data.id} className="text-secondary">#{data?.id}. {data?.title ? data?.title : ''} </Link>
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


export default EventsList;
