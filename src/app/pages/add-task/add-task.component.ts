// src/app/add-task/add-task.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="add-task-form">
      <mat-form-field>
        <mat-label>Task Title</mat-label>
        <input matInput [(ngModel)]="title" placeholder="Enter task title">
      </mat-form-field>

      <mat-form-field>
        <mat-label>Description</mat-label>
        <textarea matInput [(ngModel)]="description" placeholder="Enter task description"></textarea>
      </mat-form-field>

      <button mat-raised-button color="primary" (click)="onSubmit()">Add Task</button>
    </div>
  `,
  styles: [`
    .add-task-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      margin: 1rem;
      border: 1px solid #eee;
      border-radius: 4px;
    }
  `]
})
export class AddTaskComponent {
  @Output() addTask = new EventEmitter<{ title: string; description: string }>();
  title = '';
  description = '';

  onSubmit() {
    if (this.title.trim()) {
      this.addTask.emit({
        title: this.title,
        description: this.description
      });
      this.title = '';
      this.description = '';
    }
  }
}