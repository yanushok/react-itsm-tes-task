import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Panel } from "react-bootstrap";

import BasePage from './BasePage';
import { getPost } from '../../actions/posts';

class PostPage extends Component {
    componentDidMount() {
        const { getPost, match } = this.props;

        getPost(match.params.id);
    }

    _pageContent = () => {
        const { post: { title, text, timestamp } } = this.props;
        const time = new Date(timestamp);

        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">
                        {title}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {text}
                </Panel.Body>
                <Panel.Footer>
                    {time.toLocaleString()}
                </Panel.Footer>
            </Panel>
        );
    }

    render () {
        return (
            <BasePage children={this._pageContent()} />
        )
    }
}

PostPage.propTypes = {
    post: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired,
}

export default connect((state) => ({
    post: state.post
}), {
    getPost
})(PostPage);