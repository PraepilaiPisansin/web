import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { people: [], };
        this.population = this.population.bind(this);
    }
    componentDidMount() {
        this.population();
    }

    MaxMin = () => {
        axios.get(`http://localhost:4000/people`)
            .then(res => {
                console.log(res);
                const people = res.data;
                let age_highest = Math.max.apply(null, people.map(item => item.age));
                let age_lowest = Math.min.apply(null, people.map(item => item.age));
                let weight_lowest = Math.min.apply(null, people.map(item => item.pWeight));
                let weight_highest = Math.max.apply(null, people.map(item => item.pWeight));

                let height_lowest = Math.min.apply(null, people.map(item => item.pHeight));
                let height_highest = Math.max.apply(null, people.map(item => item.pHeight));

                this.setState({
                    people: {
                        labels: ["# Lowest", "# Highest"],
                        datasets: [
                            {
                                label: 'Age',
                                data: [age_lowest, age_highest],
                                backgroundColor: "#e5e4e2",
                                borderWidth: 5,
                                borderColor: "#e5e4e2",
                            },
                            {
                                label: 'Weight',
                                data: [weight_lowest, weight_highest],
                                backgroundColor: "#ffa500",
                                borderWidth: 5,
                                borderColor: "#ffa500",
                            },
                            {
                                label: 'Height',
                                data: [height_lowest, height_highest],
                                backgroundColor: "#ff4500",
                                borderWidth: 5,
                                borderColor: "#ff4500",
                            }, 
                        ]
                    }
                });
            })
    }

    population = () => {
        axios.get(`http://localhost:4000/people`)
            .then(res => {
                console.log(res);
                const people = res.data;
                let males = people.filter(item => item.sex === 'Male');
                let maleCount = males.length;
                let females = people.filter(item => item.sex === 'Female');
                let femaleCount = females.length;
                let all = people.filter(item => item.sex.includes('ale'));
                let sexAll = all.length;
                this.setState({
                    people: {
                        labels: ["All", "Male", "Female"],
                        datasets: [
                            {
                                label: 'all',
                                data: [sexAll, maleCount, femaleCount],
                                backgroundColor: ["#fff", "#4166f5", "#cb4154"],
                                borderColor: ["#fff", "#4166f5", "#cb4154"],
                                borderWidth: 4,
                            },
                        ]
                    }
                });
            })
    }
    render() {
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 14,
                        },
                    }
                }
            },
            layout: {
                padding: { left: 15, bottom: 15, right: 15, top: 15 }
            },
            scales: {
                x: { ticks: { color: 'white', }, },
                y: {
                    ticks: { color: 'white' },
                }

            },
            responsive: true,
            maintainAspectRatio: false,


        }
        return (
            <main class="main chart-style">
                <button class="filter-chart" onClick={this.population}>population</button>
                <button class="filter-chart" onClick={this.MaxMin}>max-min</button>
                <Line
                    data={this.state.people}
                    options={options}
                    class="grid-chart"
                />
                <br />
            </main>



        )
    };
}
export default LineChart;
