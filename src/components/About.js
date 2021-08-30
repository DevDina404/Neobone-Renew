import { Component } from 'react';

class About extends Component {


    render() {
        return (
            <div id='about'>
                <div className='container'>
                    <div className="row">
                        <div className='about-text col-md-6'>
                            <h2>About Us</h2>
                            <p dangerouslySetInnerHTML={{ __html: this.props.data ? this.props.data.paragraph : 'loading...' }} ></p>
                        </div>
                        <div className="col-md-6">
                            <div id="StateOfTheArt" className="carousel slide" data-ride="carousel">
                            <h3 className="subtitle">State of the art equipments</h3>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="images/Wireless Pro Dock.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/Intelect Neo.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/Intelect HPL.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/Intelect RPW Shockwave.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/DTS Spinal Decompression Therapy.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#StateOfTheArt" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#StateOfTheArt" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <h3 className="subtitle">Our Philosophy</h3>
                            <p style={{paddingLeft:"30px"}}>{this.props.data ? this.props.data.philosophy : 'loading...'}</p>
                            <h3 className="subtitle">Our Mission</h3>
                            <ul>
                            <li><b>State-of-art Treatment</b> – Provide a State-of-the art Orthopaedic Wellness care at an affordable cost</li>
                            <li><b>Customised Care</b> – Customised treatment and quicker rehabilitation</li>
                            <li><b>Educative Approach</b> – Patient Education with a focus on prevention which will help them enjoy a lifetime of good bone health</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About
