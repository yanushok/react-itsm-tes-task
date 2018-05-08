import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import InlineError from '../Messages/InlineError';

class PostForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            errors: {},
            isLoading: false,
            data: {
                title: '',
                text: ''
            }
        };
    }

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate(this.state.data);
        this.setState({ errors });

        if (Object.keys(errors).length === 0) {
          this.setState({ loading: true });
          const { data } = this.state;
          data.timestamp = new Date().toString();

          this.props
            .submit(this.state.data)
            .catch(err =>
              this.setState({ loading: false })
            );
        }
    };

    validate = data => {
        const errors = {};

        if (!data.title) errors.title = "Can't be blank";
        if (!data.text) errors.text = "Can't be blank";
        
        return errors;
    };

    render() {
        const { data, errors, loading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup validationState={errors.title ? 'error' : null}>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl onChange={this.onChange} value={this.state.data.title} name="title" />
                    {errors.title && <InlineError text={errors.title} />}
                </FormGroup>
                <FormGroup validationState={errors.text ? 'error' : null}>
                    <ControlLabel>Text</ControlLabel>
                    <FormControl onChange={this.onChange} value={this.state.data.text} componentClass="textarea" name="text" />
                    {errors.text && <InlineError text={errors.text} />}
                </FormGroup>
                <Button type="submit">Create</Button>
            </form>
        );
    }
}

PostForm.propTypes = {
    submit: PropTypes.func.isRequired,
}

export default PostForm;