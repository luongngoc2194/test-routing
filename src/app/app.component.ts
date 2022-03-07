import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <span style="display: block">{{title}} app is running!</span>
    <ul>
      <li><a [routerLink]="'/'">Home</a></li>
      <li><a [routerLink]="'article'">Article</a></li>
    </ul>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app-routing';
}
