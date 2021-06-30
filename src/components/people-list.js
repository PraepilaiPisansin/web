import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import List from './List';

export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            searchPeople: '',
            
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/people')
            .then(res => {
                this.setState({
                    people: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleInput = (e) => {
        console.log(e.target.value);
        this.setState({ searchPeople: e.target.value })
    }
    
    render() {
        let filteredPeople = this.state.people.filter((peo) => {
            return peo.name.toLowerCase().includes(this.state.searchPeople.toLowerCase())

        })
        const maleTotal = this.state.people.filter((item) => {
            if (item.sex === 'Male') {
                return true;
            } else {
                return false;
            }
        }).length;

        const femaleTotal = this.state.people.filter((item) => {
            if (item.sex === 'Female') {
                return true;
            } else {
                return false;
            }
        }).length;

       
        return (
            <div class="App-bg">
                
                <SearchBox handleInput={this.handleInput}/>
                <div class="amount">
                    <p class="t">Amounts</p>
                    <p class="num">{this.state.people.length}</p>
                </div>
                <div class="amount">
                    <p class="t">Male</p>
                    <p class="num">{maleTotal}</p>
                </div>
                <div class="amount">
                    <p class="t">Female</p>
                    <p class="num">{femaleTotal}</p>
                </div>
                <List filteredPeople={filteredPeople}  />
            </div>



        )

    }
}