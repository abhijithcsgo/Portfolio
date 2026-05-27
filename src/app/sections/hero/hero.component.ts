import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { heroStats, profile } from '../../data/resume.data';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [Button, Card, Tag],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly scroll = inject(ScrollService);
  readonly profile = profile;
  readonly stats = heroStats;

  goToProjects(): void {
    this.scroll.scrollTo('projects');
  }
}
