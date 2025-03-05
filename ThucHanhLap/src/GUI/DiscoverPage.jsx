import { React, useEffect } from 'react';
import { CarouselDiscover } from '../Component/CarouselDiscover';
import CusButton from '../Component/CusButton';
import { mainColor } from '../FEData/colorData';
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js"; // 🛠 Import bootstrap JS

const DiscoverPage = (props) => {

      useEffect(() => {
            // Mở modal khi component được render
            const modalElement = document.getElementById("discoverModal");
            if (modalElement) {
                  const modal = new bootstrap.Modal(modalElement);
                  modal.show();
                  // Xóa modal khi component unmount
                  return () => {
                        modal.hide();
                        document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove()); // Xóa lớp nền đen
                  };
            }
      }, []);
      const handleNextButton = () => {
            document.querySelector(".carousel-control-next")?.click();
      }
      const handleSkipButton = () => {
            document.querySelector(".modal-header .btn-close")?.click();
      }
      return (
            <div id="discoverModal" className="modal fade" tabIndex="-1">
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                              <div className="modal-header d-flex flex-row-reverse">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                    <h1 style={{ color: mainColor }}>Discover Chefify</h1>
                                    <p>Easy and delicious cooking instructions right here. Start exploring now</p>
                                    <CarouselDiscover />
                              </div>
                              <div className="modal-footer d-flex flex-column align-items-center">
                                    <CusButton clsName="btn px-5 my-3 w-50" backgroundColor={mainColor} textColor="#ffffff" onClick={handleNextButton}>Next</CusButton>
                                    <CusButton clsName="btn" backgroundColor="#ffffff" textColor={mainColor} onClick={handleSkipButton} >Skip</CusButton>
                              </div>
                        </div>
                  </div >
            </div>
      )
}
export default DiscoverPage;