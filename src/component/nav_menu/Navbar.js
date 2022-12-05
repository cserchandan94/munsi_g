import React from 'react';
// import ContainerComponent from '../../utils/ContainerComponent';
// import AddCategory from '../category/AddCategory';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElement'

const Navbar =()=>{

    return(
        <>
      <div>
      <Nav>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/create-category' activeStyle>
            Add Category
          </NavLink>
          <NavLink to='/create-subCategory' activeStyle>
            Add SubCategory
          </NavLink>
          <NavLink to='/categoryList' activeStyle>
            All Category
          </NavLink>
          <NavLink to='/SubCategoryList' activeStyle>
            All SubCategory
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          <NavBtnLink to='/sign-up' activeStyle> Sign Up</NavBtnLink>
        </NavBtn>
        </Nav>
      </div>
       
        </>
    )

}
export default Navbar;