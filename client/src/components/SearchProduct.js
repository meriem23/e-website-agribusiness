import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getKeyword } from '../actions/ProductActions'
import SearchIcon from '@material-ui/icons/Search'

class SearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }
    handleChange = e => {
        this.setState({ text: e.target.value },
            () => this.props.getKeyword(this.state.text)
        );
    };
    render() {
        return (
            <div className="SearchBar">
                <Form>
                    <Form.Control
                        type="text"
                        placeholder="Search for a Product"
                        className="ProductSearch"
                        onChange={this.handleChange}
                    />
                </Form>
                <i class="fas fa-search fa-2x SearchIcon"></i>
            </div>
        );
    }
}


export default connect(null, { getKeyword })(SearchProduct)