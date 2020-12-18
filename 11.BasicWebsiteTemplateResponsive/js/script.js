function dropdownMenu() {
    let x = document.getElementById("dropdownClick");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
