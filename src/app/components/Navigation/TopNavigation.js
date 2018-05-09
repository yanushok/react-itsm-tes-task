import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from "react-router-dom";

import { history } from '../../routing/routes';

class TopNavigation extends Component {

    goToCreatePostPage = () => {
        history.push("/posts/create");
    }

    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/">Awesome Project</NavLink>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <LinkContainer activeClassName="" to="/posts/create">
                        <NavItem>
                            <Glyphicon glyph="plus" /> Create Post
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}

export default TopNavigation;