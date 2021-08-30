import { Component } from "react";
import emailjs from 'emailjs-com';

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      showMessage: false,
      submitSuccess: true,
      fields: {},
      errors: {}
    };
    this.sendEmail = this.sendEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Please Enter your name";
    }

    if (typeof fields["name"] !== "undefined") {
      if(fields["name"].trim() === ""){
        formIsValid = false;
        errors["name"] = "Please Enter your name";
      }
      if (!fields["name"].match(/^[a-zA-Z\s]+$/)) {
        formIsValid = false;
        errors["name"] = "Please enter only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Please Enter your email";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Please enter a valid email";
      }
    }
    //Phone
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Please Enter your phone number";
    }

    if (typeof fields["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(fields["phone"])) {
        formIsValid = false;
        errors["phone"] = "Please enter valid phone number";
      } else if (fields["phone"].length !== 10) {
        formIsValid = false;
        errors["phone"] = "Please enter valid phone number."
      }

    }
    //Message
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Please enter your query";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }


  sendEmail(e) {
    e.preventDefault();

    if (this.handleValidation()) {

      emailjs.sendForm('service_3sims56', 'template_0d83nyw', e.target, 'user_unRmUzXyN6Q1aJA6qBcip')
        .then((result) => {
          console.log(result.text);
          this.setState({ showMessage: true , submitSuccess:true})
          setTimeout(() => { this.setState({ showMessage: false }) }, 7000);
        }, (error) => {
          console.log(error.text);
          this.setState({ showMessage: true ,  submitSuccess:false })
          setTimeout(() => { this.setState({ showMessage: false}) }, 7000);
        });
      e.target.reset();
      this.setState({fields:{}, error:{}})
    }
  }

  render() {
    return (
      <div style={{ paddingTop: "100px" }} id="contact">
        <div className="contact" style={{ paddingBottom: "30px" }}>
          <div className="container" style={{ paddingTop: "50px" }}>
            <div className="section-title"> <h2>Reach Us</h2></div>
            <div className="row">
              <div className={this.state.showMessage ? "col-md-6 hide" : "col-md-6 show"} >
                <form onSubmit={this.sendEmail} id="contactForm" name="contactForm">
                  <fieldset>
                  
                  <div className="input-wrapper">
                      <label htmlFor="contactName">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        size="35"
                        id="contactName"
                        name="contactName"
                        onChange={this.handleChange.bind(this, "name")}
                      /><br />
                      <span className="validation-error">{this.state.errors["name"]}</span>
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        size="35"
                        id="contactEmail"
                        name="contactEmail"
                        onChange={this.handleChange.bind(this, "email")}
                      /><br />
                      <span className="validation-error">{this.state.errors["email"]}</span>
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="contactSubject">
                        Phone <span className="required">*</span></label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactPhone"
                        name="contactPhone"
                        onChange={this.handleChange.bind(this, "phone")}
                      /><br />
                      <span className="validation-error">{this.state.errors["phone"]}</span>
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="contactMessage">
                        Query <span className="required">*</span>
                      </label>
                      <textarea
                        cols="50"
                        rows="15"
                        id="contactMessage"
                        name="contactMessage"
                        onChange={this.handleChange.bind(this, "message")}
                      ></textarea><br />
                      <span className="validation-error">{this.state.errors["message"]}</span>
                    </div>

                    <div>
                      <button className="submit">Submit</button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </form>
                <div className="success-msg">
                  {this.state.submitSuccess ? 
                        (<div><img src="images/icon-thumbs-up.png" />
                        <h4>Your request query has been submitted. we will contact you shortly.</h4></div>)
                        :
                       (<div><img src="images/icon-close.png"/>
                       <h4>An error occured while submitting your query. Please reach us through email or phone.</h4></div>)
                  }
                </div>
              </div>

              <div className=" info col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h6>General Enquiries</h6>
                    <p>admin@neobone.in<br />
                      +91-87544 12500 <br/> +91 44 42045044</p>
                  </div>
                  <div className="col-md-6">
                    <h6>Our Timings</h6>
                    <p>Monday - Saturday : 9 am - 8 pm <br />
                      <b>SUNDAY HOLIDAY</b><br />
                    </p>
                  </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4938.940146399564!2d80.25357347083286!3d12.995834661921515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d43c4b9c42d%3A0x66727390564bbe54!2sNeobone%20Renew%20%3A%20Physiotherapy%20and%20Rehabilitation%20(%20Formerly%20BonSpero%20)!5e0!3m2!1sen!2sin!4v1629218925852!5m2!1sen!2sin"
                 className="map" title="gmap" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact