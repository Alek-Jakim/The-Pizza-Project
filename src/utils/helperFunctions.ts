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