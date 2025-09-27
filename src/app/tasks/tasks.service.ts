import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn:'root'})
export class TasksService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn All the Basics and Advance feature of Angular and how to apply them.',
            dueDate: '2025-12-25'
        },
        {
            id: 't2',
            userId: 'u2',
            title: 'Master SpringBoot',
            summary: 'Learn All the Basics and Advance feature of Java ,Spring and SpringBoot and how to apply them.',
            dueDate: '2025-09-12'
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Master Android',
            summary: 'Learn All the Basics and Advance feature of Java,kotlin and Android and how to apply them.',
            dueDate: '2025-10-22'
        }
    ]


    constructor (){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        } 
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
        this.saveTasks();
    }
    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();

    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }

}