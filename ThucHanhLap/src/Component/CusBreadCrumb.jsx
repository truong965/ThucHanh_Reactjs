import React from 'react';
// chưa xong
const CusBreadCrumb = (listPage) => {
      return (
            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                        {listPage.map((page, index) => {
                              <li className={page.isActive ? "breadcrumb-item active" : "breadcrumb-item"}><a href={page.href}>{page.name}</a></li>
                        })}

                  </ol>
            </nav>
      )
}
export default CusBreadCrumb;