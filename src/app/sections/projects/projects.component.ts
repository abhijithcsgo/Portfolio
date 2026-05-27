import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Chip } from 'primeng/chip';
import { Button } from 'primeng/button';
import { profile, projects } from '../../data/resume.data';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-projects',
  imports: [Card, Chip, Button, SectionHeadingComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = projects;
  readonly profile = profile;
}
