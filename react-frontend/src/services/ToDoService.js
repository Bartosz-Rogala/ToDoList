import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:8080/api/v1/todos";

class ToDoService {

    getToDos() {
        return axios.get(TODO_API_BASE_URL);
    }

    createToDo(todo) {
        return axios.post(TODO_API_BASE_URL, todo);
    }

    getToDoById(toDoId) {
        return axios.get(TODO_API_BASE_URL + "/" + toDoId);
    }

    updateToDo(toDo, toDoId) {
        return axios.put(TODO_API_BASE_URL + "/" + toDoId, toDo);
    }

    deleteToDo(toDoId) {
        return axios.delete(TODO_API_BASE_URL + "/" + toDoId);
    }
    
}

export default new ToDoService();