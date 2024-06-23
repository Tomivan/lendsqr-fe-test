import React from 'react';
import Filter from '../../assets/images/filter.svg';
import './table.component.scss';

const Table = () => {
    return(
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>
                            Organization 
                            <img src={Filter} alt="an icon of three lines" className='table-icon' />
                        </th>
                        <th>Username 
                            <img src={Filter} alt="an icon of three lines" className='table-icon'/>
                        </th>
                        <th>
                            Email 
                            <img src={Filter} alt="an icon of three lines" className='table-icon'/>
                        </th>
                        <th>
                            Phone Number 
                            <img src={Filter} alt="an icon of three lines" className='table-icon' />
                        </th>
                        <th>
                            Date Joined 
                            <img src={Filter} alt="an icon of three lines" className='table-icon' />
                        </th>
                        <th>
                            Status 
                            <img src={Filter} alt="an icon of three lines" className='table-icon' />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table