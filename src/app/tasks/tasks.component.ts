import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);

  }

}
