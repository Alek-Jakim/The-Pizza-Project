import { ICardDetails } from "../components/Interfaces"

export function returnBtnDefault() {
    const btns = document.querySelectorAll(".pizza-btn");
    btns.forEach((btn: any) => {
        btn.disabled = false;
        btn.innerText = "Add To Cart"
    });

    const btnsMenu = document.querySelectorAll(".cart-menu-button");
    btnsMenu.forEach((btn: any) => {
        btn.disabled = false;
        btn.innerText = "Add To Cart"
    });
}


export const formatDate = (date: string) => {
    let dateArr: Array<string> = date.split("-");
    dateArr.pop();

    date = dateArr[1] + "-" + dateArr[0];

    return date;
}

export const isPassedDate = (date: string): boolean => {
    let isPassed: boolean;
    let now = new Date();
    let month: string | number = now.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let today = month + "-" + now.getFullYear();

    let splitDate = date.split("-");

    let splitDateToday = today.split("-");

    // check the years
    if (parseInt(splitDate[1]) < parseInt(splitDateToday[1])) {
        isPassed = true;
    } else if (parseInt(splitDate[1]) === parseInt(splitDateToday[1])) {
        if (parseInt(splitDate[0]) < parseInt(splitDateToday[0])) {
            isPassed = true;
        }
    } else if (parseInt(splitDate[1]) > parseInt(splitDateToday[1])) {
        isPassed = false;
    } else {
        isPassed = false;
    }

    return isPassed;
}


export const validCardData = (cardDetails: ICardDetails): boolean => {
    let isValid: boolean;

    let today = new Date(Date.now()).toLocaleDateString();
    //!dateInPast(cardDetails.cardDate, today) ||

    if (cardDetails.cardNumber !== 16 || cardDetails.cardCode !== 3 || isPassedDate(cardDetails.cardDate)) {
        isValid = false;
    } else {
        isValid = true;
    }

    return isValid
}