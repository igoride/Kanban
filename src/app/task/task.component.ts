import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { MatCardModule } from '@angular/material/card';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, MatCardModule, CdkDrag, MatIconModule],
  template: `
    <div cdkDrag>
      <mat-card class="task-card">
        <div class="task-header" >
          <mat-icon class="drag-handle"> </mat-icon>
          <h3>{{ task.title }}</h3>
        </div>
        <p class="task-description" title="{{ task.description }}">
          {{ task.description || 'No description' }}
        </p>
        <div class="task-footer">
          <span class="status-badge {{task.status}}">{{ task.status }}</span>
          <mat-icon class="task-icon">more_vert</mat-icon>
        </div>
      </mat-card>
    <div cdkDrag>  
  `,
  styles: [`
    .task {
      margin-bottom: 12px;
      transition: transform 0.2s ease;
    }
    .task-card {
      border-left: 4px solid;
      padding: 12px;
      border-radius: 8px !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.08) !important;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    .task-header {
      display: flex;
      align-items: center;
      min-height: 32px; /* Increased minimum height */
    }
    .task-header h3 {
      margin: 0;
      flex-grow: 1; /* Takes remaining space */
     min-width: 0; /* Allows text truncation */
    }
    .drag-handle {
      flex-shrink: 0; /* Prevents icon from shrinking */
      margin-right: 8px;
    }
    .task-description {
      color: #616161;
      font-size: 0.875rem;
      margin: 8px 0;
      line-height: 1.4;
      display: -webkit-box;
      webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .task-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
    }
    .status-badge {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: capitalize;
    }
    .status-badge.todo {
      background: #E3F2FD;
      color: #1976D2;
      border-left-color: #1976D2;
    }
    .status-badge.in-progress {
      background: #FFF8E1;
      color: #FFA000;
      border-left-color: #FFA000;
    }
    .status-badge.done {
      background: #E8F5E9;
      color: #388E3C;
      border-left-color: #388E3C;
    }
    .task-icon {
      color: #9E9E9E;
      font-size: 18px;
    }
    .cdk-drag-preview {
      opacity: 0.9;
      box-shadow: 0 5px 15px rgba(0,0,0,0.15) !important;
      transform: scale(1.02) rotate(1deg);
    }
  `]
})
export class TaskComponent {
  @Input() task!: Task;
}
