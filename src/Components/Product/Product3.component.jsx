import React from 'react';
import './Product.style.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Product3Component({id,imgOne,imgTwo,imgThree,imgFour,imgFive,imgSix,imgSeven,imgEight}) {
  return (
    <div className='Card-product3' key={id}>
      <h3>Popular Products</h3>

      <Slider slidesToShow={4} slidesToScroll={4}>
          <div>
              <img src={imgOne} alt="card pic" className='Card__pic-3'/>
          </div>
          <div>
              <img src={imgTwo} alt="card pic" className='Card__pic-3'/>
          </div>
          <div>
              <img src={imgThree} alt="card pic" className='Card__pic-3'/>
          </div>
          <div>
              <img src={imgFour} alt="card pic" className='Card__pic-3'/>
          </div>
          <div>
              <img src={imgFive} alt="card pic" className='Card__pic-3'/>
          </div>
          <div>
              <img src={imgSix} alt="card pic" className='Card__pic-3'/>
          </div>
          <div>
              <img src={imgSeven} alt="card pic" className='Card__pic-3'/>
          </div>
          <div>
              <img src={imgEight} alt="card pic" className='Card__pic-3'/>
          </div>
      </Slider>
    </div>
  );
}
export default Product3Component;
