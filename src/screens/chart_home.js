import React, { Component } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import axios from 'axios';
export default class chart extends Component {
    constructor(props) {
        super(props);
        this.state = { people: [] };
    }
    componentDidMount() {
        this.bar();
    }
    bar = () => {
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
              padding: { left: 30, bottom: 15 }
          },
          scales: {
              x: { ticks: { color: 'white', } },
              y: { ticks: { color: 'white', } }
          },
      }

      const pie_options = {
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
      }
    return (
      <div>
            

            
                <h2 class="text-white">Charts</h2>
          
            <div class=" l-chart grid-chart chart-home">
                
                <Line
                    data={this.state.people}
                    options={options}

                />
            </div>

            <div class=" l-chart grid-chart chart-home">
                <Bar
                    data={this.state.people}
                    options={options}

                />
            </div>
            <div class=" l-chart grid-chart chart-home">
                <Doughnut
                    data={this.state.people}
                    options={pie_options}

                />
            </div>

      </div>
    );
  }
}
