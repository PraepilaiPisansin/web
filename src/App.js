
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import CreatePerson from './components/create-person';
import EditPeople from './components/edit.component';
import PeopleTable from './components/people-table';
import PeopleList from './components/people-list';

function App() {
  return (
    <Router>

      <header>
        {/* Sidebar */}
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white ">
          <div class="position-sticky">
            <div class="list-group list-group-flush">
             

              <NavLink to="/people-table" activeClassName="nav-active">
                <a class="list-group-item ">
                <i class="fas fa-table fa-fw me-3"></i><span>Table</span></a>
              </NavLink>

              <NavLink to="/people-list" activeClassName="nav-active">
                <a class="list-group-item ">
                  <i class="fas fa-users fa-fw me-3"></i><span>Group</span></a>
              </NavLink>
             
            </div>
          </div>
        </nav>
        {/* Sidebar */}

        {/* Navbar */}
        <nav id="main-navbar" class="navbar navbar-expand-lg fixed-top">
          {/* Container wrapper */}
          <div class="container-fluid">
            {/* Toggle button */}
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            {/* Brand */}
            <a class="navbar-brand logo" href="/home">
              LOGO
            </a>


            {/* Right links */}
            <ul class="navbar-nav ms-auto d-flex flex-row">

              {/* Icon */}
           
        <li class="nav-item me-3 me-lg-0">
                <button class="btn btn-dark"> 
                <a class="nav-link" href="/create">
                  <i class="fa fa-plus-circle add"><span> Add</span></i>
                </a>
                </button>
              </li>
            </ul>
            
            </div>
            </nav>
        {/* Navbar */}
  
      </header>
        <Switch>
        <Route exact path='/' component={ PeopleTable} />
          <Route path='/create' component={CreatePerson} />
          <Route path='/edit/:id' component={EditPeople} />
        <Route path='/people-table' component={PeopleTable} />
        <Route path='/people-list' component={PeopleList} />

        </Switch>
    </Router>
   
  );
}
export default App;

