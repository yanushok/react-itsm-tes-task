import React from 'react';

import TopNavigation from '../Navigation/TopNavigation';

const BasePage = (props) => (
    <div className="container">
        <TopNavigation />
        
        {props.children}

        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Company, Inc.</p>
        </footer>
    </div>
);

export default BasePage;
