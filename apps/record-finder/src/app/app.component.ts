import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderPageComponent } from './header/header.component';

@Component({
  standalone: true,
  imports: [
    HeaderPageComponent,
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
