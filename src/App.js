
import AddCategory from './component/category/AddCategory';
import { ReactInternetSpeedMeter } from 'react-internet-meter'
//import ReduxPage from './redux/MainPage';
// import 'react-internet-speed-meter/dist/index.css'
import { Provider } from 'react-redux';
import store1 from './redux/store/store';
import React from 'react';
import { Route,BrowserRouter, Routes } from "react-router-dom";
import ReduxPage from './redux/MainPage';
import CategoryList from './component/category/CategoryList'
import Navbar from './component/nav_menu/Navbar';
import SubCategory from './component/sub_category/SubCategory';
import Home from './component/home/Home';
import SubCategoryList from './component/sub_category/SubCategoryList';

store1.subscribe(()=>console.log("ckk"+JSON.stringify(store1.getState())));
function App() {
 // console.log(store1.getState())
  return (

<BrowserRouter>

  <Routes>

    <Route path="/" element={<Navbar/>} /> 
    <Route path='/create-category' element={<AddCategory/>}/>
    <Route path='/create-subCategory' element={<SubCategory/>}/>
    <Route path='/categoryList' element={<CategoryList/>}/>
    <Route path='/SubCategoryList' element={<SubCategoryList/>}/>
    <Route path="/redux" element={<ReduxPage/>} /> 

  </Routes>
</BrowserRouter>


  //  <Provider store={store1}>
  //   <ReduxPage/>
  //  </Provider>
  );
}

export default App;
