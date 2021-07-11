import React, { useState } from 'react';
import Header from '../../Components/Organizer/Header'
import Sidebar from '../../Components/partials/Sidebar'
import { useGetEmpolyees } from "../../API/apiOrganizer";

const Employees = () => {

    const { data, loading, error } = useGetEmpolyees({});
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
              <div className="card">
                <div className="card-body">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Code</th> 
                        </tr>
                    </thead>
                    <tbody>
                    {data?.map((data, index) => {
                        return (
                        <tr>
                        <th scope="row">{ index + 1}</th>
                        <td>{ data?.firstName } { data?.lastName }</td>
                        <td>{ data?.emailAddress }</td>
                        <td>{ data?.phoneNumber }</td>
                        <td>{ data?.employeeCode }</td>
                        </tr>
                        )
                    })}
                    </tbody>
                    </table>
                </div>
              </div>

            </div>
        </div>
    </div>
    </section>
    </>
  );
};


export default Employees;
