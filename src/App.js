
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Home from './screens/HomeScreen'

import CreatePerson from './components/create-person';
import EditPerson from './components/edit-person';
import PeopleTable from './components/people-table';
import PeopleDetail from './components/people-detail';

import Charts from './charts/charts';
import LineChart from './charts/LineChart';

import Static from './filters/Static';
import Sex from './filters/SexFilter';
import Country from './filters/CountryFilter';
import Region from './filters/RegionFilter';
import Job from './filters/JobFilter';
import Name from './filters/NameFilter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDropDown: false,
      openRegis: false

    };
    this.showDropDown = this.showDropDown.bind(this);
    this.showRegis = this.showRegis.bind(this);
  }
  showDropDown() {
    const { openDropDown } = this.state;
    this.setState({ openDropDown: !openDropDown })
  }
  showRegis() {
    const { openRegis } = this.state;
    this.setState({ openRegis: !openRegis })
  }
  DropDownToggle() {
    let i = ""
    i += this.state.openDropDown === true ? "hide" : "show";
    if (!i) return (<span><i class='fas ml-1'>&#xf0d7;</i></span>);
    else if (i === 'show') return (<span><i class='fas'>&#xf0d7;</i></span>);
    else if (i === 'hide') return (<span><i class='fas'>&#xf0d8;</i></span>);
    return i;
  }
  render() {
    return (
      <Router>

        <div class="wrapper">
          <header>
            {/* Navbar */}
            <nav id="main-navbar" class="navbar navbar-expand-sm fixed-top header">

              {/* Brand */}
              <a class="navbar-brand logo" href="/home">
                -- LOGO --
            </a>

              {/* Right links */}
              <ul class="navbar-nav ms-auto d-flex flex-row">
                {/* Icon */}
                <NavLink to="/create" activeClassName="add-active">
                  <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="/create">
                      <i class="fa fa-plus-circle"> ADD</i>
                    </a>
                  </li>
                </NavLink>

              </ul>
            </nav>
            {/* Navbar */}
          </header>

          {/* Sidebar */}
          <aside class="sidebar">
            <nav id="sidebarMenu" class="collapse d-lg-block collapse ">
              <div class="position-sticky">
                <div class="list-group list-group-flush">

                  <NavLink to="/home" activeClassName="nav-active ">
                    <a class="list-group-item">
                      <i class="fas fa-home fa-fw me-3"></i><span>Home</span></a>
                  </NavLink>

                  <NavLink to="/people-table" activeClassName="nav-active ">
                    <a class="list-group-item ">
                      <i class="fas fa-table fa-fw me-3"></i><span>Table</span></a>
                  </NavLink>

                  <NavLink to="/people-detail" activeClassName="nav-active ">
                    <a class="list-group-item ">
                      <i class="fas fa-users fa-fw me-3"></i><span>Group</span>

                      <i onClick={this.showDropDown} class="ml-2">{this.DropDownToggle()}</i>

                    </a>
                    {this.state.openDropDown &&
                      <div class="dropdown-sticky list-group list-group-flush">
                      <NavLink to="/sex-filter" activeClassName="dropdown-active"><a>sex</a></NavLink>
                      <NavLink to="/country-filter" activeClassName="dropdown-active"><a>country</a></NavLink>
                      <NavLink to="/region-filter" activeClassName="dropdown-active"><a>region</a></NavLink>
                      <NavLink to="/job-filter" activeClassName="dropdown-active"><a>jobs</a></NavLink>
                      <NavLink to="/name-filter" activeClassName="dropdown-active"><a>names</a></NavLink>
                      </div>
                    }
                  </NavLink>

                  <NavLink to="/chart" activeClassName="nav-active">
                    <a class="list-group-item ">
                      <i class="fas fa-line-chart fa-fw me-3"></i><span>Charts</span></a>
                  </NavLink>

                  <NavLink to="/home" activeClassName="nav-active ">
                    <a class="list-group-item ">
                      <i class="fa fa-sign-in fa-fw me-3"></i>
                      <span>Sign In</span>

                      <i onClick={this.showRegis} class="ml-2">{this.DropDownToggle()}</i>

                    </a>
                    {this.state.openRegis &&
                      <div class="dropdown-sticky list-group list-group-flush">
                      <NavLink to="/" activeClassName="dropdown-active"><a>Log In</a></NavLink>
                      <NavLink to="/" activeClassName="dropdown-active"><a>Log Out</a></NavLink>
                      </div>
                      
                    }
                  </NavLink>



                </div>
              </div>
            </nav>
          </aside>


          {/* Sidebar */}

        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route path='/create' component={CreatePerson} />
          <Route path='/edit/:id' component={EditPerson} />
          <Route path='/people-table' component={PeopleTable} />
          <Route path='/people-detail' component={PeopleDetail} />
          <Route path='/chart' component={Charts} />
          <Route exact path='/line-chart' component={LineChart} />
          <Route exact path='/static' component={Static} />
          <Route exact path='/sex-filter' component={Sex} />
          <Route exact path='/country-filter' component={Country} />
          <Route exact path='/region-filter' component={Region} />
          <Route exact path='/job-filter' component={Job} />
          <Route exact path='/name-filter' component={Name} />
        </Switch>
      </Router>

    );
  }

}
export default App;

