import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { Tag } from 'primeng/tag';
import { experience } from '../../data/resume.data';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-experience',
  imports: [Card, Timeline, Tag, SectionHeadingComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly jobs = experience;
}
