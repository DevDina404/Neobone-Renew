import { useState, useEffect } from "react";

function Landing() {

  const [width, setWidth] = useState(window.innerWidth);
function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

let isMobile = (width <= 768);

    return (
      <div className="landing" id="home" style={{paddingTop:"110px"}}>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={isMobile?"images/mobileBanner1.jpg":"images/banner1.jpg"} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={isMobile?"images/mobileBanner2.jpg ":"images/banner2.jpg"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
  <img src={isMobile?"images/mobileBanner3.jpg":"images/banner3.jpg"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
  <img src={isMobile?"images/mobileBanner4.jpg":"images/banner4.jpg"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
  <img src={isMobile?"images/mobileBanner5.jpg":"images/banner5.jpg"} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<a className="scroll-down" href="#about" ></a>
      </div>
    );
  }
  
  export default Landing