export class Doc{
    static createElement(tag:string, classOrId:string):HTMLElement{ //because I'm too lazy to do this by hand every single time I make an element
        if(!classOrId){
            return null;
        }

        let element = document.createElement(tag);

        if(classOrId[0] == '#'){
            element.id = classOrId;
        }else{
            element.className = classOrId;
        }

        return element;
    }
}