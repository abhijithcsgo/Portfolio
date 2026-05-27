import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { profile } from '../../data/resume.data';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [Button],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly scroll = inject(ScrollService);
  readonly profile = profile;
  readonly year = new Date().getFullYear();

  scrollTop(): void {
    this.scroll.scrollToTop();
  }
}
