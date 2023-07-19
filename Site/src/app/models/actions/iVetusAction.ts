export interface IVetusAction {
    trigger: ActionTriggerEnum;
}

export enum ActionTriggerEnum{
    OpenApp,
    OpenUri,
    DownloadFile
}