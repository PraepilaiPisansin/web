import React, { Component } from 'react';


class SearchBox extends Component {
    render(){

    return (
        <div class="input-group search-class">
            <input
                type='text'
                onChange={this.props.searchData}
                placeholder="Enter data to be searched"
                className="form-control"
                 />
            <span><i class="fas fa-search search-icon"></i></span>
        </div>
    )
}}

export default SearchBox;