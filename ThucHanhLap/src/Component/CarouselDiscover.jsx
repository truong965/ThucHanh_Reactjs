import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS của Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import JS của Bootstrap (bao gồm cả Popper.js nếu cần)
import React from 'react'; // Import thư viện React
export const CarouselDiscover = (props) => {
      return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                  <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                        <div className="carousel-item active">
                              <img src="../src/FeData/slide1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                              <img src="../src/FeData/slide2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                              <img src="../src/FeData/slide3.jpg" className="d-block w-100" alt="..." />
                        </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                  </button>
            </div>
      );

}