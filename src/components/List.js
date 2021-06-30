import React, { Component } from 'react';
import People from './People';

class List extends Component {
    people = () => {
        return this.props.filteredPeople.map((res, i) => {
            return <People obj={res} key={i} />
        })
       
    }
    render() {

        return (
            <div class="row list-left">

                {this.people()}
            </div>
        );
    }
}

export default List;