import { Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'button[appButton]',//app-button
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  // encapsulation:ViewEncapsulation.None
})
export class ButtonComponent {

  // title = input.required<string>();
  // icon = input.required<string>();
}


