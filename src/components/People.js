import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        };
        this.showHide = this.showHide.bind(this)


    }


    optionToggle() {
        let i = ""
        i += this.state.show === true ? "hide" : "show";
        if (!i) return (<span><i class='fas ml-1'>&#xf0c9;</i></span>);
        else if (i === 'show') return (<span><i class='fas'>&#xf0c9;</i></span>);
        else if (i === 'hide') return (<span><i class='fas'>&#xf0d8;</i></span>);
        return i;
    }

    showHide() {
        const { show } = this.state;
        this.setState({ show: !show })
    }



    deletePeople = () => {
        axios.delete('http://localhost:4000/people/delete/' + this.props.obj._id)
            .then((res) => {
                console.log('Deleted!');
            }).catch((error) => {
                console.log(error)
            })
        window.location.reload();
    }
    renderIcon() {
        if (this.props.obj.sex === 'Male') {
            return <i class="fas fa-user-alt male ml-2 mr-2"></i>;
        } else {
            return <i class="fas fa-user-alt female ml-2 mr-2"></i>;
        }
    }


    render() {

        return (
            <div class="col-4">
                <Slide bottom>
                    <div class="wrapper-grid">
                        <div class="grid">
                            <div class="image"><span>image</span>
                                <img /></div>
                            <div class="name">
                                <p>{this.props.obj.name}  {this.props.obj.lsname}</p>
                            </div>

                            <div class="email">
                                <p><i class="bi bi-envelope-fill ml-2 mr-1"></i> {this.props.obj.email}</p>
                            </div>

                            <div class="details">
                                <p><i class="bi bi-telephone-fill ml-2 mr-2"></i>0{this.props.obj.rollno}<i class="fa fa-birthday-cake ml-3 mr-2"></i>{moment(this.props.obj.birth).format('DD/MM/YYYY')} </p>

                                <p>{this.renderIcon()} {this.props.obj.age} years<span>job :</span>{this.props.obj.jobs}</p>

                                <p><i class="fas fa-map-marker-alt ml-2 mr-2"></i>{this.props.obj.region}, {this.props.obj.country}</p>
                            </div>

                            <div class="option">
                                <button class="square_btn" onClick={this.showHide}>{this.optionToggle()}</button>
                                <Fade bottom when={this.state.show}>
                                    {this.state.show &&
                                        <div class="ss">
                                            <Link to={"/edit/" + this.props.obj._id}>
                                                <i class="fas fa-edit round "></i>
                                            </Link>

                                            <i class="bi bi-trash-fill round" onClick={e =>
                                                window.confirm("Are you sure you wish to delete this?") &&
                                                this.deletePeople(e)
                                            }></i>

                                        </div>

                                    }
                                    </Fade>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
}
