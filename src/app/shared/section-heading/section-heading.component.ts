import { Component, input } from '@angular/core';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-section-heading',
  imports: [Divider],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss',
})
export class SectionHeadingComponent {
  readonly tag = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
}
