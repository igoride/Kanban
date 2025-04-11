import { Component } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CommonModule } from '@angular/common';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ColumnComponent, CdkDropListGroup, AddTaskComponent, CdkDrag ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  tasks: Task[] = [
   
  ];

  get todoTasks() {
    return this.tasks.filter(task => task.status === 'todo');
  }

  get inProgressTasks() {
    return this.tasks.filter(task => task.status === 'in-progress');
  }

  get doneTasks() {
    return this.tasks.filter(task => task.status === 'done');
  }

  addTask(newTask: Omit<Task, 'id' | 'status'>) {
    this.tasks.push({
      ...newTask,
      id: uuidv4(),
      status: 'todo'
    });
  }
}
