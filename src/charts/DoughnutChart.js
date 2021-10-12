import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { people: [] };
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
                        //labels: name,
                        labels: ["age #L", "age #H", "weight #L", "weight #H", "hieght #L", "hieght #H"],
                        datasets: [
                            {
                                label: 'Age',
                                data: [age_lowest, age_highest, weight_lowest, weight_highest, height_lowest, height_highest],
                                backgroundColor: ["#ffa500", "#ff4500", "#3cb371","#7aff7a","#87cefa","#4682b4"],
                                borderColor: ["#ffa500", "#ff4500", "#3cb371", "#7aff7a", "#87cefa", "#4682b4"],
                            },
                        ],
                       
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
                        labels: ["all", "male", "female"],
                        datasets: [
                            {
                                label: 'all',
                                data: [sexAll, maleCount, femaleCount],
                                backgroundColor: ["#fff", "#4166f5", "#cb4154"],
                                borderColor: ["#fff", "#4166f5", "#cb4154"],
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
                        }
                    }
                }
            },
            layout: {
                padding: { left: 15, bottom: 15, right: 15, top: 15 }
            },
            responsive: true,
            maintainAspectRatio: false,
        }
        return (

            <main class="main chart-style">
                <button class="filter-chart" onClick={this.population}>population</button>
                <button class="filter-chart" onClick={this.MaxMin}>max - min</button>

                <Doughnut
                    data={this.state.people}
                    options={options}
                    class="grid-chart"
                />
                

                <br />
            </main>


        )
    };
}
export default DoughnutChart;
