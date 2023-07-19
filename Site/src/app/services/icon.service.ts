import { Injectable } from '@angular/core';
import { IconModel } from "../models/iconModel";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private icons: IconModel[]
  constructor() { }

  public getIcons(){
    return this.icons;
  }

  public unselectAllIcons(){
    this.icons.forEach(i=>i.selected = false);
  }
}
