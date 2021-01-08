import React, { Component } from 'react';
import ToDoService from '../services/ToDoService';

class ToDoListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDos: []
        }
        this.addToDo = this.addToDo.bind(this);
        this.editToDo = this.editToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
        this.viewToDo = this.viewToDo.bind(this);
    }

    viewToDo(id) {
        this.props.history.push(`/view-todo/${id}`)
    }

    deleteToDo(id) {
        //rest api call
        ToDoService.deleteToDo(id).then(res => {
            this.setState({toDos: this.state.toDos.filter(toDo => toDo.id !== id)});
        })
    }

    editToDo(id) {
        this.props.history.push(`/add-todo/${id}`)
    }

    componentDidMount() {
        ToDoService.getToDos().then((res) => {
            this.setState({ toDos: res.data });
        });
    }

    addToDo() {
        this.props.history.push('/add-todo/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">To Do List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addToDo}>Add a To-Do</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Task </th>
                                <th> Description </th>
                                <th> Deadline </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.toDos.map(
                                    toDo =>
                                    <tr key={toDo.id}>
                                        <td> {toDo.task} </td>
                                        <td> {toDo.description} </td>
                                        <td> {toDo.deadline} </td>
                                        <td>
                                            <button onClick={() => this.editToDo(toDo.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteToDo(toDo.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewToDo(toDo.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ToDoListComponent;