import React, { Component } from 'react';
import axios from 'axios';
import PeopleList from '../components/PeopleList';
import Sort from './Sort';
export default class SexFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            filterSex: [
                { id: 1, name: "Male", value: "Male" },
                { id: 2, name: "Female", value: "Female" }
            ],
            people: [],
            activeFilter: [],
            sort: '',
            rangeValues: [10, 25, 50, 75, 100],
            rangeData: 0,


        };
        this.sortByAge = this.sortByAge.bind(this);
        this.sortByWeight = this.sortByWeight.bind(this);
        this.sortByHeight = this.sortByHeight.bind(this);
        this.sortByBirth = this.sortByBirth.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByEmail = this.sortByEmail.bind(this);
        this.sortByCountry = this.sortByCountry.bind(this);
        this.sortByRegion = this.sortByRegion.bind(this);
        this.sortByJobs = this.sortByJobs.bind(this);

        this.rangeData = this.rangeData.bind(this);
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

    onFilterChange(filter) {
        const { filterSex, activeFilter } = this.state;
        if (filter === "ALL") {
            if (activeFilter.length === filterSex.length) {
                this.setState({ activeFilter: [] });
            } else {
                this.setState({ activeFilter: filterSex.map(filter => filter.value) });
            }
        } else {
            if (activeFilter.includes(filter)) {
                const filterIndex = activeFilter.indexOf(filter);
                const newFilter = [...activeFilter];
                newFilter.splice(filterIndex, 1);
                this.setState({ activeFilter: newFilter });
            } else {
                this.setState({ activeFilter: [...activeFilter, filter] });
            }
        }
    }

    sortByAge(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "age_lowest" ?
                    ((a.age > b.age) ? 1 : -1) :
                    sort === "age_highest" ?
                        ((a.age < b.age) ? 1 : -1) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }
    sortByWeight(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "weight_lowest" ?
                    ((a.pWeight > b.pWeight) ? 1 : -1) :
                    sort === "weight_highest" ?
                        ((a.pWeight < b.pWeight) ? 1 : -1) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }
    sortByHeight(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "height_lowest" ?
                    ((a.pHeight > b.pHeight) ? 1 : -1) :
                    sort === "height_highest" ?
                        ((a.pHeight < b.pHeight) ? 1 : -1) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }
    sortByBirth(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "birth_lowest" ?
                    ((a.birth > b.birth) ? 1 : -1) :
                    sort === "birth_highest" ?
                        ((a.birth < b.birth) ? 1 : -1) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }
    sortByName(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "name_lowest" ?
                    ((a.name.localeCompare(b.name))) :
                    sort === "name_highest" ?
                        ((b.name.localeCompare(a.name))) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }
    sortByEmail(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "email_lowest" ?
                    ((a.email > b.email) ? 1 : -1) :
                    sort === "email_highest" ?
                        ((a.email < b.email) ? 1 : -1) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }
    sortByCountry(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "country_lowest" ?
                    ((a.country > b.country) ? 1 : -1) :
                    sort === "country_highest" ?
                        ((a.country < b.country) ? 1 : -1) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }
    sortByRegion(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "region_lowest" ?
                    ((a.region > b.region) ? 1 : -1) :
                    sort === "region_highest" ?
                        ((a.region < b.region) ? 1 : -1) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }
    sortByJobs(e) {
        const sort = e.target.value;
        console.log(e.target.value);
        this.setState((state => ({
            sort: sort,
            people: this.state.people.slice().sort((a, b) => (
                sort === "jobs_lowest" ?
                    ((a.jobs > b.jobs) ? 1 : -1) :
                    sort === "jobs_highest" ?
                        ((a.jobs < b.jobs) ? 1 : -1) :
                        ((a._id < b._id) ? 1 : -1)
            ))
        })))
    }

    rangeData = (e) => {
        let keyword = e.target.value;
        this.setState({ rangeData: keyword })
    }
    render() {
        const { filterSex, activeFilter } = this.state;
        let filteredList;
        if (
            activeFilter.length === 0 ||
            activeFilter.length === filterSex.length
        ) {
            filteredList = this.state.people;
        } else {
            filteredList = this.state.people.filter((item) =>
                this.state.activeFilter.includes(item.sex)
            );
        }
        const sexLength = filteredList.length;
        return (
            <main class="main">
                <Sort
                    count={sexLength}
                    sort={this.state.sort}
                    sortByAge={this.sortByAge}
                    sortByWeight={this.sortByWeight}
                    sortByHeight={this.sortByHeight}
                    sortByBirth={this.sortByBirth}
                    sortByName={this.sortByName}
                    sortByEmail={this.sortByEmail}
                    sortByCountry={this.sortByCountry}
                    sortByRegion={this.sortByRegion}
                    sortByJobs={this.sortByJobs}
                ></Sort>

                
                <div class="sex-checkbox">
                    <input
                        id="myInput"
                        type="checkbox"
                        onClick={() => this.onFilterChange("ALL")}
                        checked={activeFilter.length === filterSex.length}
                    />
                    <label htmlFor="myInput">All</label>
                </div>
                {this.state.filterSex.map(filter => (
                    <div class="sex-checkbox">
                        <input
                            id={filter.id}
                            type="checkbox"
                            checked={activeFilter.includes(filter.value)}
                            onClick={() => this.onFilterChange(filter.value)}
                        />
                        <label htmlFor={filter.id}>{filter.name}</label>
                    </div>
                ))}
                
                <div class="row-data">
                    {filteredList.map((data, i) => (
                        <PeopleList obj={data} key={i} />
                    ))}
                </div>
            </main>
        );
    }
}

