import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length){
            return this.tasksService.getTasksByFilters(filterDto);
        } else {
            return this.tasksService.getAllTasks();
        }
        
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task{
        return this.tasksService.getTaskById(id);
    }
    // First option for retrieve the request parameters from body
    // @Post()
    // createTask(@Body() body){
    //     console.log('body', body);
    // }

    //Second Option for retrive the request parameters from body
    // @Post()
    // createTask(
    //     @Body('title') title : string,
    //     @Body('description') description: string
    // ): Task{ // return type is task
    //     return this.tasksService.createTask(title,description);
    // }

    // using DTO for retrive the data
    @Post()
    createTask(@Body() CreateTaskDto : CreateTaskDto){
        return this.tasksService.createTask(CreateTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string): void{
        this.tasksService.deleteTask(id);
    }

    @Patch('/id/status')
    updateTaskStatus(@Param('id') id:string, @Body('status') status:TaskStatus): Task{
        return this.tasksService.updateTaskStatus(id,status);
    }
}
