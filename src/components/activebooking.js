import React from 'react'
import '../booking.css';
export default function Activebooking() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">




                    <div className="col-lg-3 col-md-3 p-0 ">
                        <div className="side-navbar" id="side-navbar-color">
                            <div className="logo">
                                <a href="/dashboard"><img src="content/img/Skaii Logo Final-01.png" alt="logo" /></a>
                            </div>

                            <div className="menu mt-4">

                                <ul className="list-iteams">

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Dashboards-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">

                                                    <a href="/dashboard" > <i className="fa-solid fa-gauge"></i> Dashboards </a>

                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                </div>
                                            </button>
                                            <div className="collapse" id="Dashboards-collapse" >
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed Active"
                                                data-bs-toggle="collapse" data-bs-target="#Bookings-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-brands fa-app-store-ios"></i>Bookings
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse show" id="Bookings-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/activebooking" className="link-body-emphasis d-inline-flex text-decoration-none rounded Active">- Active Bookings</a></li>
                                                    <li><a href="/cancelledbookings" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Cancelled Bookings</a></li>
                                                    <li><a href="/completedbookings" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Completed Bookings</a></li>
                                                    <li><a href="/quotes" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Quotes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Admin-Portal-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-address-book"></i> Admin Portal
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Admin-Portal-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/configuration" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Configuration</a></li>
                                                    <li><a href="/faq" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- FAQs</a></li>
                                                    <li><a href="/testimonials" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Testimonials</a></li>

                                                    <li><a href="/garage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Garage</a></li>
                                                    <li><a href="/captains" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Captains </a></li>


                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#User-Registration-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-user" ></i> User Registration
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="User-Registration-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/activebooking" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- In Active Users</a></li>
                                                    <li><a href="/blockedusers" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Blocked Users</a></li>
                                                    <li><a href="/roles" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Roles</a></li>
                                                    <li><a href="/module" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Modules</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#User-Management-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-list-check"></i> User Management</div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="User-Management-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/user" className="link-body-emphasis d-inline-flex text-decoration-none rounded ">- Users</a></li>
                                                    <li><a href="/usertype" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- User Types</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex rounded border-0 collapsed" data-bs-toggle="collapse"
                                                data-bs-target="#Airport-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-plane-up"></i> Airport
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid float-end fa-chevron-down"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Airport-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/airport" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Airports</a></li>
                                                    <li><a href="/testimonials" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Terminals</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Vehicle-Configuration-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-paperclip" ></i> Vehicle Configuration</div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Vehicle-Configuration-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/vehicldetails" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Make</a></li>
                                                    <li><a href="/vehiclemodel" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Model</a></li>
                                                    <li><a href="/vehiclecolor" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Color</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Services-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-brands fa-line"></i> Services </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Services-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/services" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Services </a></li>

                                                    <li><a href="/#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- E-Charge </a></li>
                                                    <li><a href="/#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Car Wash </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#News-Letter-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-brands fa-line"></i>News Letter</div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="News-Letter-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

                                                    <li><a href="/#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- News Letter </a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>




                    <div className="col-lg-9 col-md-9  col-12">
                        <div className="top-right-navbar">

                            <div className="top-navbar row justify-content-between align-items-center">

                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="search-input">
                                        <input type="search" className="form-control" id="exampleFormControlInput1" placeholder=" search..." />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-4 col-6">

                                    <div className="icons d-flex justify-content-center align-items-center">


                                        <button type="button" className="btn-2 btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i className="fa-solid fa-layer-group"></i>
                                        </button>

                                        <button type="button" className="btn-2  btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i className="fa-solid fa-expand"></i>
                                        </button>

                                        <button type="button" className="btn-2  btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i className="fa-regular fa-moon"></i>

                                        </button>

                                        <button type="button" className="btn-2   position-relative">
                                            <i className="fa-solid fa-bag-shopping"></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                                5
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </button>

                                        <button type="button" className="btn-2  position-relative">
                                            <i className="fa-regular fa-bell"></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                99+
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </button>

                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-3 col-2">

                                    <div className="dropdown profile-main">
                                        <button className="profile-btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <a href="/#">
                                                <div className="profile d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="content/img/profile-img.jpg" alt="profile" />
                                                    </div>
                                                    <div>
                                                        <p>Anna Adame</p>
                                                        <p>Founder</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </button>
                                        <ul className="dropdown-menu profile-dropdown">

                                            <li><a href="/login"> <h6>Welcome Anna!</h6></a></li>

                                            <li><a href="/#"> <i className="fa-regular fa-user"></i> Profile</a></li>

                                            <li><a href="/#"> <i className="fa-regular fa-message"></i>Messages</a></li>

                                            <li><a href="/#"> <i className="fa-regular fa-calendar"></i>Taskboard</a></li>

                                            <li><a href="/#"> <i className="fa-regular fa-life-ring"></i>Help</a></li>

                                            <li><a href="/#"> <i className="fa-solid fa-gear"></i>Setting</a></li>

                                            <li><a href="/#"> <i className="fa-solid fa-lock"></i> Lock Screen</a></li>

                                            <li><a href="/#"> <i className="fa-solid fa-arrow-right-from-bracket"></i> LogOut</a></li>

                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="section-1">

                            <div className="row">
                                <div className="col-lg-5 col-md-4">
                                    <div className="left">

                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-8 col-12">
                                    <div className="right mb-2 d-flex justify-content-between align-items-center">
                                        <label className="mx-1">From: </label>
                                        <input type="date" className="form-control" placeholder="date" />
                                        <label className="mx-1">To: </label>
                                        <input type="date" className="form-control" placeholder="date" />

                                    </div>
                                </div>
                            </div>






                            <div className="table-responsive">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="font">Cr#</th>
                                            <th scope="col" className="font">Full Name</th>
                                            <th scope="col" className="font">Phone Number</th>

                                            <th scope="col" className="font">Customer Email</th>
                                            <th scope="col" className="font">Quote Code</th>
                                            <th scope="col" className="font">Start Date Time</th>
                                            <th scope="col" className="font">End Date Time</th>
                                            <th scope="col" className="font">Total Cost</th>
                                            <th scope="col" className="font">Airport Name</th>
                                            <th scope="col" className="font">Flying To</th>
                                            <th scope="col" className="font">Flying From</th>
                                            <th scope="col" className="font">Inbound Flight Number</th>
                                            <th scope="col" className="font">Outbound Flight Number</th>
                                            <th scope="col" className="font">Outbound Terminal ID</th>
                                            <th scope="col" className="font">Inbound Terminal ID</th>
                                            <th scope="col" className="font">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Name</td>
                                            <td>03xx-xxxx</td>
                                            <td>z@gmail.com</td>
                                            <td>"Honda"</td>
                                            <td>12/4/14</td>
                                            <td>13/4/14</td>
                                            <td>12345</td>
                                            <td>ABC</td>
                                            <td>Jeddah</td>
                                            <td>Pakistan</td>
                                            <td>34</td>
                                            <td>76</td>
                                            <td>789</td>
                                            <td>876</td>
                                            <td>
                                                <button type="button" className="btn btn-primary font">Details</button>
                                                <button type="button" className="btn btn-danger font mt-1">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Name</td>
                                            <td>03xx-xxx</td>
                                            <td>x@gmail.com</td>
                                            <td>"Honda"</td>
                                            <td>12/3/14</td>
                                            <td>13/3/14</td>
                                            <td>12345</td>
                                            <td>ABC</td>
                                            <td>Jeddah</td>
                                            <td>Mecca</td>
                                            <td>34</td>
                                            <td>76</td>
                                            <td>789</td>
                                            <td>876</td>
                                            <td>
                                                <button type="button" className="btn btn-primary font">Details</button>
                                                <button type="button" className="btn btn-danger font  mt-1">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Name</td>
                                            <td>03xx-xxx</td>
                                            <td>x@gmail.com</td>
                                            <td>"Honda"</td>
                                            <td>12/3/14</td>
                                            <td>13/3/14</td>
                                            <td>12345</td>
                                            <td>ABC</td>
                                            <td>Jeddah</td>
                                            <td>Mecca</td>
                                            <td>34</td>
                                            <td>76</td>
                                            <td>789</td>
                                            <td>876</td>
                                            <td>
                                                <button type="button" className="btn btn-primary font">Details</button>
                                                <button type="button" className="btn btn-danger font  mt-1">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="/#">1</a></li>
                                <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="/#">Next</a>
                                </li>
                            </ul>
                        </nav>

                    </div>

                </div>


            </div>

        </>
    )
}
