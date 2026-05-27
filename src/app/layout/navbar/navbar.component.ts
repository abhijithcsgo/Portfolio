import { Component, inject } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { Button } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { navLinks, profile } from '../../data/resume.data';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, Button],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly scroll = inject(ScrollService);
  readonly theme = inject(ThemeService);
  readonly profile = profile;

  readonly menuItems: MenuItem[] = navLinks.map((link) => ({
    label: link.label,
    icon: link.icon,
    command: () => this.scroll.scrollTo(link.id),
  }));

  scrollTop(): void {
    this.scroll.scrollToTop();
  }
}
