import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile:window.innerWidth <= 1200,
            responsive: {
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                850:{
                    items:3
                }
            }
        };
    };

    updateDimensions = () => {
        this.setState({   isMobile:window.innerWidth <= 1200 });
      };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
    componentWillUnmount() {
       window.removeEventListener('resize', this.updateDimensions);
     }

    render() {
        return (
            <div className="service" id="services">
                <div className='section-title' style={{ paddingTop: "130px" }}>
                    <h2>Our Services</h2>
                </div>
                {this.state.isMobile?
               (<OwlCarousel 
                items={1} 
                responsive={this.state.responsive} margin={this.state.isMobile?-100:0}
                 nav={false} loop={true} dots={false} >
                     {this.props.data
                            ? this.props.data.map((d, i) => (
                                <div key={`${d.name}-${i}`} className='item'>
                                    <div className="service-card">
                                        <header className="service-card__header" ><img className="service-card__icon" src={d.bg} alt=" " /></header>
                                        <section className="service-card__body">
                                            <h2 className="service-card__title">{d.title}</h2>
                                            <p className="service-card__knowledge" style ={{textAlign: d.id===2?"left":"center"}}
                                            dangerouslySetInnerHTML={{ __html: d.text}}></p>
                                        </section>
                                    </div>
                                </div>
                            ))
                            : 'loading'}
                </OwlCarousel>     )           
                :
               ( <div className="container">
                    <div className='row'>
                        {this.props.data
                            ? this.props.data.map((d, i) => (
                                <div key={`${d.name}-${i}`} className='col-md-3' style={{margin:"10px 0"}}>
                                    <div className="service-card">
                                        <header className="service-card__header"><img className="service-card__icon" src={d.bg} alt=" " /></header>
                                        <section className="service-card__body">
                                            <h2 className="service-card__title">{d.title}</h2>
                                            <p className="service-card__knowledge" style ={{textAlign: d.id===2?"left":"center"}}
                                            dangerouslySetInnerHTML={{ __html: d.text}}></p>
                                        </section>
                                    </div>
                                </div>
                            ))
                            : 'loading'}
                    </div>
                </div> )
                }
            </div>                
        );
    }
}
export default Services
