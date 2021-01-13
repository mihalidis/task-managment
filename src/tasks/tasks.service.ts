import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    // tooks a task interface as a model
    private tasks: Task[] = []; 

    // tooks a task interface as a model. gets all tasks
    getAllTasks(): Task[] {  
        return this.tasks;
    }

    // Retrive a spesific task
    getTaskById(id:string) : Task{
        return this.tasks.find(task => task.id === id);
    }

    // Creating a new task
    createTask(CreateTaskDto): Task{

        const {title, description} = CreateTaskDto;

        const task: Task = {
            id: uuidv1(),
            title,  // same syntax with title : title, 
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }

    deleteTask(id:string): void{
        this.tasks = this.tasks.filter(task => task.id !== id);
        
    }
}
