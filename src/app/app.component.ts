import { Component, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ScrollTop } from 'primeng/scrolltop';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { EducationComponent } from './sections/education/education.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    ScrollTop,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    inject(ThemeService);
  }
}
