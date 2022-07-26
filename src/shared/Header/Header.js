import React, { useState } from 'react';
// import { renderIntoDocument } from 'react-dom/test-utils';
import { FaBars, FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/common.scss';

const Header = () => {
    const menu = () => {
        console.log('hiii..');
    };
    const headerLinks = {
        links: [
            'Buy',
            'Rent',
            'Sold',
            'New Developments',
            'Price Estimator',
            'Find Agents',
            'Auction Results',
            'Advice',
            'News',
            'Our Network',
            'Loans',
            'Conveyancing',
        ],
    };

    return (
        <div className='main'>
            <div className='header flex'>
                <div className='inner-header flex'>
                    <FaBars className='humburg-menu' />
                    <div className='logo'>
                        <img
                            src={Logo}
                            className='logo-img'
                            alt='realestate logo'></img>
                    </div>
                    <div className='navbar sidebar'>
                        <ul className='nav-links flex'>
                            {headerLinks.links.map((link, key) => (
                                <li
                                    className='li--style-none navigation-links'
                                    key={link}>
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <FaUser className='profile-icon' />
                    <div className='sign-in'>Sign In</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
