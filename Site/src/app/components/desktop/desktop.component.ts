import { Component } from '@angular/core';
import { IconModel } from "../../models/iconModel";

@Component({
  selector: 'vetus-desktop',
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
