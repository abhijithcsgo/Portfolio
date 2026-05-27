import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { education } from '../../data/resume.data';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-education',
  imports: [Card, Tag, SectionHeadingComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  readonly edu = education;
}
