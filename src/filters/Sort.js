import React, { Component } from 'react';

export default class sort extends Component {
    render() {
        return (

            <div class='sort'>
                <div class='sort-result'><p>{this.props.count} People</p></div>
                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByAge}>
                        <option>Age</option>
                        <option value="age_lowest">Age &#xf0dd;</option>
                        <option value="age_highest">Age &#xf0de;</option>
                    </select></div>

                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByBirth}>
                        <option>Birth</option>
                        <option value="birth_lowest">Birth &#xf0dd;</option>
                        <option value="birth_highest">Birth &#xf0de;</option>
                    </select></div>

                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByCountry}>
                        <option>Country</option>
                        <option value="country_lowest">country (a-z)</option>
                        <option value="country_highest">country (z-a)</option>
                    </select></div>

                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByRegion}>
                        <option>Region</option>
                        <option value="region_lowest">region (a-z)</option>
                        <option value="region_highest">region (z-a)</option>
                    </select></div>

                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByEmail}>
                        <option>Email</option>
                        <option value="email_lowest">email (a-z)</option>
                        <option value="email_highest">email (z-a)</option>
                    </select></div>

                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByJobs}>
                        <option>Job</option>
                        <option value="jobs_lowest">job (a-z)</option>
                        <option value="jobs_highest">job (z-a)</option>
                    </select></div>

                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByName}>
                        <option>Name</option>
                        <option value="name_lowest">(a-z),(ก-ฮ)</option>
                        <option value="name_highest">(ฮ-ก),(z-a)</option>
                    </select></div>

                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByHeight}>
                        <option>Height</option>
                        <option value="height_lowest">Height &#xf0dd;</option>
                        <option value="height_highest">Height &#xf0de;</option>
                    </select></div>

                <div class='sort-style'>
                    <select value={this.props.sort} onChange={this.props.sortByWeight}>
                        <option>Weight</option>
                        <option value="weight_lowest">Weight &#xf0dd;</option>
                        <option value="weight_highest">Weight &#xf0de;</option>
                    </select></div>

            </div>
        );
    }
}
