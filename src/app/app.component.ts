import { Component } from '@angular/core';
import { BoardComponent } from './pages/board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoardComponent],
  template: `
    <main>
      <h1>Angular Kanban Board</h1>
      <app-board></app-board>
    </main>
  `,
  styles: [`
    main {
      padding: 2rem;
    }
    h1 {
      color: #3f51b5;
      margin-bottom: 2rem;
    }
  `]
})
export class AppComponent {}
