import React from 'react';
import './filter-box.component.scss';

const FilterBox = () => {
    return(
        <div className='filter-box'>
            <form className='filter-form'>
                <label>Organization</label>
                <select>
                    <option value=""></option>
                </select>
                <label>Username</label>
                <input type="text" placeholder='User' />
                <label>Email</label>
                <input type="email" placeholder='Email' />
                <label>Date</label>
                <input type="date" placeholder='Date' />
                <label>Phone Number</label>
                <input type="tel" placeholder='Phone Number' />
                <label>Status</label>
                <select>
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                    <option value='pending'>Pending</option>
                    <option value='blacklisted'>Blacklisted</option>
                </select>
                <div className="buttons">
                    <button className='reset'>Reset</button>
                    <button className='filter'>Filter</button>
                </div>
            </form>
        </div>
    )
}

export default FilterBox;