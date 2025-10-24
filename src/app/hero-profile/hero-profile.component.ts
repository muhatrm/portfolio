import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DarkModeService } from '../services/dark-mode.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-hero-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  private destroy$ = new Subject<void>();

  profile = {
    name: 'Muhammed Ali Türkmen',
    title: 'Fullstack Developer',
    image: 'assets/logo.png',
    description: 'As a full-stack developer, I build efficient, modern web applications with a clear focus on performance, scalability, and seamless user experience.',
    skills: ['Server', 'Network', 'Security', 'Coding'],
    social: {
      emailUser: 'muhammed.ali.tuerkmen',
      emailDomain: 'gmail.com',
      github: 'https://github.com/muhatrm'
    }
  };

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeService.isDarkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isDark => {
        this.isDarkMode = isDark;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getSkillIcon(skill: string): string {
    const iconMap: { [key: string]: string } = {
      'Server': 'fa-solid fa-server',
      'Network': 'fa-solid fa-hexagon-nodes',
      'Security': 'fa-solid fa-shield',
      'Coding': 'fa-solid fa-code'
    };
    return iconMap[skill] || 'pi pi-cog';
  }

  sendEmail(): void {
    const email = `${this.profile.social.emailUser}@${this.profile.social.emailDomain}`;
    window.location.href = `mailto:${email}`;
  }

  openGitHub(): void {
    window.open(this.profile.social.github, '_blank');
  }
}
