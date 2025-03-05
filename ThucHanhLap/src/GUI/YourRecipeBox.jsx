import React from 'react';
import CusButton from '../Component/CusButton';
import CusTabs from '../Component/CusTabs';
import SavedRecipes from '../Component/SavedRecipes';
import { SavedRecipesData, getFormatTime } from '../Data/SaveRecipesData';
const YourRecipeBox = () => {
      const [currentPage, setCurrentPage] = useState(1);

      // Tính tổng số trang
      const totalPages = Math.ceil(SavedRecipesData.length / itemsPerPage);

      // Xác định phần tử hiển thị dựa vào trang hiện tại
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = SavedRecipesData.slice(indexOfFirstItem, indexOfLastItem);

      // Xử lý khi bấm vào số trang
      const handlePageChange = (page) => {
            setCurrentPage(page);
      };
      const tabsPage = [
            { name: 'Saved Recipes', href: '#', isActive: true },
            { name: 'Folder', href: '#', isActive: false },
            { name: 'Recipes by Genevieve', href: '#', isActive: false },
      ]
      return (
            <div className='d-flex flex-column align-items-start justify-content-start'>
                  <h1> Emma Gonzalez's Recipe Box</h1>
                  <div className='my-4 d-flex align-items-center justify-content-start'>
                        <img src="../src/FeData/bigAvatar.png" alt="" />
                        <div className='mx-4 align-self-stretch d-flex flex-column align-items-start justify-content-start'>
                              <p className='text-start mt-2 mb-auto'>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</p>
                              <div className='mb-3 d-flex align-items-center justify-content-center'>
                                    <span style={{ color: "#f44b87" }} >6.5k Subcribes</span>
                                    <CusButton clsName="btn px-3 mx-4" backgroundColor="#f44b87" textColor="#f1f4fe" > Share</CusButton>
                              </div>
                        </div>
                  </div>
                  <CusTabs childrens={tabsPage} />
                  <div className='row'>
                        {SavedRecipesData.map((item, index) => {
                              return (<SavedRecipes key={index} imgRecipes={item.imgRecipes} nameRecipes={item.nameRecipes} time={getFormatTime(item.time)} />)
                        })}
                  </div>
                  <div className='d-flex justify-content-end w-100 mt-3'>
                        <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                    {/* Nút Previous */}
                                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                          <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                                &laquo;
                                          </button>
                                    </li>

                                    {/* Hiển thị danh sách số trang */}
                                    {Array.from({ length: totalPages }, (_, i) => (
                                          <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                                                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                                                      {i + 1}
                                                </button>
                                          </li>
                                    ))}

                                    {/* Nút Next */}
                                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                                &raquo;
                                          </button>
                                    </li>
                              </ul>
                        </nav>
                  </div>
            </div>
      );
}
export default YourRecipeBox;          