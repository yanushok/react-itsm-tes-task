import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostForm from '../Forms/PostForm';
import BasePage from './BasePage';
import { createPost } from "../../actions/posts";

class CreatePostPage extends Component {
    addPost = post => this.props.createPost(post).then(() => this.props.history.push("/"));

    _pageContent = () => {
        return (
            <PostForm submit={this.addPost} />
        );
    }

    render() {
        return (
            <BasePage children={this._pageContent()} />
        );
    }
}

CreatePostPage.propTypes = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(CreatePostPage);