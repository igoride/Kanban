import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { CdkDropList, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, TaskComponent, CdkDropList, MatCardModule, MatIconModule ],
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})

export class ColumnComponent {
  @Input() title!: string;
  @Input() status!: 'todo' | 'in-progress' | 'done';
  @Input() tasks: Task[] = [];
 
  @Output() taskDropped = new EventEmitter<{ task: Task, newStatus: 'todo' | 'in-progress' | 'done' }>();

  onDrop(event: CdkDragDrop<Task[]>) {
    const task = event.item.data;  // The task that was dragged and dropped
    const newStatus = this.status; // Type assertion
    this.taskDropped.emit({
      task,
      newStatus
    });
  }
  trackByTaskId(index: number, task: Task): string {
    return task.id;  // For efficient rendering of tasks
  }
}
