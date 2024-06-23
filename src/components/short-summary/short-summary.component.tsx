import React from 'react';
import User from '../../assets/images/user.svg';
import './short-summary.component.scss';

const ShortSummary = () => {
    return(
        <div className='short-summary'>
            <div className="top">
                <div className="left">
                    <img src={User} alt='' />
                    <div className="details">
                        <p>Grace Effiom</p>
                        <p></p>
                    </div>
                </div>
                <div className="middle">
                    <p>User's Tier</p>
                    <p></p>
                </div>
                <div className="right">
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div className="bottom">
                <p>General Details</p>
                <p>Documents</p>
                <p>Bank Details</p>
                <p>Loans</p>
                <p>Savings</p>
                <p>App and System</p>
            </div>
        </div>
    )
}

export default ShortSummary