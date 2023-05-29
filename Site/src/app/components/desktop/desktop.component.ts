import { Component } from '@angular/core';
import { IconModel } from '../icon/icon.component';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  foobar: IconModel = {
    label: 'Hello world',
    alt: 'alt text!!',
    src: 'https://placehold.co/64x64.png'
  }
}
