import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
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
                    <NavItem onClick={this.goToCreatePostPage}>
                        <Glyphicon glyph="plus" /> Create Post
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default TopNavigation;