import { Component, HostBinding, HostListener, Input } from '@angular/core';

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

export class IconModel{
  src: string;
  label: string;
  alt: string;
}