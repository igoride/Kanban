import { Component, Input } from '@angular/core';
import { Task } from '../../shared/models/task.model';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, TaskComponent, CdkDropList, MatCardModule, MatIconModule],
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  @Input() title!: string;
  @Input() status!: 'todo' | 'in-progress' | 'done';
  @Input() tasks: Task[] = [];
}
