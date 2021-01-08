import React, { Component } from 'react';
import ToDoService from '../services/ToDoService';

class ViewToDoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            toDo: {}
        }
    }

    componentDidMount() {
        ToDoService.getToDoById(this.state.id).then(res => {
            this.setState({toDo: res.data})
        })

    }


    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View To Do Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Task: </label>
                            <div>{this.state.toDo.task}</div>
                        </div>

                        <div className="row">
                            <label>Description: </label>
                            <div>{this.state.toDo.description}</div>
                        </div>

                        <div className="row">
                            <label>Deadline: </label>
                            <div>{this.state.toDo.deadline}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewToDoComponent;