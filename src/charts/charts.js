import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Line from './LineChart';
import Bar from './BarChart';
import Doughnut from './DoughnutChart';
function Charts() {
    return (
       
        <Router>
            <nav id="main-navbar" class="navbar navbar-expand-lg justify-content-start">
                <div class=" btn-chart">
                    <NavLink to="/line-chart" activeClassName="chart-active">
                        <a>
                            <i class="fas fa-line-chart fa-fw me-1"></i><span>Line Chart</span></a>
                    </NavLink>
                    <NavLink to="/bar-chart" activeClassName="chart-active">
                        <a>
                            <i class="fas fa-bar-chart fa-fw me-1"></i><span>Bar Chart</span></a>
                    </NavLink>
                    <NavLink to="/doughnut-chart" activeClassName="chart-active">
                        <a>
                            <i class="fas fa-bar-chart fa-fw me-1"></i><span>Doughnut Chart</span></a>
                    </NavLink>
                </div>
            </nav>
            <Switch>
               
                <Route exact path='/line-chart' component={Line} />
                <Route exact path='/bar-chart' component={Bar} />
                <Route exact path='/doughnut-chart' component={Doughnut} />
            </Switch>
        </Router>

    )
};

export default Charts;
