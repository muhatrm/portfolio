import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../services/dark-mode.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  isMobileMenuOpen = false; // Mobile Menu State
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

  toggleDarkMode(): void {
    this.darkModeService.toggle();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  sendEmail(): void {
    const email = `${this.profile.social.emailUser}@${this.profile.social.emailDomain}`;
    window.location.href = `mailto:${email}`;
  }
}
