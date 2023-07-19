import { ActionTriggerEnum, IVetusAction } from "./iVetusAction";

export class OpenUriAction implements IVetusAction{
    trigger = ActionTriggerEnum.OpenUri;
    uri: string;
}