import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { IconModel } from '../../models/IconModel';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() model: IconModel;
  @HostBinding('class.selected') isSelected:boolean = false;
  @HostListener('click', ['$event.target']) onClick(){
    this.isSelected = !this.isSelected;
  }
}

