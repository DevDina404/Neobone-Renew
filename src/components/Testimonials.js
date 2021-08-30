import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Component } from 'react';



class Testimonials extends Component {

    constructor(props) {
        super(props);
            this.state = {
                responsive: {
                    0: {
                        items: 1,
                    },
                    550: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            }

    }

    render() {
        return (
            <div style={{paddingTop:"100px"}} id="testimonials">
            <div className="testimonials"  style={{minHeight:"fit-content"}}>
                <div className="container">
                    <div className='section-title' style={{padding:" 40px 0 10px 0"}}>
                        <h2>What our patrons say</h2>
                    </div>
                    <OwlCarousel
                       responsive={this.state.responsive}
                        nav loop dots={false}
                        navText= {[" <span class=\"carousel-control-prev-icon arrow-left\" aria-hidden=\"true\"></span>","<span class=\"carousel-control-next-icon arrow-right\" aria-hidden=\"true\"></span>"]}
                        >
                        {this.props.data ?
                            this.props.data.map((data, index) => (
                                <div className="card" key={`${data.name}-${index}`}>
                                    <div className="item review">
                                        <p>{data.review}</p>
                                        <h6>{data.name}</h6>
                                    </div>
                                </div>)) :
                            'Loading...'}
                    </OwlCarousel>
                </div>
            </div>
            </div>
        );
    }
}
export default Testimonials