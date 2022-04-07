import React from 'react';
import './Product.style.css';

function Product({cardTitle, id, imgOne, imgTwo, imgThree, imgFour, titleOne, titleTwo, titleThree, titleFour}) {
  return (
    <div className='Card'>
        <div className='Card-flex'>
            <h3>{cardTitle}</h3>
        
            <div className='Product'> 
                <div className='Product-1'> 
                    <div className='Product__img'>
                        <img src={imgOne} className='Card__pic'></img>
                        <h5>{titleOne}</h5>

                        <img src={imgTwo} className='Card__pic'></img>
                        <h5>{titleTwo}</h5>
                    </div>
                </div>

                <div className='Product-2'>
                    <div className='Product__img'>
                        <img src={imgThree} className='Card__pic'></img>
                        <h5>{titleThree}</h5>

                        <img src={imgFour} className='Card__pic'></img>
                        <h5>{titleFour}</h5>
                    </div>
                </div>
            </div>

            <a href='#'>view your browsing history</a>
        </div>

        

    </div>




    )
}

export default Product