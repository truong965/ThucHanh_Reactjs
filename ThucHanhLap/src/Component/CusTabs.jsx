import React from 'react';
// chưa xong
const CusTabs = ({ childrens }) => {
      const styleActive = {
            background: "#fef0f5",
            color: "#f44b87"
      }
      const styleInactive = {
            background: "#ffffff",
            color: "#000000"
      }
      return (
            <ul className="nav nav-tabs">
                  {childrens.map((child, index) => {
                        return (
                              <li key={index} index={index} className="nav-item">
                                    <a style={child.isActive ? styleActive : styleInactive}
                                          className={child.isActive ? "nav-link active" : "nav-link"} aria-current="page" href={child.href} >{child.name}</a>
                              </li>
                        )
                  })}
            </ul>
      );
}
export default CusTabs;