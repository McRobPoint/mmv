import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'nav-bar-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-menu.component.html',
  styleUrl: './nav-bar-menu.component.scss'
})
export class NavBarMenuComponent {

  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  public openDialog() {
    console.log('open dialog', this.dialog);
    this.dialog.nativeElement.showModal();

  }

  public closeDialog() {
    const dialog = this.dialog.nativeElement;
    if (dialog) {
      dialog.close(); // Close the dialog
    }
  }
}
