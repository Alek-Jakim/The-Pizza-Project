import { validObject } from "../components/Interfaces"

export function containsObject(obj: validObject, list: Array<validObject>): boolean {
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

export function filteredPizzaCart(arr: Array<validObject>): Array<validObject> {
    return arr.map(item => {

        if (containsObject(item, arr)) {
            console.log("it exists")
        } else {
            console.log("not exists");
        }

        return item
    })
}

export function returnBtnDefault() {
    const btns = document.querySelectorAll(".pizza-btn");
    btns.forEach((btn: any) => {
        btn.disabled = false;
        btn.innerText = "Add To Cart"
    });
}