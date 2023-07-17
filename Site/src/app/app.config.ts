import { environment } from "src/environments/environment";

const JSON_ROOT = environment.jsonRoot;

export const config = {
    urls:{
        API: environment.api
    },
    jsonFiles:{
        desktop: JSON_ROOT + 'desktop.json'
    }
}