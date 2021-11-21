console.log()

// Handle Dark Mode
document.querySelector('#toggleDarkModeSwitch').addEventListener("click", () => {
    const darkMode = document.querySelector('#toggleDarkModeSwitch').checked;

    if (!darkMode) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        document.querySelectorAll(".white-mode").forEach(item => {
            item.style.color = "black";
        });

        document.querySelectorAll(".white-bg").forEach(item => {
            item.style.backgroundColor = "white";
        });

        document.querySelectorAll(".white-btn-dropdown").forEach(item => {
            item.className = "white-btn-dropdown btn border text-dark dropdown-toggle w-100"
        });

        document.getElementsByTagName("body").className = "text-dark";
        document.querySelector(".moon").className = "fas fa-moon moon text-dark";
        document.querySelector(".side-item-active").style.backgroundColor = "#E7E9EB";
        document.querySelector(".side-item-active").style.color = "black";
    }

    else {
        document.body.style.backgroundColor = "#11104D";
        document.body.style.color = "white";

        document.querySelectorAll(".white-mode").forEach(item => {
            item.style.color = "white";
        });

        document.querySelectorAll(".white-bg").forEach(item => {
            item.style.backgroundColor = "#161365";
        });

        document.querySelectorAll(".white-btn-dropdown").forEach(item => {
            item.className = "white-btn-dropdown btn border text-white dropdown-toggle w-100"
        });

        document.getElementsByTagName("body").className = "text-white";
        document.querySelector(".moon").className = "fas fa-moon moon text-white";
        document.querySelector(".side-item-active").style.backgroundColor = "#161365";
        document.querySelector(".side-item-active").style.color = "white";
    }
});