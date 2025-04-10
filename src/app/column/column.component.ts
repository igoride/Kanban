import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, TaskComponent, CdkDropList, MatCardModule, MatIconModule],
  template: `
    <div class="column" cdkDropList [cdkDropListData]="tasks">
      <mat-card class="column-card">
        <mat-card-header>
          <mat-card-title class="column-title">{{ title }}</mat-card-title>
          <mat-card-subtitle class="column-count">{{ tasks.length }} tasks</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content class="column-content">
          <div class="task-container">
            <app-task *ngFor="let task of tasks" [task]="task"></app-task>
            <div *ngIf="!tasks.length" class="empty-state">
              <mat-icon>inbox</mat-icon>
              <p>No tasks here yet</p>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
      .column {
          flex: 1;
          min-width: 280px;
          margin: 0 8px;
          height: 100%;
      }

      .column-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #fafafa !important;
          border-radius: 12px !important;
      }

      .column-title {
          font-size: 1.1rem !important;
          font-weight: 500 !important;
          color: #424242;
          white-space: normal; /* Changed from nowrap */
          overflow: visible;
          text-overflow: clip;
          display: -webkit-box;
          -webkit-line-clamp: 1; /* Single line with full words */
          -webkit-box-orient: vertical;
          line-height: 1.3;
      }

      .column-count {
          color: #757575 !important;
          font-size: 0.8rem !important;
          white-space: nowrap;
      }

      .column-content {
          flex: 1;
          padding: 0 !important;
          overflow: hidden;
      }

      .task-container {
          padding: 12px;
          height: 100%;
          overflow-y: auto;
      }

      .empty-state {
          height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #9E9E9E;
          text-align: center;
      }

      .empty-state mat-icon {
          flex-shrink: 0; /* Prevents icon truncation */
      }

      .empty-state p {
          margin: 0;
          font-size: 0.9rem;
      }

      .drag-handle {
          font-size: 24px; /* Explicit size */
          width: 24px;
          height: 24px;
          overflow: visible !important;
          margin-right: 8px;
          flex-shrink: 0; /* Prevents icon from shrinking */
      }
  `]
})
export class ColumnComponent {
  @Input() title!: string;
  @Input() status!: 'todo' | 'in-progress' | 'done';
  @Input() tasks: Task[] = [];
}
