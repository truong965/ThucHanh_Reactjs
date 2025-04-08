import React from 'react';

const RecipesItem = (props) => {
      return (
            <div className={!props.className ? "col-3 col-md-4 col-lg-3 p-0 mb-3" : props.className} style={{ borderColor: "#f44b87" }}>
                  <div className='m-2 border-2 rounded-3 shadow d-flex flex-column align-items-start h-100'>
                        <img style={{ width: "100%", objectFit: "contain" }} src={props.imgRecipes} alt="" />
                        <div className='d-flex justify-content-between align-items-start w-100'>
                              <h5 className='ms-3 me-3 text-start'>{props.nameRecipes}</h5>
                              <button
                                    style={{
                                          borderColor: "#f44b87",
                                          width: "30px",
                                          aspectRatio: "1"  // Đảm bảo width = height
                                    }}
                                    className='me-2 rounded-circle bg-transparent border-2 d-flex align-items-center justify-content-center'
                              >
                                    <i style={{ color: "#f44b87" }} className=" fa-solid fa-bookmark"></i>
                              </button>
                        </div>
                        <span className='mb-3 mt-auto ms-3 rounded-4' style={{ color: "#f44b87", background: "#fef0f5", padding: "5px" }} >{props.time}</span>
                  </div>

            </div>
      )
}
export default RecipesItem;