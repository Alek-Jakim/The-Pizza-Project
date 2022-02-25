import { ValidObject } from "../components/Interfaces"

export function containsObject(obj: ValidObject, list: Array<ValidObject>): boolean {
    let i: number;
    let value: boolean;
    for (i = 0; i < list.length; i++) {
        if (list[i].name === obj.name) {
            value = true;
        } else {
            value = false;
        }
    }
    return value;
}

export function returnBtnDefault() {
    const btns = document.querySelectorAll(".pizza-btn");
    btns.forEach((btn: any) => {
        btn.disabled = false;
        btn.innerText = "Add To Cart"
    });
}