import React from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from "react-router-dom";

const PostItem = ({ title, text, id }) => {
    return (
        <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h3">
                    <Link to={'/posts/' + id}>{title}</Link>
                </Panel.Title>
            </Panel.Heading>
            <Panel.Body>{text}</Panel.Body>
        </Panel>
    );
};

export default PostItem;