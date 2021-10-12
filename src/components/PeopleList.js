import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default class PeopleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        };
        this.showHide = this.showHide.bind(this);
    }
    showHideToggle() {
        let i = ""
        i += this.state.show === true ? "hide" : "show";
        if (!i) return (<span><i class='fas ml-1'>&#xf13a;</i></span>);
        else if (i === 'show') return (<span><i class='fas'>&#xf13a;</i></span>);
        else if (i === 'hide') return (<span><i class='fas'>&#xf139;</i></span>);
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
            return <i class="fas fa-user-alt male ml-2 mr-1"></i>;
        } else {
            return <i class="fas fa-user-alt female ml-2 mr-1"></i>;
        }
    }

    render() {
        
        return (

            <div class="mr-2 ml-2">
                <Slide bottom>
                    <div class="wrapper-grid">
                        <div class="grid">
                            
                            <div class="name">
                                <p>{this.props.obj.name}  {this.props.obj.lsname}</p>
                            </div>

                            <div class="detail-one">
                                <p class="email"><i class="bi bi-envelope-fill ml-2 mr-1"></i> {/*this.props.obj.email*/}
                                    {this.props.obj.email.length < 27
                                        ? `${this.props.obj.email}`
                                        : `${this.props.obj.email.substring(0, 27)}...`}</p>
                                
                            </div>
                            
                            
                            <div class="detail-three">
                                <p><i class="fa fa-birthday-cake ml-2 mr-2"></i>{moment(this.props.obj.birth).format('DD/MM/YYYY')}<br/>
                                    {this.renderIcon()} {this.props.obj.age} yrs<br/>
                                      <span class="ml-2">{this.props.obj.jobs}</span></p>

                            </div>
                            <div class="detail-two">
                                <p>{this.props.obj.pWeight}<span class="kg ml-1">kg</span></p>
                                <div class="line"></div>
                                <p>{this.props.obj.pHeight}<span class="kg ml-1">cm3</span></p>

                            </div>
                            <div class="detail-four">
                               
                                <p><i class="fas fa-map-marker-alt ml-2 mr-2"></i>{this.props.obj.region}, {this.props.obj.country}</p>
                            </div>

                            <div class="option">
                                <button class="square_btn" onClick={this.showHide}>{this.showHideToggle()}</button>
                                <Fade top when={this.state.show}>
                                    {this.state.show &&
                                        <div class="ss">
                                            <Link to={"/edit/" + this.props.obj._id}>
                                                <i class="fas fa-edit round"> edit</i>
                                            </Link>
                                                <i class="fas fa-trash-alt round" onClick={e =>
                                                    window.confirm("Are you sure you wish to delete this?") &&
                                                    this.deletePeople(e)
                                                }> del</i>
                                            
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
