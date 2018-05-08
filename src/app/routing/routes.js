import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { Provider, connect } from "react-redux";
import PropTypes from "prop-types";

import HomePage from "../components/pages/HomePage";
import CreatePostPage from '../components/pages/CreatePostPage';

export const history = createHistory();

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                {/* ConnectedRouter will use the store from Provider automatically */}
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={HomePage} />
                        <Switch>
                            <Route exact path="/posts" component={HomePage} />
                            <Route exact path="/posts/create" component={CreatePostPage} />
                            {/* <Route exact path="/posts/:id" component={PostsList} /> */}
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

Routes.propTypes = {
    store: PropTypes.object.isRequired,
};

export default connect(() => ({}))(Routes);