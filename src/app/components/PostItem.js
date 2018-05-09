import React from 'react';
import PropTypes from "prop-types";
import { Panel } from 'react-bootstrap';
import { Link } from "react-router-dom";

const TEXT_LIMIT = 300;

const PostItem = ({ post }) => {
    const { title, text, id } = post;

    return (
        <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h3">
                    <Link to={'/posts/' + id}>{title}</Link>
                </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                {text.length > TEXT_LIMIT ? text.substring(0, TEXT_LIMIT) + '...' : text}
            </Panel.Body>
        </Panel>
    );
};

PostItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired
};

export default PostItem;