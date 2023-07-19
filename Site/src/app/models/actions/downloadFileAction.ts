import { ActionTriggerEnum, IVetusAction } from "./iVetusAction";

export class DownloadFileAction implements IVetusAction{
    trigger = ActionTriggerEnum.DownloadFile;
    filename: string;
    icon: string; //TODO 2023-07-19 - Make this a class
    destination: DownloadDestinationEnum
}

export enum DownloadDestinationEnum{
    Desktop
}

