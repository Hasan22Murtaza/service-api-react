import React, { useState, useEffect } from 'react';
import { useGetProfile } from "../API/apiFanSite";
import Header from '../Components/partials/Header'
import Sidebar from '../Components/partials/Sidebar'
import moment from 'moment';

const Profile = () => {

    const { data, loading, error } = useGetProfile({});
    console.log(data);

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
                  Fan Information
                </div>
                <div className="card-body">
                    <p><span style={{fontWeight:"bold"}}>Name</span> { data?.first_name } { data?.last_name }</p><br/>
                    <p><span style={{fontWeight:"bold"}}>Email</span> { data?.email }</p><br/>
                    <p><span style={{fontWeight:"bold"}}>Phone</span> { data?.phone }</p><br/>
                    <p><span style={{fontWeight:"bold"}}>Gender</span> { data?.gender }</p><br/>
                    <p><span style={{fontWeight:"bold"}}>Date Of Birth</span> {moment(data?.dob).format("DD MMM YYYY h:mm A")}</p><br/>

                </div>
              </div>

            </div>
        </div>
    </div>
    </section>
    </>
  );
};


export default Profile;
