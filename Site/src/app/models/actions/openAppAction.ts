import { IVetusApp } from "../apps/iVetusApp";
import { IVetusAction, ActionTriggerEnum } from "./iVetusAction";

export class OpenAppAction implements IVetusAction {
    trigger = ActionTriggerEnum.OpenApp;
    app: IVetusApp;
    arguments: string;
}