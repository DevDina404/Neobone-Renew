import { Component } from 'react';
import Scrollspy from 'react-scrollspy'

class Menu extends Component {

  constructor(props){
    super(props);
    this.state={
      isMobile:window.innerWidth<= 768
    }
    this.handleClose=this.handleClose.bind(this)
  };

  handleClose(){
    document.getElementById('navbarToggleExternalContent').classList.remove('show')
    document.getElementById('toggler').classList.add('collapsed')
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src="./images/Renew.png" alt="Neobone Renew" className="logo" width="250"/>
          </a>
          <button className="navbar-toggler navbar-toggle" id="toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

        </div>

        <div  className="collapse navbar-collapse" id="navbarToggleExternalContent">
          <Scrollspy items={['home','about', 'services', 'why', 'testimonials', 'faq' , 'contact']}
          currentClassName="active-nav" className="navbar-nav" offset={-500} >
            <a style={{display:"none"}} href="#home">Home</a>
            <a className="nav-link" href="#about" onClick={this.handleClose}>About us</a>
            <a className="nav-link" href="#services"  onClick={this.handleClose}>Services</a>
            <a className="nav-link" href="#why" onClick={this.handleClose} >Why us</a>
            <a className="nav-link" href="#testimonials"  onClick={this.handleClose}>Testimonials</a>
            <a className="nav-link" href="#faq"  onClick={this.handleClose}>FAQ</a>
            <a className="nav-link" href="#contact"  onClick={this.handleClose}>Reach Us</a>
            </Scrollspy>
          </div>
      </nav>
    );
  }
}

export default Menu