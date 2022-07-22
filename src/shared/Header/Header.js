import React from 'react';
// import { renderIntoDocument } from 'react-dom/test-utils';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/common.scss';

const Header = () => {
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
                    <div className='logo'>
                        <img
                            src={Logo}
                            className='logo-img'
                            alt='realestate logo'></img>
                    </div>
                    <div className='navbar'>
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
                    <div className='sign-in'>Sign In</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
