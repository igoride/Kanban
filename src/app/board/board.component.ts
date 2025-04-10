import { Component } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ColumnComponent, CdkDropListGroup, AddTaskComponent ],
  template: `
    <div class="board" cdkDropListGroup >
      <app-column 
        title="To Do" 
        status="todo" 
        [tasks]="todoTasks">
      </app-column>

      <app-column 
        title="In Progress" 
        status="in-progress" 
        [tasks]="inProgressTasks">
      </app-column>

      <app-column 
        title="Done" 
        status="done" 
        [tasks]="doneTasks">
      </app-column>
    </div>

    <app-add-task (addTask)="addTask($event)"></app-add-task>
  `,
  styles: [`
    .board {
      display: flex;
      gap: 16px;
      padding: 16px;
      height: calc(100% - 32px);
      width: calc(100% - 32px);
      box-sizing: border-box;
    }
    
    app-column {
      flex: 1;
      min-width: 0; /* Prevents flex items from overflowing */
    }
  `]
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
