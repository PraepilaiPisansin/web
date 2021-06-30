import React, { Component } from 'react';


function SearchBox(props) {

    return (
        <div class="col-6 input-group search-peo">
            <input
                type='text'
                onChange={props.handleInput}
                placeholder="Search Name..."
                className="form-control form-control"
                 />
            <span class="input-group-text"><i class="fas fa-search"></i></span>
            
        </div>
    )
}

export default SearchBox;