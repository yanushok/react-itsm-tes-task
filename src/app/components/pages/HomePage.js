import React from 'react';
import { Panel } from 'react-bootstrap';

import BasePage from './BasePage';
import PostList from '../PostList';

const HomePage = (props) => {
    const _pageContent = () => (
        <PostList />
    );
    
    return (
        <BasePage children={_pageContent()} />
    );
};

export default HomePage;