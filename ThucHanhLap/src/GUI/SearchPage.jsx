import { React, useState, useEffect } from 'react';
import Header from '../Component/Header';
import Filter from '../Component/Filter';
import NoResults from '../Component/NoResults';
import Footer from '../Component/Footer';
import { SavedRecipesData, getFormatTime } from '../Data/SaveRecipesData';
import { useLocation } from 'react-router-dom';
import RecipesItem from '../Component/RecipesItem';
const SearchPage = (props) => {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const searchQuery = queryParams.get("q") || "";
      const [searchResults, setSearchResults] = useState([]);
      const [loading, setLoading] = useState(true);
      const itemsPerPage = 6;
      const [currentPage, setCurrentPage] = useState(1);

      // Tính tổng số trang
      const totalPages = Math.ceil(searchResults.length / itemsPerPage);

      // Xác định phần tử hiển thị dựa vào trang hiện tại
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
      // Xử lý khi bấm vào số trang
      const handlePageChange = (page) => {
            setCurrentPage(page);
      };
      useEffect(() => {
            if (searchQuery) {
                  setSearchResults(SavedRecipesData);
            }
            // Fetch data from API
            setLoading(false);
      }, [searchQuery]);

      return (
            <div className="row">
                  <div className="col-12 col-md-4 col-lg-4 p-3">
                        <Filter className="flex-grow-1 overflow-auto" style={{ maxHeight: "80vh" }} />
                  </div>
                  <div className="col-12 col-md-8 col-lg-8 p-3">
                        {searchResults.length == 0 ? (
                              <NoResults query={searchQuery} />
                        ) : (
                              // tạm thời sử dụng dữ liệu giả
                              <>

                                    <div className='row'>
                                          {currentItems.map((item, index) => {
                                                return (<RecipesItem className="col-4 col-md-4 col-lg-4 p-0 mb-3" key={index} imgRecipes={item.imgRecipes} nameRecipes={item.nameRecipes} time={getFormatTime(item.time)} />)
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
                              </>
                        )
                        }
                  </div>
            </div>
      );
}
export default SearchPage;