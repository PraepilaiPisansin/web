import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


import axios from 'axios';

export default class CreatePeople extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lsname: '',
            email: '',
            rollno: '',
            age: '',
            sex: '',
            birth: new Date,
            country: '', 
            region: '',
            jobs:'',
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
        const { name, lsname, email, rollno, age, sex, birth, country, region, jobs} = this.state;
        let formErrors = {};
        let formIsValid = true;
     
        if (!name) {
            formIsValid = false;
            formErrors["nameErr"] = "please enter valid first name. ";
        }else if (!(/^[a-zA-Z]+$/.test(name))) {
            formIsValid = false;
            formErrors["nameErr"] = " please only a-z";
        }

        if (!lsname) {
            formIsValid = false;
            formErrors["lsnameErr"] = " please enter valid last name.";
        } else if (!(/^[a-zA-Z]+$/.test(lsname))) {
            formIsValid = false;
            formErrors["lsnameErr"] = " please only a-z";
        }


        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "please enter valid Email.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

            formIsValid = false;
            formErrors["emailErr"] = "invalid email id.";
        }
        if (!rollno) {
            formIsValid = false;
            formErrors["rollnoErr"] = "please enter your phone number.";
        }

        if (!rollno !== "undefined") {
            //var pattern = new RegExp(/^[0-9\b]+$/);
            var pattern = new RegExp(/^0[0-9]{8,9}$/);
            if (!pattern.test(rollno)) {
                formIsValid = false;
                formErrors["rollnoErr"] = "please enter only number.";
            } else if (rollno.length != 10) {
                formIsValid = false;
                formErrors["rollnoErr"] = "please enter valid phone number.";
            }
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

        this.setState({ formErrors: formErrors });
        return formIsValid;
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
            country:this.state.country,
            region:this.state.region,
            jobs:this.state.jobs

        };

        if (this.validate()) {
            axios.post('http://localhost:4000/people/create', peopleObject)
                .then(res => {
                    console.log(this.state);

                    alert('Added Successfully');
                    this.props.history.push('/people-table')
                }
                );
        }

    }

render() {
    const { nameErr, lsnameErr, emailErr, rollnoErr, ageErr, sexErr, birthErr, countryErr, regionErr,jobsErr } =
        this.state.formErrors;
    return (
        <div class="App-bg">
            <div className="form-wrapper">
                <br />
                <br />
                <br />
                <form onSubmit={this.onSubmit}>
                    <card class="card card-form">
                        <h1>Person Details</h1>
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
                                        classname={rollnoErr ? ' showError' : ''}
                                    />
                                    {rollnoErr &&
                                        <div className="txtError">{rollnoErr}</div>
                                    }
                                </div>



                                {/*sex*/}
                                <div class="col-sm-3 mb-2">
                                    <label htmlFor="sex">Sex</label>
                                    <select name="sex"
                                        class=" form-control custom-select "
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
                                        classname={ageErr ? ' showError' : ''}
                                    />
                                    {ageErr &&
                                        <div className="txtError">{ageErr}</div>
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
                                    <button type="submit" class="btn-filter btn-sm">add</button>
                                </div>

                            </div>
                        </card>
                    </form>


                    <br />
                    <br />
                    <br />
                    <br />
                </div> </div>


        )

    }
}