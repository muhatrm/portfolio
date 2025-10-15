import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isDarkMode = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  // Dark Mode toggle - setzt 'dark' Class auf HTML Element
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.renderer.addClass(this.document.documentElement, 'dark');
      this.renderer.addClass(this.document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'dark');
      this.renderer.removeClass(this.document.body, 'dark-mode');
    }

    console.log('Dark Mode:', this.isDarkMode);
  }
}
