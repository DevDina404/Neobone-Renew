import './App.css'
import { Component } from 'react'
import jsonData from './data.json'
import Menu from './components/Menu'
import Landing from './components/Landing'
import About from './components/About'
import Services from './components/Services'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      landingPageData: jsonData
    }
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Landing />
        <About data={this.state.landingPageData.about} />
        <Services data={this.state.landingPageData.services} />
        <Why data={this.state.landingPageData.why} />
        <Testimonials data={this.state.landingPageData.testimonials} />
        <Faq data={this.state.landingPageData.faq} />
        <Contact /> 
      </div>
    );
  }
}

export default App;
