import { React, useState, useEffect } from 'react';
import Header from '../Component/Header';
import Filter from '../Component/Filter';
import NoResults from '../Component/NoResults';
import Footer from '../Component/Footer';
import { SavedRecipesData, getFormatTime } from '../Data/SaveRecipesData';
import { useLocation } from 'react-router-dom';
import SavedRecipes from '../Component/SavedRecipes';
const SearchPage = (props) => {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const searchQuery = queryParams.get("q") || "";
      const [searchResults, setSearchResults] = useState([]);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
            if (searchQuery) {
                  setSearchResults(SavedRecipesData);
            }
            // Fetch data from API
            setLoading(false);
      }, [searchQuery]);
      return (
            // <div className="container-fluid d-flex flex-column">
            //       <Header />
            <div className="row flex-grow-1">
                  <div className="col-12 col-md-4 col-lg-4 p-3">
                        <Filter className="flex-grow-1 overflow-auto" style={{ maxHeight: "80vh" }} />
                  </div>
                  <div className="col-12 col-md-8 col-lg-8 p-3">
                        {searchResults.length == 0 ? (
                              <NoResults query={searchQuery} />
                        ) : (
                              // tạm thời sử dụng dữ liệu giả
                              <div className='row'>
                                    {SavedRecipesData.map((item, index) => {
                                          return (<SavedRecipes className="col-4 col-md-4 col-lg-4 p-0 mb-3" key={index} imgRecipes={item.imgRecipes} nameRecipes={item.nameRecipes} time={getFormatTime(item.time)} />)
                                    })}
                              </div>
                        )
                        }
                  </div>
            </div>
            //<Footer />
            // </div>
      );
}
export default SearchPage;