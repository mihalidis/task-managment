import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v1 as uuidv1 } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = []; // task interfaceini model olarak alır

    getAllTasks(): Task[] {  // task interfaceini model olarak alır
        return this.tasks;
    }
}
