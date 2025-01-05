import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavBarMenuComponent} from "../nav-bar-menu/nav-bar-menu.component";

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    NavBarMenuComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {

  @ViewChild('navBarMenu') navBarMenu!: NavBarMenuComponent;

  protected openDialog() {
    this.navBarMenu.openDialog();
  }
}
