import { IHtmlCreator } from '../types/classInterface';


export class HtmlCreator {

    static render(object: IHtmlCreator[], parentDiv: IHtmlCreator) {
        const div = document.createElement(parentDiv.tagname);
        if(parentDiv.classes) {
            for (const singleClass of parentDiv.classes) {
                div.classList.add(singleClass)
            }
        }


        for (const tag of object) {
            const tagname = document.createElement(tag.tagname);
            if(tag.content) {
                tagname.innerHTML = tag.content
            }
            if(tag.id) {
                tagname.id = tag.id
            }
            if(tag.classes) {
                tag.classes.map(singleClass => tagname.classList.add(singleClass))
            }
            if(tag.type) {
                (<HTMLInputElement>tagname).type = tag.type;
                (<HTMLInputElement>tagname).checked = tag.done;
                tagname.addEventListener('click', () => {
                    window.todoApi.toggle(tag.id);
                })
            }
            div.appendChild(tagname);
        }
        return div
    }
}