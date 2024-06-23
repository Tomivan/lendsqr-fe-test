import React from 'react';
import View from '../../assets/images/view-details.svg';
import Blacklist from '../../assets/images/blacklist.svg';
import Activate from '../../assets/images/activate.svg';
import './action-box.component.scss';

const ActionBox = () => {
    return(
        <div className='action-box'>
            <div className="action">
                <img src={View} alt="an icon of an eye" />
                <p>View Details</p>
            </div>
            <div className="action">
                <img src={Blacklist} alt="an icon of a person and an x symbol" />
                <p>Blacklist User</p>
            </div>
            <div className="action">
                <img src={Activate} alt="an icon of a person and a tick symbol" />
                <p>Activate User</p>
            </div>
        </div>
    )
}

export default ActionBox;