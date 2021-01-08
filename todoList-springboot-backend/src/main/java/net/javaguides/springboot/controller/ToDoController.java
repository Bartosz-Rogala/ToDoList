package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.ToDo;
import net.javaguides.springboot.repository.ToDoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ToDoController {

	@Autowired
	private ToDoRepository toDoRepository;
	
	//get all todos
	@GetMapping("/todos")
	public List<ToDo> getAllEmployees() {
		return toDoRepository.findAll();
	}
	
	// create to do rest api
	@PostMapping("/todos")
	public ToDo createToDo(@RequestBody ToDo toDo) {
		return toDoRepository.save(toDo);
	}
	
	//get to do by id rest api
	@GetMapping("/todos/{id}")
	public ResponseEntity<ToDo> getToDoById(@PathVariable Long id) {
		ToDo toDo = toDoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ToDo with id : " + id + " does not exist"));
		
		return ResponseEntity.ok(toDo);
	}
	
	// update employee rest api
	@PutMapping("/todos/{id}")
	public ResponseEntity<ToDo> updateToDo(@PathVariable Long id, @RequestBody ToDo toDoDetails) {
		ToDo toDo = toDoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ToDo with id : " + id + " does not exist"));
		
		toDo.setTask(toDoDetails.getTask());
		toDo.setDescription(toDoDetails.getDescription());
		toDo.setDeadline(toDoDetails.getDeadline());
		
		ToDo updatedToDo = toDoRepository.save(toDo);
		return ResponseEntity.ok(updatedToDo);
	}
	
	// delete employee rest api
	@DeleteMapping("/todos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteToDo(@PathVariable Long id){
		ToDo toDo = toDoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ToDo with id : " + id + " does not exist"));
		
		toDoRepository.delete(toDo);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
