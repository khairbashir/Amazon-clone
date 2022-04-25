import React, { Component } from 'react';
import './Home.style.css';
import Product from '../Product/Product.component';
import Product2Component from '../Product/Product2.component';
import Product3Component from '../Product/Product3.component';



export default class Home extends Component {
  render(){
    return(
      <div className='home'>
        <div className='home__container'>
       
          <div>
          <img src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt='amazon-banner' className='home__image'/>  
          </div>
         
         
          <div className='home__row'>
            <Product id={101} imgOne={'https://m.media-amazon.com/images/I/61qwEAz8aAL._AC_SX679_.jpg'} 
              imgTwo={'https://images-na.ssl-images-amazon.com/images/I/517Hthv5kwL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'}
              imgThree={'https://images-na.ssl-images-amazon.com/images/I/81RABVv7AKL.__AC_SX300_SY300_QL70_FMwebp_.jpg'}
              imgFour={'https://images-na.ssl-images-amazon.com/images/I/71j93uhCKvL.__AC_SX300_SY300_QL70_FMwebp_.jpg'} 
              titleOne={'G7X Camera'} 
              titleTwo={'Secrets of Divine Love'} 
              titleThree={'Gratitude Journal'} 
              titleFour={'Glass Cofee Mugs'} 
              cardTitle={'Pick up where you left'} 
            />

            <Product id={102} imgOne={'https://m.media-amazon.com/images/I/61R7x5iewML._AC_SY340_.jpg'} 
              imgTwo={'https://m.media-amazon.com/images/I/519dr3cjUfL._AC_SY290_.jpg'}
              imgThree={'https://m.media-amazon.com/images/I/71HZzkMHGAL._AC_SY340_.jpg'}
              imgFour={'https://m.media-amazon.com/images/I/81ltoxXyLtL._AC_SY340_.jpg'} 
              titleOne={'Cups'} 
              titleTwo={'Do it Yourself'} 
              titleThree={'Liver Health'} 
              titleFour={'Frother'} 
              cardTitle={'Keep shopping for'}
            />

            <Product id={103} imgOne={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg'} 
              imgTwo={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg'}
              imgThree={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby240X._SY170_CB468850909_.jpg'}
              imgFour={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg'} 
              titleOne={'Computer & Accessories'} 
              titleTwo={'Video Games'} 
              titleThree={'Baby'} 
              titleFour={'Toys & Games'} 
              cardTitle={'Shop by category'}
            />  

            <Product2Component id={101} imgOne={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg'}
              cardTitle={'Health & Care'}
            /> 

          </div>

          <div className='home__row-2'>
            <Product2Component id={101} imgOne={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals__2x._SY608_CB430401031_.jpg'}
              cardTitle={'Deals & Promotions'}
            /> 
            <Product2Component id={102} imgOne={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_2X._SY608_CB639759849_.jpg'}
              cardTitle={'Deal of the Day'}
            /> 
            <Product2Component id={103} imgOne={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg'}
              cardTitle={'Computers & Accessories'}
            /> 
            <Product2Component id={104} imgOne={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg'}
              cardTitle={'Electronics'}
            /> 
          </div>

          <div className='home__row-3'>
            <Product3Component id={106} imgOne={'https://m.media-amazon.com/images/I/71u5h8mI91S._AC_SY400_.jpg'}
             imgTwo={'https://m.media-amazon.com/images/I/61GK+N4NhsL._AC_SY400_.jpg'}
             imgThree={'https://m.media-amazon.com/images/I/61KGgU0YhXS._AC_SY400_.jpg'}
             imgFour={'https://m.media-amazon.com/images/I/A17rF8ZjiiL._AC_SY400_.jpg'}
             imgFive={'https://m.media-amazon.com/images/I/61ino6WZGsL._AC_SY400_.jpg'}
             imgSix={'https://m.media-amazon.com/images/I/61GmecE1QoL._AC_SY400_.jpg'}
             imgSeven={'https://m.media-amazon.com/images/I/71EwoNQypZL._AC_SY400_.jpg'}
             imgEight={'https://images-na.ssl-images-amazon.com/images/I/71lex8lQLzL._AC_UL200_SR200,200_.jpg'}
              cardTitle={'Popular Products'}
              
            /> 
          </div>

          <div className='home__row'>
            <Product id={101} imgOne={'https://m.media-amazon.com/images/I/81EnDXxZrxL._AC_SY340_.jpg'} 
              imgTwo={'https://m.media-amazon.com/images/I/81c60APtNIL._AC_SY340_.jpg'}
              imgThree={'https://m.media-amazon.com/images/I/91qxUXsDhbL._AC_SY340_.jpg'}
              imgFour={'https://m.media-amazon.com/images/I/81sW0ZxCbCL._AC_SY340_.jpg'} 
            
              cardTitle={'Top picks'} 
            />

            <Product id={102} imgOne={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_2x._SY232_CB418609084_.jpg'} 
              imgTwo={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_2x._SY232_CB418608748_.jpg'}
              imgThree={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_2x._SY232_CB418608722_.jpg'}
              imgFour={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_2x._SY232_CB418608878_.jpg'} 
              titleOne={'Sweat shirt'} 
              titleTwo={'Joggers'} 
              titleThree={'Cardigan'} 
              titleFour={'Easy Tees'} 
              cardTitle={'Comfy styles for her'}
            />

            <Product id={103} imgOne={'https://m.media-amazon.com/images/I/718aMTolnML._AC_SY340_.jpg'} 
              imgTwo={'https://m.media-amazon.com/images/I/61myzaiAwIL._AC_SY340_.jpg'}
              imgThree={'https://m.media-amazon.com/images/I/91yM8hKL83L._AC_SY340_.jpg'}
              imgFour={'https://m.media-amazon.com/images/I/61LETuSbyqL._AC_SY340_.jpg'} 
              
              cardTitle={'Shopping Trends'}
            />  

<Product id={104} imgOne={'https://m.media-amazon.com/images/I/61BXlhGsuvL._AC_SY290_.jpg'} 
              imgTwo={'https://m.media-amazon.com/images/I/81GKR2mUrPL._AC_SY290_.jpg'}
              imgThree={'https://images-na.ssl-images-amazon.com/images/I/71xe0t7Qv1L._AC_UL200_SR200,200_.jpg'}
              imgFour={'https://m.media-amazon.com/images/I/6134+oaW+FL._AC_SY290_.jpg'} 
              
              cardTitle={'Explore More'}
            />  

          </div>

        </div>
      </div>
    )

  }
}

