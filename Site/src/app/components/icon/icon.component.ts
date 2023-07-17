import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { IconModel } from '../../models/IconModel';

@Component({
  selector: 'vetus-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() model: IconModel;
  @HostBinding('class.selected') isSelected = false;
  @HostListener('click', ['$event.target']) onClick(){
    this.model.selected = !this.model.selected;
    this.isSelected = this.model.selected;
  }
}

