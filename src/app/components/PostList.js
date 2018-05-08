import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostItem from './PostItem';
import Pagination from './Pagination'
import { fetchPosts } from '../actions/posts';

const ITEMS_PER_PAGE = 5;

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            total: 10
        };
    }

    componentWillReceiveProps(nextProps) {
        const totalCount = window.localStorage.getItem('total-count');

        this.setState({
            total: totalCount ? Math.ceil(+totalCount / ITEMS_PER_PAGE) : 0
        })
    }
    
    componentDidMount() {
        const { page } = this.state;
        
        this.props.fetchPosts(page, ITEMS_PER_PAGE);
    }

    onPageChange = (page) => {
        this.props.fetchPosts(page, ITEMS_PER_PAGE);

        this.setState({ page });
    }

    render() {
        const posts = this.props.posts.map(post => (
            <PostItem key={post.id} id={post.id} title={post.title} text={post.text} />
        ));

        return (
            <div>
                {posts}
                <div className="text-center">
                    <Pagination
                        currentPage={this.state.page} 
                        totalPages={this.state.total} 
                        onChange={this.onPageChange} />
                </div>
            </div>
        );
    }
}

PostList.propTypes = {

};

export default connect((state) => ({
    posts: state.posts
}), {
    fetchPosts
})(PostList);