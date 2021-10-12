import React, { Component } from 'react';
import axios from 'axios';
import PeopleList from '../components/PeopleList';
import Sort from '../filters/Sort';

export default class NameFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      filterName: [
        { id: 3, al: "A", value: "A" },
        { id: 4, al: "B", value: "B" },
        { id: 5, al: "C", value: "C" },
        { id: 6, al: "D", value: "D" },
        { id: 7, al: "E", value: "E" },
        { id: 8, al: "F", value: "F" },
        { id: 9, al: "G", value: "G" },
        { id: 10, al: "H", value: "H" },
        { id: 11, al: "I", value: "I" },
        { id: 12, al: "J", value: "J" },
        { id: 13, al: "K", value: "K" },
        { id: 14, al: "L", value: "L" },
        { id: 15, al: "M", value: "M" },
        { id: 16, al: "N", value: "N" },
        { id: 17, al: "O", value: "O" },
        { id: 18, al: "P", value: "P" },
        { id: 19, al: "Q", value: "Q" },
        { id: 20, al: "R", value: "R" },
        { id: 21, al: "S", value: "S" },
        { id: 22, al: "T", value: "T" },
        { id: 23, al: "U", value: "U" },
        { id: 24, al: "V", value: "V" },
        { id: 25, al: "W", value: "W" },
        { id: 26, al: "X", value: "X" },
        { id: 27, al: "Y", value: "Y" },
        { id: 28, al: "Z", value: "Z" },
      ],
      people: [],
      activeFilter: [],
      sort: "",
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
    const { filterName, activeFilter } = this.state;
    if (filter === "ALL") {
      if (activeFilter.length === filterName.length) {
        this.setState({ activeFilter: [] });
      } else {
        this.setState({ activeFilter: filterName.map(filter => filter.value) });
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
  

  render() {
    const { filterName, activeFilter } = this.state;
    let filteredList;
    if (
      activeFilter.length === 0 ||
      activeFilter.length === filterName.length
    ) {
      filteredList = this.state.people;
    } else {
      filteredList = this.state.people.filter((item) =>
        item.name.includes(this.state.activeFilter)

      );
    }
    const nameLength = filteredList.length;
    return (
      <main class="main">
        <Sort
          count={nameLength}
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
        <div class='al-left'>
          <div class="al-checkbox">
            <input
              id="myInput"
              type="checkbox"
              onClick={() => this.onFilterChange("ALL")}
              checked={activeFilter.length === filterName.length}
            />
            <label htmlFor="myInput">All</label>
          </div>

          <div class="scrollbar">
          {this.state.filterName.map(filter => (
            <div class="al-checkbox ">
              <input
                id={filter.id}
                type="checkbox"
                checked={activeFilter.includes(filter.value)}
                onClick={() => this.onFilterChange(filter.value)}
              />
              <label htmlFor={filter.id} >{filter.al}</label>
            </div>
          ))}</div></div>


        <div class='al-right row-data'>
          {filteredList.map((data, i) => (
            <PeopleList obj={data} key={i} />
          ))}
        </div>
        {/*
       */}
      </main>
    );
  }
}

