import { Component, signal, WritableSignal } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapBootstrap } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-root',
  imports: [
    NgbCarouselModule,
    NgIcon
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    provideIcons({bootstrapBootstrap}),
    NgbCarouselConfig
  ],
})

export class AppComponent {

  // NgbCarousel signal variables
  readonly images: WritableSignal<string[]> = signal([]);
  public showNavigationArrows: WritableSignal<boolean> = signal(true);
  public showNavigationIndicators: WritableSignal<boolean> = signal(true);
  readonly title: WritableSignal<string> = signal('ng-bootstrap');

  // Initialize signal array images
  public constructor() {
    this.images.set([1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`));
  }

}
