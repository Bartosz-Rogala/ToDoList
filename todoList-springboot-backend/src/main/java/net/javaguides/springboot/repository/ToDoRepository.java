package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.ToDo;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long>{

}
