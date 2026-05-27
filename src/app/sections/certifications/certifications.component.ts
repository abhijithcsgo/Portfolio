import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { certifications } from '../../data/resume.data';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-certifications',
  imports: [Card, SectionHeadingComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  readonly certs = certifications;
}
