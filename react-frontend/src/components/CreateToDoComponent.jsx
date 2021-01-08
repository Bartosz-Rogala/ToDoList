import React, { Component } from 'react';
import ToDoService from '../services/ToDoService';

class CreateToDoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            task: '',
            description: '',
            deadline: ''
        }

        this.changeTaskHandler = this.changeTaskHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeDeadlineHandler = this.changeDeadlineHandler.bind(this);
        this.saveOrUpdateTask = this.saveOrUpdateTask.bind(this);
    }

    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            ToDoService.getToDoById(this.state.id).then(res => {
                let toDo = res.data;
                this.setState({task: toDo.task,
                    description: toDo.description,
                    deadline: toDo.deadline
                })
            })
        }
    }

    saveOrUpdateTask = (e) => {
        e.preventDefault();

        let task = {task: this.state.task, description: this.state.description, deadline: this.state.deadline};
        
        if (this.state.id === '_add') {
            ToDoService.createToDo(task).then(res =>{
                this.props.history.push("/todo-list");
            })
        } else {
            ToDoService.updateToDo(task, this.state.id).then(res =>{
                this.props.history.push("/todo-list");
            })
        }
        
    }

    cancel() {
        this.props.history.push("/todo-list");
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className="text-center">Add a task</h3>
        } else {
            return <h3 className="text-center">Update a task</h3>
        }
    }

    changeTaskHandler = (event) => {
        this.setState({task: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeDeadlineHandler = (event) => {
        this.setState({deadline: event.target.value});
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className = "row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Task:</label>
                                        <input placeholder="Task" name="task" className="form-control"
                                        value={this.state.task} onChange={this.changeTaskHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Description:</label>
                                        <input placeholder="Description" name="description" className="form-control"
                                        value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Deadline:</label>
                                        <input placeholder="Deadline" name="deadline" className="form-control"
                                        value={this.state.deadline} onChange={this.changeDeadlineHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateTask}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateToDoComponent;