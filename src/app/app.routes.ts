// app.routes.ts
import { Routes } from '@angular/router';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', component: HeroProfileComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];
