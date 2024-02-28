import { isPlatformServer } from '@angular/common';
import {
  Directive,
  Inject,
  OnInit,
  PLATFORM_ID,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appShellNoRender]',
})
export class AppShellNoRenderDirective implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      console.log(
        `AppShellNoRenderDirective: ngOnInit: isPlatformServer: ${isPlatformServer(
          this.platformId
        )}`
      );

      this.viewContainer.clear();
    } else {
      console.log(
        `AppShellNoRenderDirective: ngOnInit: isPlatformServer: ${isPlatformServer(
          this.platformId
        )}`
      );
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
