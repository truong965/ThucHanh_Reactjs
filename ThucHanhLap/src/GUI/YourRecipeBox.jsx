import { React, useState, useRef } from 'react';
import CusButton from '../Component/CusButton';
import CusTabs from '../Component/CusTabs';
import RecipesItem from '../Component/RecipesItem';
import { SavedRecipesData, getFormatTime } from '../Data/SaveRecipesData';
import Pagination from '../Component/Pagination';
const YourRecipeBox = () => {
      const itemsPerPage = 8;
      const [currentPage, setCurrentPage] = useState(1);

      // Tính tổng số trang
      // Xác định phần tử hiển thị dựa vào trang hiện tại
      const totalPages = Math.ceil(SavedRecipesData.length / itemsPerPage);
      const currentItems = SavedRecipesData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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
                        {currentItems.map((item, index) => {
                              return (<RecipesItem key={index} imgRecipes={item.imgRecipes} nameRecipes={item.nameRecipes} time={getFormatTime(item.time)} />)
                        })}
                  </div>
                  <div className='d-flex justify-content-end w-100 mt-3'>
                        <Pagination
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={setCurrentPage}
                        />
                  </div>
            </div>
      );
}
export default YourRecipeBox;