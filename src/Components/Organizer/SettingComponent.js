import React, { useState, useEffect } from 'react';
import Header from '../../Components/Organizer/Header'
import Sidebar from '../../Components/partials/Sidebar'
import { useGetSetting } from "../../API/apiOrganizer";

const OrgSetting = () => {

    const { data, loading, error } = useGetSetting({});
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
                <div className="card-body">
                   <form>
                   <h1 className="form-head">Basic Details</h1>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Business Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Company name" value={ data?.name } />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">About Your Business/Company</label>
                        <textarea class="form-control" rows="10" value={ data?.description }></textarea>
                    </div>
                    <h1 className="form-head">Other Details</h1>
                    <div className="row">
                        <div className="col-md-6">
                        <div class="form-group">
                        <label for="exampleInputEmail1">SubDomain</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Company name" value={ data?.subdomain } />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div class="form-group">
                        <label for="exampleInputEmail1">Website URL</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Company name" value={ data?.website_url } />
                    </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div class="form-group">
                        <label for="exampleInputEmail1">Business Location</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Company name" value={ data?.location } />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div class="form-group">
                        <label for="exampleInputEmail1">Industry</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Company name" value={ data?.industry } />
                    </div>
                        </div>
                    </div>
                    {/* <button disabled class="btn btn-primary">Submit</button> */}
                    </form>
                </div>
              </div>

            </div>
        </div>
    </div>
    </section>
    </>
  );
};


export default OrgSetting;
