import { Injectable } from '@angular/core';
import { ActionTriggerEnum, IVetusAction } from '../models/actions/iVetusAction';
import { OpenAppAction } from '../models/actions/openAppAction';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  constructor(private appService: AppService) {}

  public parseCommand(rawCommand: string): IVetusAction {
    if (!rawCommand) throw new Error('Command is empty!');

    const commandParts = rawCommand.split(':');

    const firstCommand = commandParts[0];

    let action;

    try {
      const trigger = firstCommand as keyof typeof ActionTriggerEnum;
      const parsedTrigger = ActionTriggerEnum[trigger];
      const [, ...commandArgs] = commandParts;
      switch (parsedTrigger) {
        case ActionTriggerEnum.OpenApp:
          action = this.parseOpenActionCommand(commandArgs);
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(
        'Was unable to transform command %cmd into anything meaningful.',
        firstCommand
      );
      console.error(error);
    }

    if(action === undefined) throw new Error('Failed to parse command.');

    return action;
  }

  private parseOpenActionCommand(commandParts: string[]): OpenAppAction {
    if(commandParts.length === 0) throw new Error('Can\'t parse these commands!');
    const action = new OpenAppAction();
    action.app = this.appService.getAppForTrigger(commandParts[0]);

    [, ...commandParts] = commandParts;

    if(commandParts.length){
      action.arguments = commandParts[0];
    }

    return action;
  }
}
