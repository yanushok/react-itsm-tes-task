import React from 'react';
import { Panel } from 'react-bootstrap';

import TopNavigation from '../Navigation/TopNavigation';

const BasePage = (props) => (
    <div className="container">
        <TopNavigation />
        
        {props.children}
        
        <Panel>
            <Panel.Body>
            <p>&copy; {new Date().getFullYear()} Company, Inc.</p>
            </Panel.Body>
        </Panel>
    </div>
);

export default BasePage;
