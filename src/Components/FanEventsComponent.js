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
   {loading &&  <img src="/dark-loader.gif" style={{marginLeft: "500px",
    marginTop: "150px"}} />}
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
                                        <p className="task-due"><a href="" className="text-secondary bold"> Start Date : 23</a></p>
                                        <p className="task-due"><a href="" className="text-secondary bold"> End Date : 23</a></p>
                                        <p className="task-due"><a href="" className="text-secondary bold"> Location : 23</a></p>
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
