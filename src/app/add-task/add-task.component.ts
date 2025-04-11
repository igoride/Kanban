import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
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
