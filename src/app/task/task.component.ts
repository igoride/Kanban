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
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
}
