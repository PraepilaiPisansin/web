import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default class EditPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lsname: '',
            email: '',
            age: '',
            sex: '',
            birth: new Date(),
            country: '',
            region: '',
            jobs: '',
            pWeight: '',
            pHeight: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/people/edit/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    lsname: res.data.lsname,
                    email: res.data.email,
                    age: res.data.age,
                    sex: res.data.sex,
                    //birth:res.data.birth,
                    country: res.data.country,
                    region: res.data.region,
                    jobs: res.data.jobs,
                    pWeight: res.data.pWeight,
                    pHeight: res.data.pHeight


                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    dateChange = (birth) => {
        this.setState({ birth: birth });
    }
    selectCountry = (country) => {
        this.setState({ country: country });
    }
    selectRegion(region) {
        this.setState({ region: region });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const peopleObject = {
            name: this.state.name,
            lsname: this.state.lsname,
            email: this.state.email,
            age: this.state.age,
            sex: this.state.sex,
            //birth: this.state.birth,
            country: this.state.country,
            region: this.state.region,
            jobs: this.state.jobs,
            pWeight: this.state.pWeight,
            pHeight: this.state.pHeight

        };

        axios.put('http://localhost:4000/people/update/' + this.props.match.params.id, peopleObject).then((res) => {
            console.log(res.data);
            alert("Updated Successfully");
            this.props.history.push('/people-list')
        }).catch((error) => {
            console.log(error)
        })


        this.setState({
            name: '',
            lsname: '',
            email: '',
            age: '',
            sex: '',
            birth: '',
            country: '',
            region: '',
            jobs: '',
            pWeight: '',
            pHeight: ''

        })
    }

    render() {


        return (
            <main class="main">
                <div className="form-wrapper">
                    <form onSubmit={this.onSubmit}>
                        <div class="card-form">
                            <h1><i class="fas fa-edit mr-4"></i>Edit person</h1>
                            <div class="h1-line"/>
                            <br />
                            <div class="row">
                                {/*first name*/}
                                <div class="col-sm-6 mb-2">
                                    <label htmlFor="name">First Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your first name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />

                                </div>
                                {/*last name*/}
                                <div class="col-sm-6 mb-2">
                                    <label htmlFor="lsname">Last Name</label>
                                    <input
                                        type="text"
                                        name="lsname"
                                        id="floatingInput"
                                        placeholder="Enter tour last name"
                                        value={this.state.lsname}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>

                                {/*email*/}
                                <div class="col-sm-6 mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                {/*sex*/}
                                <div class="col-sm-3 mb-2">
                                    <label htmlFor="sex">Sex</label>
                                    <select name="sex"
                                        className=" form-control"
                                        type="text"
                                        value={this.state.sex}
                                        onChange={this.handleChange} >
                                        <option value="select">    Select Sex   </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>

                                {/*birth*/}
                                <div class="col-sm-3 mb-2">
                                    <label htmlFor="birth">Birth</label>
                                    <div class="select">
                                        <DatePicker
                                            type="text"
                                            name="birth"
                                            className="form-control"
                                            placeholderText="Select Birth"
                                            showPopperArrow={true}
                                            dateFormat="dd/MMM/yyyy"
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            withPortal
                                            selected={this.state.birth}
                                            onChange={this.dateChange}
                                        />
                                    </div>
                                </div>

                                {/*age*/}
                                <div class="col-sm-3 mb-2">
                                    <label htmlFor="age">Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        className="form-control"
                                        placeholder="Age"
                                        value={this.state.age}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                {/*pWeight*/}
                                <div class="col-sm-3 mb-2">
                                    <label htmlFor="pWeight">Weight</label>
                                    <input
                                        type="number"
                                        name="pWeight"
                                        className="form-control"
                                        placeholder="kilograms"
                                        value={this.state.pWeight}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                {/*pHeight*/}
                                <div class="col-sm-3 mb-2">
                                    <label htmlFor="pHeight">Height</label>
                                    <input
                                        type="number"
                                        name="pHeight"
                                        className="form-control"
                                        placeholder="centimatres"
                                        value={this.state.pHeight}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                {/*jobs*/}
                                <div class="col-sm-3 mb-2">
                                    <label htmlFor="jobs">Jobs</label>
                                    <input
                                        type="text"
                                        name="jobs"
                                        placeholder="Enter your job"
                                        value={this.state.jobs}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>

                                {/*Country */}
                                <div class='col-sm-3 mb-2'>
                                    <label htmlFor="country">Country</label>
                                    <CountryDropdown
                                        name='country'
                                        type="text"
                                        value={this.state.country}
                                        onChange={this.selectCountry}
                                    />
                                </div>

                                {/*Region */}
                                <div class='col-sm-3 mb-2'>
                                    <label htmlFor="region">Region</label>
                                    <RegionDropdown
                                        name='region'
                                        type="text"
                                        country={this.state.country}
                                        value={this.state.region}
                                        onChange={(region) => this.selectRegion(region)}
                                    />
                                </div>

                            </div>

                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="submit" class="btn-style"><i class="fas fa-edit"> update</i></button>
                            </div>

                        </div>
                    </form>
                </div>
            </main>
        )

    }
}