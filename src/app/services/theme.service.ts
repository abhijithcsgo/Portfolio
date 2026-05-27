import { Injectable, computed, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<ThemeMode>(this.readStored());

  readonly theme = this.themeSignal.asReadonly();
  readonly isDark = computed(() => this.themeSignal() === 'dark');

  constructor() {
    this.apply(this.themeSignal());
  }

  toggle(): void {
    const next: ThemeMode = this.themeSignal() === 'dark' ? 'light' : 'dark';
    this.themeSignal.set(next);
    this.apply(next);
  }

  private apply(theme: ThemeMode): void {
    document.documentElement.classList.toggle('app-dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }

  private readStored(): ThemeMode {
    if (typeof localStorage === 'undefined') {
      return 'dark';
    }
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  }
}
