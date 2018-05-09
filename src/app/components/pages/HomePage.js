import React from 'react';

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