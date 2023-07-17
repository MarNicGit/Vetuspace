import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { DesktopComponent } from './desktop/desktop.component';



@NgModule({
  declarations: [
    IconComponent,
    DesktopComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IconComponent,
    DesktopComponent
  ]
})
export class ComponentsModule { }
