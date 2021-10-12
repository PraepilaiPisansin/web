import React, { Component } from 'react'
import axios from 'axios';
import PeopleList from '../components/PeopleList';
import Sort from './Sort';

export default class RegionFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            regionActive: "",
            sort: ''
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
    }

   selectRegion = e => {
        this.setState({ regionActive: e.target.value });
    };

    getUnique(arr, comp) {
        const unique = arr
            .map(e => e[comp])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => arr[e])
            .map(e => arr[e]);
        return unique;
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

    render() {

        const uniqueRegion = this.getUnique(this.state.people, "region");

        const people = this.state.people;
        const regionActive = this.state.regionActive;

        const regionDropdown = people.filter((data) => {
            return data.region === regionActive;
        }).map((data, i) => {
            return <PeopleList obj={data} key={i} />
        })
        const regionLength = regionDropdown.length;
        return (
            <main class="main">
                <Sort
                    count={regionLength}
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
                <label>Choose Region</label>
                <t> </t>
                <select
                    type="text"
                    className="form-control col-sm-3"
                    value={this.state.regionActive}
                    onChange={this.selectRegion}
                >
                    {uniqueRegion.sort((a, b) => (b.region < a.region ? 1 : -1))
                        .map(c => (
                            <option key={c.id} value={c.region}>
                                {c.region}
                            </option>
                        ))}
                </select>
                <span><i class="fas fa-angle-down arrow-icon"></i></span>
                
                <div class="row-data">
                    {regionDropdown}
                </div>
            </main>
        )
    }
}
