import React, { useState, useEffect } from 'react';
import { useGetEvent } from "../../API/apiOrganizer";
import Header from '../../Components/partials/Header'
import Sidebar from '../../Components/partials/Sidebar'
import { Link } from 'react-router-dom';

const EventDetail = (props) => {
  console.log(props.match.params.id)
    let Id = props.match.params.id;
    const [eventId, setEventId] = useState(Id);
    const { data, loading, error } = useGetEvent(eventId);

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
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-body">
                  <h5 className="card-title">{ data?.title }</h5>
                  <p className="card-text">{ data?.body }</p>
                  <Link to="/fan/events"  className="btn btn-primary">Back to events</Link>
                </div>
              </div>

            </div>
        </div>
    </div>
    </section>
    </>
  );
};


export default EventDetail;
