import React from 'react';
import axios from 'axios';
import PeopleList from '../components/PeopleList';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            columns: [
                {
                    dataField: 'actions',
                    text: '#',
                    isDummyField: true,
                    csvExport: false,
                    formatter: this.actionsFormatter,
                    headerStyle: (colum, colIndex) => {
                        return { width: '4rem' };
                    }
                },

                {
                    dataField: 'name', text: 'FirstName', sort: true, sortCaret: this.sortIcon,
                    headerStyle: (colum, colIndex) => {
                        return { width: '7rem' };
                    }
                },
                {
                    dataField: 'lsname', text: 'LastName', sort: true, sortCaret: this.sortIcon,
                    headerStyle: (colum, colIndex) => {
                        return { width: '7rem' };
                    }
                },
                {
                    dataField: 'sex', text: 'Sex  ', sort: true, sortCaret: this.sortIcon,
                    headerStyle: (colum, colIndex) => {
                        return { width: '4rem' };
                    }
                },
                {
                    dataField: 'birth', text: 'DateOfBirth', formatter: this.birthFormatter,
                    sort: true, sortCaret: this.sortIcon, headerStyle: (colum, colIndex) => {
                        return { width: '7rem' };
                    }
                },
                {
                    dataField: 'age', text: 'Age', sort: true, sortCaret: this.sortIcon,
                    headerStyle: (colum, colIndex) => {
                        return { width: '4rem' };
                    }
                },
                {
                    dataField: 'pWeight', text: 'kg. ', sort: true, sortCaret: this.sortIcon, headerStyle: (colum, colIndex) => {
                        return { width: '4rem' };
                    }
                },

                {
                    dataField: 'pHeight', text: 'cm3', sort: true, sortCaret: this.sortIcon,
                    headerStyle: (colum, colIndex) => {
                        return { width: '4rem' };
                    }
                },
                {
                    dataField: 'email', text: 'Email', sort: true, sortCaret: this.sortIcon, headerStyle: (colum, colIndex) => {
                        return { width: '14rem' };
                    }
                },
                {
                    dataField: 'jobs', text: 'Job', sort: true, sortCaret: this.sortIcon, headerStyle: (colum, colIndex) => {
                        return { width: '8rem' };
                    }
                },
                {
                    dataField: 'country', text: 'Country', sort: true, sortCaret: this.sortIcon, headerStyle: (colum, colIndex) => {
                        return { width: '8rem' };
                    }
                },
                {
                    dataField: 'region', text: 'Region', sort: true, sortCaret: this.sortIcon, headerStyle: (colum, colIndex) => {
                        return { width: '12rem' };
                    }
                }
            ],
        }
    }

    componentDidMount() {
        this.FetchData();
    }
    FetchData = () => {
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

        let people = this.state.people;
        const age_lowest = Math.min.apply(null, people.map(item => item.age));
        const age_highest = Math.max.apply(null, people.map(item => item.age));

        const weight_lowest = Math.min.apply(null, people.map(item => item.pWeight));
        const weight_highest = Math.max.apply(null, people.map(item => item.pWeight));

        const height_lowest = Math.min.apply(null, people.map(item => item.pHeight));
        const height_highest = Math.max.apply(null, people.map(item => item.pHeight));

        const males = people.filter(item => item.sex === 'Male');
        const maleCount = males.length;
        const females = people.filter(item => item.sex === 'Female');
        const femaleCount = females.length;

        const LatedData = this.state.people?.reverse().map(
            (data, i) =>
                i < 1 && ( // <= only 1 items
                    <PeopleList obj={data} key={i} />
                )
        );



        return (
            <div class="vv">

                <div class="homeblock">
                    <div class="homeblock-half">

                        <div class="half-icon"><i class="fas fa-user-alt"><br /><span>{this.state.people.length} PEOPLE</span></i></div>
                        <div class="half-txt">
                            <p class="text-primary">
                                {maleCount}<span class="ml-2">male</span>
                                <p class="text-danger">
                                    {femaleCount}<span class="ml-2">female</span>
                                </p>
                            </p>
                        </div>
                    </div>

                    <div class="homeblock-half">
                        <div class="half-icon"><i class="fas fa-user-alt"><br /><span>AGE (yrs)</span></i></div>
                        <div class="half-txt">
                            <p class="low"><i class="fas fa-long-arrow-alt-down"></i>{age_lowest}
                                <p class="high">
                                    <i class="fas fa-long-arrow-alt-up"></i>{age_highest}
                                </p>
                            </p>

                        </div>
                    </div>

                    <div class="homeblock-half">
                        <div class="half-icon"><i class="fas fa-weight"><br /><span>WEIGHT (kg)</span></i></div>
                        <div class="half-txt">
                            <p class="low"><i class="fas fa-long-arrow-alt-down"></i>{weight_lowest}
                                <p class="high">
                                    <i class="fas fa-long-arrow-alt-up"></i>{weight_highest}
                                </p>
                            </p>
                        </div>
                    </div>

                    <div class="homeblock-half">
                        <div class="half-icon"><i class="fas">&#xf548;<br /><span>HEIGHT (cm3)</span></i></div>
                        <div class="half-txt">
                            <p class="low"><i class="fas fa-long-arrow-alt-down"></i>{height_lowest}
                                <p class="high">
                                    <i class="fas fa-long-arrow-alt-up"></i>{height_highest}
                                </p>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="lasted">
                    <h2>Latest</h2>
                    {LatedData}
                </div>


                <table className="table table-home">
                    <thead>
                        <tr>
                            <th >First name</th>
                            <th >Last name</th>
                            <th >Age</th>
                            <th >Weight</th>
                            <th >Height</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.people.slice(0, 5).map((item, idx) => {
                                return <tr>
                                    <td class="text-white">{item.name}</td>
                                    <td class="text-white">{item.lsname}</td>
                                    <td class="text-white">{item.age}</td>
                                    <td class="text-white">{item.pWeight}</td>
                                    <td class="text-white">{item.pHeight}</td>

                                </tr>
                            })}
                    </tbody>
                </table>
            </div>


        )
    };
}
