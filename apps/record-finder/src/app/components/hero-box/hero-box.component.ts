// src/app/components/hero-box/hero-box.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // needed for *ngIf, *ngFor, etc.

@Component({
  selector: 'app-hero-box',
  standalone: true,      // key difference
  imports: [CommonModule],
  templateUrl: './hero-box.component.html',
  styleUrls: ['./hero-box.component.scss'],
})
export class HeroBoxComponent {}
