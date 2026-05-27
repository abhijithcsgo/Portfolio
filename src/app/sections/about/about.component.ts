import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { aboutContent, profile } from '../../data/resume.data';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  imports: [Card, SectionHeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly profile = profile;
  readonly aboutParagraphs = aboutContent.paragraphs;
}
