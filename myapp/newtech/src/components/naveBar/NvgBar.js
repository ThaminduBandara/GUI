

import React, { useState } from 'react';
import './navnew.css';
import { Link } from 'react-router-dom';

export default function NvgBar({ bottomRef }) {
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);


  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {};

  const handleNavigation = (page) => {};



  
    const handleScrollToBottom = () => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
 



  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <div className="nvgBar">
      <div className="left">
        <div className="name-1" onClick={() => handleNavigation('HOME')}>NEW TECH</div>
        
        <Link className="item-1" to="/" >
        <div  onClick={() => handleNavigation('HOME')}>HOME</div>
        </Link>
          
        <div className="item-1 dropdown" onClick={toggleDropdown}>CATEGORIES
        {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleNavigation('Laptops')}>Laptops</li>
                <li onClick={() => handleNavigation('Cameras')}>Cameras</li>
                <li onClick={() => handleNavigation('Smartphones')}>Smartphones</li>
              </ul>
            )}

        </div>
        
        <Link className="item-1" to="/SignUp" >
        <div  onClick={() => handleNavigation('REGISTER')}>REGISTER </div>
        </Link>
       
        <div className="item-1" onClick={handleScrollToBottom}>CONTACT US</div>
      </div>

      <div className="right">
        <div className="search">
          <div className="item-3">
            <input
              className="type-box"
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </div>
          <div className="item-4">
            <button className="btn" onClick={handleSearch}>SEARCH</button>
          </div>
        </div>

        <div className="other">
          <div className="item-2" onClick={toggleDropdown2}>ADVANCED

          {isDropdownOpen2 && (
              <ul className="dropdown-menu2">
                <Link to="/ProductForm" className='add-item'>
                <li>Add Items</li>
                </Link>
                <Link to="/ProductLists" className='add-item'>
                <li>Product List</li>
                </Link>
                
                
              </ul>
            )}



          </div>
          
          <Link className="item-2" to="/Login" ><div  onClick={() => handleNavigation('LOG IN')}>LOGIN</div></Link>
          
        </div>
      </div>
    </div>
  );
}


