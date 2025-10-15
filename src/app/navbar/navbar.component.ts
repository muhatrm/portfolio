import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDarkMode = false;

  // Event Emitter für Dark Mode
  @Output() darkModeChanged = new EventEmitter<boolean>();
  profile = {
    name: 'Muhammed Ali Türkmen',
    title: 'Computer Science Expert',
    image: 'assets/logo.png',
    description: 'As a passionate Computer Science Expert, I develop modern web applications with a focus on user experience and performance. My expertise lies in frontend technologies like Angular and modern CSS frameworks.',
    skills: ['Server', 'Network', 'Security', 'Coding'],
    social: {
      email: 'mailto:muhammed.ali.tuerkmen@gmail.com',
      github: 'https://github.com/muhatrm'
    }
  };

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeChanged.emit(this.isDarkMode);
    document.body.classList.toggle('dark-mode');
  }

  sendEmail() {
    window.location.href = this.profile.social.email;

  }
}
