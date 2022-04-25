import React from 'react';
import './Product.style.css';

function Product({cardTitle, id, imgOne, imgTwo, imgThree, imgFour, titleOne, titleTwo, titleThree, titleFour}) {
  return (
        <div className='Card'>
            <div className='Card-flex' key={id}>
                <h3>{cardTitle}</h3>
            
                <div className='Product'> 
                    
                    <div className='Product__img'>
                        <img src={imgOne} alt="pic" className='Card__pic'></img>
                        <h5>{titleOne}</h5>

                        <img src={imgTwo} alt="pic"  className='Card__pic'></img>
                        <h5>{titleTwo}</h5>
                    </div>
                
                    <div className='Product__img'>
                        <img src={imgThree} alt="pic"  className='Card__pic'></img>
                        <h5>{titleThree}</h5>

                        <img src={imgFour} alt="pic"  className='Card__pic'></img>
                        <h5>{titleFour}</h5>
                    </div>
                    
                </div>

                <a href='#'>view more</a>
            </div>

        </div>   

    )
}

export default Product