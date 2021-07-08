import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav className="pc-sidebar ">
		<div className="navbar-wrapper">
			<div className="m-header">
				<a href="index.html" className="b-brand">
					<img src="/assets/static/theme/images/logo.svg" alt="" className="logo logo-lg" />
					<img src="/assets/static/theme/images/logo-sm.svg" alt="" className="logo logo-sm" />
				</a>
			</div>
			<div className="navbar-content">
				<ul className="pc-navbar">
                    <li className="pc-item pc-caption">
                        <label>Navigation</label>
                    </li>
                    <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link "><span className="pc-micon"><i data-feather="home"></i></span><span className="pc-mtext">Dashboard</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                        <ul className="pc-submenu">
                            <li className="pc-item"><a className="pc-link" href="index.html">Analytics</a></li>
                            <li className="pc-item"><a className="pc-link" href="dashboard-sale.html">Sales</a></li>
                        </ul>
                    </li>
                    <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link"><span className="pc-micon"><i data-feather="layers"></i></span><span className="pc-mtext">Layouts</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                        <ul className="pc-submenu">
                            <li className="pc-item"><a target="_blank" className="pc-link" href="#!">Vertical</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-collapse.html">Collapse</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-horizontal.html">Horizontal</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-modern.html">Modern</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-advance.html">Advance</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-overlay.html">Overlay</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-topbar.html">Topbar</a></li>
                        </ul>
                    </li>
                    <li className="pc-item pc-caption">
                        <label>Other</label>
                    </li>
                    <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link"><span className="pc-micon"><i data-feather="menu"></i></span><span className="pc-mtext">Menu levels</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                        <ul className="pc-submenu">
                            <li className="pc-item"><a className="pc-link" href="#!">Menu Level 2.1</a></li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link">Menu level 2.2<span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="#!">Menu level 3.1</a></li>
                                    <li className="pc-item"><a className="pc-link" href="#!">Menu level 3.2</a></li>
                                </ul>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link">Menu level 2.3<span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="#!">Menu level 3.1</a></li>
                                    <li className="pc-item"><a className="pc-link" href="#!">Menu level 3.2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="pc-item"><a href="sample-page.html" className="pc-link "><span className="pc-micon"><i data-feather="sidebar"></i></span><span className="pc-mtext">Sample page</span></a></li>
                </ul>
			</div>
		</div>
	</nav>


	<nav className="pc-sidebar ">
		<div className="navbar-wrapper">
			<div className="m-header">
				<a href="index.html" className="b-brand">
					<img src="/assets/static/theme/images/logo.svg" alt="" className="logo logo-lg" />
					<img src="/assets/static/theme/images/logo-sm.svg" alt="" className="logo logo-sm" />
				</a>
			</div>
			<div className="navbar-content">
				<ul className="pc-navbar">
                    <li className="pc-item pc-caption">
                        <label>Navigation</label>
                    </li>
                    <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link "><span className="pc-micon"><i data-feather="home"></i></span><span className="pc-mtext">Dashboard</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                        <ul className="pc-submenu">
                            <li className="pc-item"><a className="pc-link" href="index.html">Analytics</a></li>
                            <li className="pc-item"><a className="pc-link" href="dashboard-sale.html">Sales</a></li>
                        </ul>
                    </li>
                    <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link"><span className="pc-micon"><i data-feather="layers"></i></span><span className="pc-mtext">Layouts</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                        <ul className="pc-submenu">
                            <li className="pc-item"><a target="_blank" className="pc-link" href="#!">Vertical</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-collapse.html">Collapse</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-horizontal.html">Horizontal</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-modern.html">Modern</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-advance.html">Advance</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-overlay.html">Overlay</a></li>
                            <li className="pc-item"><a target="_blank" className="pc-link" href="layout-topbar.html">Topbar</a></li>
                        </ul>
                    </li>
                    <li className="pc-item pc-caption">
                        <label>Other</label>
                    </li>
                    <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link"><span className="pc-micon"><i data-feather="menu"></i></span><span className="pc-mtext">Menu levels</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                        <ul className="pc-submenu">
                            <li className="pc-item"><a className="pc-link" href="#!">Menu Level 2.1</a></li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link">Menu level 2.2<span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="#!">Menu level 3.1</a></li>
                                    <li className="pc-item"><a className="pc-link" href="#!">Menu level 3.2</a></li>
                                </ul>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link">Menu level 2.3<span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="#!">Menu level 3.1</a></li>
                                    <li className="pc-item"><a className="pc-link" href="#!">Menu level 3.2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="pc-item"><a href="sample-page.html" className="pc-link "><span className="pc-micon"><i data-feather="sidebar"></i></span><span className="pc-mtext">Sample page</span></a></li>
                </ul>
			</div>
		</div>
	</nav>

            </div>
        );
    }
}

export default Sidebar;