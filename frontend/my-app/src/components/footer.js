import './footer.css';
import Logo from '../Assets/Logo.png'
export default function Footer (){
    return(
        <div className="bg-secondary pt-4" id="footer">
        <div className="container">
            <div className="row py-4">

                <div className="col-lg-3 col-12 align-left">
                    <a className="navbar-brand" href="index.html">
                        <i className='bx bx-buildings bx-sm text-light'></i>
                        <span className="text-light h5">E-Cell</span> 
                    </a>
                    <p className="text-light my-lg-4 my-2">
                        <img src={Logo} width="30px" height="30px"></img>
                    </p>
                    <ul className="list-inline footer-icons light-300">
                        <li className="list-inline-item m-0">
                            <a className="text-light" target="_blank" href="http://facebook.com/">
                                <i className='bx bxl-facebook-square bx-md'></i>
                            </a>
                        </li>
                        <li className="list-inline-item m-0">
                            <a className="text-light" target="_blank" href="https://www.linkedin.com/">
                                <i className='bx bxl-linkedin-square bx-md'></i>
                            </a>
                        </li>
                        <li className="list-inline-item m-0">
                            <a className="text-light" target="_blank" href="https://www.whatsapp.com/">
                                <i className='bx bxl-whatsapp-square bx-md'></i>
                            </a>
                        </li>
                        <li className="list-inline-item m-0">
                            <a className="text-light" target="_blank" href="https://www.flickr.com/">
                                <i className='bx bxl-flickr-square bx-md'></i>
                            </a>
                        </li>
                        <li className="list-inline-item m-0">
                            <a className="text-light" target="_blank" href="https://www.medium.com/">
                                <i className='bx bxl-medium-square bx-md' ></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h3 className="h4 pb-lg-3 text-light light-300">Our Initiatives</h3>
                        <ul className="list-unstyled text-light light-300">
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light" href="index.html">E-Summit</a>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="about.html">IITT - NIF</a>
                            </li>
                        </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h2 className="h4 pb-lg-3 text-light light-300">Useful Links</h2>
                    <ul className="list-unstyled text-light light-300" id="work_things">
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">Home</a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">About Us</a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">E-Cell Blog</a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h2 className="h4 pb-lg-3 text-light light-300">Contact</h2>
                    <ul className="list-unstyled text-light light-300">
                        <li className="pb-2">
                            <i className='bx-fw bx bx-phone bx-xs'></i><a className="text-decoration-none text-light py-1" href="tel:010-020-0340">010-020-0340</a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bx-mail-send bx-xs'></i><a className="text-decoration-none text-light py-1" href="mailto:info@company.com">info@company.com</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        </div>

    )
}