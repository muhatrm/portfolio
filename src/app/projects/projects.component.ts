import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../services/dark-mode.service';
import { Subject, takeUntil } from 'rxjs';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  category: 'web' | 'backend' | 'fullstack' | 'other';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  isLoading = true;
  private destroy$ = new Subject<void>();

  // Projekt-Daten
  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern portfolio web application with dark/light theme toggle, responsive design, and animated user experience.',
      technologies: ['Angular', 'TypeScript', 'Tailwind', 'PrimeNG'],
      image: 'assets/projects/portfolio.png',
      github: 'https://github.com/muhatrm/portfolio',
      live: 'https://tuerkmen.dev',
      category: 'web'
    },
    {
      id: 2,
      title: 'PhotoFinder Game Website',
      description: 'Vocational school project: Multiplayer image guessing game with real-time sync and role-based administration.',
      technologies: ['React/TS', 'Node.JS', 'Express', 'MySQL'],
      image: '/assets/projects/photofinder.png',
      live: 'https://photofinder.tuerkmen.dev',
      github: 'https://github.com/muhatrm/Photofinder',
      category: 'fullstack',
    },
    {
      id: 3,
      title: 'Mini Inventar',
      description: 'Demo inventory platform: Real-time tracking with role-based access and streamlined management.',
      technologies: ['Angular', 'Node.JS', 'Bootstrap', 'Docker'],
      image: '/assets/projects/inventur.png',
      live: 'https://inventur.tuerkmen.dev',
      github: 'https://github.com/muhatrm/mini-inventur',
      category: 'fullstack'
    }

  ];

  categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  selectedCategory = 'all';

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    // Subscribe zu Dark Mode
    this.darkModeService.isDarkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isDark => {
        this.isDarkMode = isDark;
      });

    // Simulation
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get filteredProjects(): Project[] {
    return this.selectedCategory === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  openLink(url?: string): void {
    if (url) window.open(url, '_blank');
  }
}
