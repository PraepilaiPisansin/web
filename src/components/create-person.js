import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import moment from 'moment'

import axios from 'axios';

export default class CreatePerson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lsname: '',
            email: '',
            age: '',
            sex: '',
            birth: '',
            country: '', 
            region: '',
            jobs:'',
            pWeight: '',
            pHeight: '',
            formErrors: {}
        };
        this.initialState = this.state;

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    dateChange = (birth) => {
        this.setState({ birth: birth});
    }
    selectCountry=(country)=> {
        this.setState({ country: country });
    }

    selectRegion(region) {
        this.setState({ region: region });
    }


    validate() {
        const { name, lsname, email, age, sex, birth, country, region, jobs,pWeight,pHeight} = this.state;
        let formErrors = {};
        let formIsValid = true;
     
        if (!name) {
            formIsValid = false;
            formErrors["nameErr"] = "please enter valid first name. ";
        } else if (!(/^[a-zA-Zก-๙]+$/.test(name))) {
            formIsValid = false;
            formErrors["nameErr"] = " please only alphabet not number or symbols";
        }

        if (!lsname) {
            formIsValid = false;
            formErrors["lsnameErr"] = " please enter valid last name.";
        } else if (!(/^[a-zA-Zก-๙]+$/.test(lsname))) {
            formIsValid = false;
            formErrors["lsnameErr"] = " please only alphabet not number or symbols";
        }


        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "please enter valid Email.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

            formIsValid = false;
            formErrors["emailErr"] = "invalid email id.";
        }
        
        if (!age) {
            formIsValid = false;
            formErrors["ageErr"] = " please enter valid Age.";
        } else if (!(/^[0-9]+$/.test(age))) {
            formIsValid = false;
            formErrors["ageErr"] = " please only 1-9";
        }

        if (sex === '' || sex === "select") {
            formIsValid = false;
            formErrors["sexErr"] = "please select Sex.";
        }
        if (birth === '' || birth === "selected") {
            formIsValid = false;
            formErrors["birthErr"] = "please select birth.";
        }

        if (country === '' || country === "selected") {
            formIsValid = false;
            formErrors["countryErr"] = "please select country.";
        } 
        if (region === '' || region === "selected") {
            formIsValid = false;
            formErrors["regionErr"] = "please select region.";
        }
        if (!jobs) {
            formIsValid = false;
            formErrors["jobsErr"] = " please enter valid your job.";
        } else if (!(/^[a-zA-Z]+$/.test(jobs))) {
            formIsValid = false;
            formErrors["jobsErr"] = " please only a-z";
        }
        if (!pWeight) {
            formIsValid = false;
            formErrors["pWeightErr"] = " please enter valid pWeight.";
        } else if (!(/^[0-9]+$/.test(pWeight))) {
            formIsValid = false;
            formErrors["pWeightErr"] = " please only 1-9";
        }
        if (!pHeight) {
            formIsValid = false;
            formErrors["pHeightErr"] = " please enter valid pHeight.";
        } else if (!(/^[0-9]+$/.test(pHeight))) {
            formIsValid = false;
            formErrors["pHeightErr"] = " please only 1-9";
        }

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }
    onSubmit = (e) => {
        e.preventDefault();
        const peopleObject = {
            name: this.state.name,
            lsname: this.state.lsname,
            email: this.state.email,
            age: this.state.age,
            sex: this.state.sex,
            birth: this.state.birth,
            country:this.state.country,
            region:this.state.region,
            jobs:this.state.jobs,
            pWeight:this.state.pWeight,
            pHeight:this.state.pHeight

        };

        if (this.validate()) {
            axios.post('http://localhost:4000/people/create', peopleObject)
                .then(res => {
                    console.log(this.state);
                    this.props.history.push('/people-table')
                }
                );
        }

    }

render() {
    const { nameErr, lsnameErr, emailErr, ageErr, sexErr, birthErr, countryErr, regionErr, jobsErr, pWeightErr, pHeightErr } =
        this.state.formErrors;
    return (
       <main class="main">
            <div className="form-wrapper">
                <form onSubmit={this.onSubmit}>
                    <div class="card-form">
                        <h1><i class="fas fa-plus-circle mr-4"></i>Add person</h1>
                        <div class="h1-line" />
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
                                    classname={nameErr ? ' showError' : ''}
                                    className="form-control"
                                />
                                {nameErr &&
                                    <div className="txtError">{nameErr}</div>
                                }
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
                                    classname={lsnameErr ? ' showError' : ''}
                                />
                                {lsnameErr &&
                                    <div className="txtError">{lsnameErr}</div>
                                }
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
                                    classname={emailErr ? ' showError' : ''}
                                    />
                                    {emailErr &&
                                    <div className="txtError">{emailErr}</div>
                                    }
                                </div>

                                {/*sex*/}
                                <div class="col-sm-3 mb-2">
                                    <label htmlFor="sex">Sex</label>
                                    <select name="sex"
                                        type="text"
                                        className="form-control"
                                        value={this.state.sex}
                                        onChange={this.handleChange}
                                        className={sexErr ? ' showError' : ''} >
                                        <option value="select">    Select Sex   </option>
                                    <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>

                                    {sexErr &&
                                        <div className="txtError">{sexErr}</div>
                                    }
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
                                            classname={birthErr ? ' showError' : ''}
                                        />
                                    </div>
                                    {birthErr &&
                                        <div className="txtError">{birthErr}</div>
                                    }
                                </div>

                            {/*age*/}
                            <div class="col-sm-3 mb-2">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    className="form-control"
                                    placeholder="Enter Your Age"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    classname={ageErr ? ' showError' : ''}
                                />
                                {ageErr &&
                                    <div className="txtError">{ageErr}</div>
                                }
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
                                    classname={pWeightErr ? ' showError' : ''}
                                />
                                {pWeightErr &&
                                    <div className="txtError">{pWeightErr}</div>
                                }
                            </div>

                            {/*pHeight*/}
                            <div class="col-sm-3 mb-2">
                                <label htmlFor="pHeight">Height</label>
                                <input
                                    type="number"
                                    name="pHeight"
                                    className="form-control"
                                    placeholder="centimetres"
                                    value={this.state.pHeight}
                                    onChange={this.handleChange}
                                    classname={pHeightErr ? ' showError' : ''}
                                />
                                {pWeightErr &&
                                    <div className="txtError">{pHeightErr}</div>
                                }
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
                                    classname={jobsErr ? ' showError' : ''}
                                    className="form-control"
                                />
                                {jobsErr &&
                                    <div className="txtError">{jobsErr}</div>
                                }
                            </div>
                            
                            {/*Country */}
                            <div class='col-sm-3 mb-2'>
                                <label htmlFor="country">Country</label>
                                <CountryDropdown
                                    type="text"
                                    name='country'
                                    value={this.state.country}
                                    onChange={this.selectCountry}
                                    classname={countryErr ? ' showError' : ''}
                                    />
                                {countryErr &&
                                    <div className="txtError">{countryErr}</div>
                                }
                            </div>
                            {/*Region */}
                            <div class='col-sm-3 mb-2'>
                                <label htmlFor="region">Region</label>
                                <RegionDropdown
                                    type="text"
                                    name='region'
                                    country={this.state.country}
                                    value={this.state.region}
                                    onChange={(region) => this.selectRegion(region)}
                                    classname={regionErr ? ' showError' : ''}
                                    
                                     />
                                {regionErr &&
                                    <div className="txtError">{regionErr}</div>
                                }
                            </div>
                            
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                <button type="submit" class="btn-style" onClick={e =>
                                    window.confirm("Do you want to add this data?") &&
                                    this.onSubmit(e)
                                }><i class="fas fa-plus-circle"> add</i></button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div> 
                </main>


        )

    }
}