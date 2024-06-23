import React from 'react';
import Logo from '../../assets/images/logo.svg';
import Search from '../../assets/images/search.svg';
import Bell from '../../assets/images/notification.svg';
import Avatar from '../../assets/images/avatar.svg';
import './topbar.component.scss';

const Topbar = () => {
    return(
        <div className='topbar'>
            <img src={Logo} alt="The official logo of Lendsqr" className='logo'/>
            <div className="search">
                <input type="search" placeholder='Search for anything' />
                <img src={Search} alt="a search icon" className='search-icon'/>
            </div>
            <div className="end">
                <p>Docs</p>
                <img src={Bell} alt="an icon of a bell" className='notification' />
                <div className="name">
                    <img src={Avatar} alt='a laughing girl wearing glasses with her face upwards' />
                    <p>Adedeji</p>
                </div>
            </div>
        </div>
    )
}

export default Topbar;