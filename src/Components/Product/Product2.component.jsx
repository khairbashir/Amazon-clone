import React from 'react';
import './Product.style.css';

function Product2Component({cardTitle, imgOne, imgTwo, imgThree, imgFour}) {
  return (
    <div className='Card-product2' key={104}>
        <div className='Card-flex'>
            <h3 className='cardTitle__product2'>{cardTitle}</h3>
        
            <div className='Product'> 
           
              <img src={imgOne} alt="card pic" className='Card__pic-2'/>
         
                
              <a href='#'>shop now</a>
            </div>
        </div>
    </div>
  );
}

export default Product2Component;
