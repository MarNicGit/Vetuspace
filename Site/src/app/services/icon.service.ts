import { Injectable } from '@angular/core';
import { IconModel } from "../models/IconModel";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private icons: IconModel[]
  constructor() { }
}
