import { Injectable } from '@angular/core';
import { IVetusApp } from '../models/apps/iVetusApp';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private static apps: IVetusApp[] = [{ name: 'About', triggerName: 'about' }];

  constructor() {}

  public getAppForTrigger(trigger: string): IVetusApp {
    const app = AppService.apps.find(a=>a.triggerName === trigger);
    if(!app) throw new Error(`Cannot find an app with the trigger ${trigger}`);
    
    return app;
  }
}
