import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ActionFormatter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: [],
            show: false,
        }
    }

    componentDidMount() {
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
   

    deletePeople = () => {
        axios.delete('http://localhost:4000/people/delete/' + this.props._id)

            .then(res => {
                console.log('people successfully deleted!');

            })
        window.location.reload();
    }
    
    render() {
       
        return (
            <div>
                <Link to={"/edit/" + this.props._id}> <i class="fas fa-edit edit mr-2" >

                </i></Link>
                <i class="bi bi-trash-fill delete" onClick={e =>
                    window.confirm("Are you sure you wish to delete this?") &&
                    this.deletePeople(e)
                }></i>

            </div>

        );
    }
}

export default ActionFormatter;