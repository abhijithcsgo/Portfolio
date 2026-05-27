import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Chip } from 'primeng/chip';
import { expertise, tools } from '../../data/resume.data';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-skills',
  imports: [Card, Chip, SectionHeadingComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly expertise = expertise;
  readonly toolCategories = Object.entries(tools);
}
