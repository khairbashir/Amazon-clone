import React from 'react';
import './Home.style.css';
import Product from '../Product/Product.component';


function Home() {
    return(
      <div className='home'>
        <div className='home__container'>
          <img src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt='amazon-banner' className='home__image'/>  
          
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

            <Product id={104} imgOne='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg' 
              cardTitle={'Health and Personal Care'}
              
            />

          </div>

            
          
        </div>
       
      </div>
    )
} 

export default Home;