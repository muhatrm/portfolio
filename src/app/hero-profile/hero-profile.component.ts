import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent {
  // Dark Mode Input von Navbar
  @Input() isDarkMode = false;

  // Profil Daten
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

  // Icon Mapping für Skills
  getSkillIcon(skill: string): string {
    const iconMap: { [key: string]: string } = {
      'Server': 'fa-solid fa-server',
      'Network': 'fa-solid fa-hexagon-nodes',
      'Security': 'fa-solid fa-shield',
      'Coding': 'fa-solid fa-code'
    };
    return iconMap[skill] || 'pi pi-cog';
  }

  // Email öffnen
  sendEmail() {
    window.location.href = this.profile.social.email;
  }

  // GitHub öffnen
  openGitHub() {
    window.open(this.profile.social.github, '_blank');
  }
}
