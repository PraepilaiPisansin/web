import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default class EditPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lsname: '',
            email: '',
            rollno: '',
            age: '',
            sex: '',
            birth: '',
            country: '',
            region: '',
            jobs:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/people/edit/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    lsname: res.data.lsname,
                    email: res.data.email,
                    rollno: res.data.rollno,
                    age: res.data.age,
                    sex: res.data.sex,
                    //birth:res.data.birth,
                    country: res.data.country,
                    region: res.data.region,
                    jobs: res.data.jobs

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
            rollno: this.state.rollno,
            age: this.state.age,
            sex: this.state.sex,
            birth: this.state.birth,
            country: this.state.country,
            region: this.state.region,
            jobs: this.state.jobs
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
            rollno: '',
            age: '',
            sex: '',
            birth: '',
            country: '',
            region: '',
            jobs:''
        })
    }

    render() {

        return (
            <div class="App-bg">
                <div class="box">
                    <div className="form-wrapper">
                        <br />
                       
                        <form onSubmit={this.onSubmit}>
                            <card class="card card-form">
                                <h1>update people</h1>

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

                                    {/*Contact*/}
                                    <div class="col-sm-3 mb-2">
                                        <label htmlFor="rollno">Phone</label>
                                        <input
                                            type="tel"
                                            name="rollno"
                                            //pattern="^0[0-9]{9}"
                                            className="form-control"
                                            placeholder="Enter your phone"
                                            value={this.state.rollno}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    {/*sex*/}
                                    <div class="col-sm-3 mb-2">
                                        <label htmlFor="sex">Sex</label>
                                        <select name="sex"
                                            class=" form-control custom-select "
                                            value={this.state.sex}
                                            onChange={this.handleChange}
                                        >
                                            <option value="select">    Select Sex   </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
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
                                            value={this.state.country}
                                            onChange={this.selectCountry}
                                        />
                                    </div>

                                    {/*Region */}
                                    <div class='col-sm-3 mb-2'>
                                        <label htmlFor="region">Region</label>
                                        <RegionDropdown
                                            name='region'
                                            country={this.state.country}
                                            value={this.state.region}
                                            onChange={(region) => this.selectRegion(region)}
                                        />
                                    </div>

                                </div>

                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="submit" class="btn-filter btn-sm btn3d">update</button>
                                </div>

                            </card>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}