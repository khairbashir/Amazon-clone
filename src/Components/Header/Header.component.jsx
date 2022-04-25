import React from "react";
import './Header.style.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

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
                    <span className="navBar__optionOne header__fit">fit</span>
                    <span className="navBar__optionTwo header__fit">prime</span>
                </div>

                <Link to={'signin'}>
                    <div className="navBar__option">
                        <span className="header-text">Hello,</span>
                        <span className="header-sign">Sign In</span>
                    </div>
                </Link>

                <div className="navBar__option">
                    <span className="navBar__optionOne">Return</span>
                    <span className="navBar__optionTwo">& Orders</span>
                </div>

                <div className="navBar__optionBasket">
                    <ShoppingCartOutlinedIcon className="Cart"/>
                    <span className="navBar__optionTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header