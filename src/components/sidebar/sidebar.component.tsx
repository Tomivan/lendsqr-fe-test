import React from 'react';
import Dashboard from '../../assets/images/dashboard.svg';
import Users from '../../assets/images/users.svg';
import  Switch  from '../../assets/images/switch.svg';
import Guarantors from '../../assets/images/guarantors.svg';
import Loans from '../../assets/images/loans.svg';
import DecisionModels from '../../assets/images/decision-models.svg';
import Savings from '../../assets/images/savings.svg';
import LoanRequests from '../../assets/images/loan-requests.svg';
import Whitelist from '../../assets/images/wishlist.svg';
import Karma from '../../assets/images/karma.svg';
import Organization from '../../assets/images/organization.svg';
import LoanProducts from '../../assets/images/loan-products.svg';
import SavingsProduct from '../../assets/images/savings-product.svg';
import Fees from '../../assets/images/fees-and-charges.svg';
import Transactions from '../../assets/images/transactions.svg';
import Services from '../../assets/images/services.svg';
import ServiceAccounts from '../../assets/images/service-account.svg';
import Settlement from '../../assets/images/settlements.svg';
import Reports from '../../assets/images/reports.svg';
import Preferences  from '../../assets/images/preferences.svg';
import FeesAndPricing from '../../assets/images/fees-and-services.svg';
import AuditLogs from '../../assets/images/audit-logs.svg';
import './sidebar.component.scss';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <p>
                <img src={Switch} alt="an icon of a briefcase" className='sidebar-icon' />
                Switch Organization
            </p>
            <p>
                <img src={Dashboard} alt="an icon of a house" className='sidebar-icon' />
                Dashboard
            </p>
            <p>CUSTOMERS</p>
            <p>
                <img src={Users} alt="an icon of two people" className='sidebar-icon' />
                Users
            </p>
            <p>
                <img src={Guarantors} alt="an icon of three people" className='sidebar-icon' />
                Guarntors
            </p>
            <p>
                <img src={Loans} alt="an icon of a moneybag" className='sidebar-icon' />
                Loans
            </p>
            <p>
                <img src={DecisionModels} alt="an icon of two hands shaking" className='sidebar-icon' />
                Decision Models
            </p>
            <p>
                <img src={Savings} alt="an icon of a piggybank" className='sidebar-icon'/>
                Savings
            </p>
            <p>
                <img src={LoanRequests} alt="an icon of a hand under a moneybag" className='sidebar-icon' />
                Loan Requests
            </p>
            <p>
                <img src={Whitelist} alt="an icon of a person and a tick symbol" className='sidebar-icon'/>
                Whitelist
            </p>
            <p>
                <img src={Karma} alt="an icon of a person and an X symbol" className='sidebar-icon' />
                Karma
            </p>
            <p>BUSINESSES</p>
            <p>
                <img src={Organization} alt="an icon of a briefcase"  className='sidebar-icon'/>
                Organization
            </p>
            <p>
                <img src={LoanProducts} alt="an icon of a hand under a moneybag" className='sidebar-icon' />
                Loan Products
            </p>
            <p>
                <img src={SavingsProduct} alt="an icon of a house"  className='sidebar-icon'/>
                Savings Product
            </p>
            <p>
                <img src={Fees} alt="an icon of two stacked coins of three each" className='sidebar-icon' />
                Fees And Charges
            </p>
            <p>
                <img src={Transactions} alt="an icon of two arrows in opposite direction" className='sidebar-icon' />
                Transaction
            </p>
            <p>
                <img src={Services} alt="an icon of a galaxy" className='sidebar-icon' />
                Services
            </p>
            <p>
                <img src={ServiceAccounts} alt="an icon of a person and a gear"  className='sidebar-icon'/>
                Service Accounts
            </p>
            <p>
                <img src={Settlement} alt="an icon of a scroll" className='sidebar-icon'/>
                Settlements
            </p>
            <p>
                <img src={Reports} alt="an icon of a bar chart" className='sidebar-icon'/>
                Reports
            </p>
            <p>SETTINGS</p>
            <p>
                <img src={Preferences} alt="an icon of sliders" className='sidebar-icon'/>
                Preferences
            </p>
            <p>
                <img src={FeesAndPricing} alt="an icon of a badge percent" className='sidebar-icon'/>
                Fees and Pricing
            </p>
            <p>
                <img src={AuditLogs} alt="an icon of a clipboard" className='sidebar-icon' />
                Audit Logs
            </p>
        </div>
    )
}

export default Sidebar;