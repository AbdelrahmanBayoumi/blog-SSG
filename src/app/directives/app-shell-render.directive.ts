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
  selector: '[appShellRender]',
})
export class AppShellRenderDirective implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      console.log(
        `AppShellRenderDirective: ngOnInit: isPlatformServer: ${isPlatformServer(
          this.platformId
        )}`
      );

      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      console.log(
        `AppShellRenderDirective: ngOnInit: isPlatformServer: ${isPlatformServer(
          this.platformId
        )}`
      );

      this.viewContainer.clear();
    }
  }
}
