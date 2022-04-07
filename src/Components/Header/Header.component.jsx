import React from "react";
import './Header.style.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
    return (
        <div className="header">
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon-logo' />

            <div className="header__search">
                <input type='text' className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="navBar__option">
                    <span className="navBar__optionOne">fit</span>
                    <span className="navBar__optionTwo">prime</span>
                </div>

                <div className="navBar__option">
                    <span className="navBar__optionOne">Hello,</span>
                    <span className="navBar__optionTwo">Sign In</span>
                </div>

                <div className="navBar__option">
                    <span className="navBar__optionOne">Return</span>
                    <span className="navBar__optionTwo">& Orders</span>
                </div>

                <div className="navBar__optionBasket">
                    <ShoppingCartOutlinedIcon className="header__cartIcon"/>
                    <span className="navBar__optionTwo navBar__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header