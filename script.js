const nav = document.querySelector(".navigationBar");
const toggleButton = document.querySelector(".openButton");
const closeButton = document.querySelector(".exiteButton");

toggleButton.addEventListener('click', function () {
    const isActive = nav.classList.contains("navActive");

    if (!isActive) {
        nav.classList.add("navActive");
        nav.classList.remove("newClass");
        document.body.style.overflowY = "hidden";
        toggleButton.style.display = "none";
        closeButton.style.display = "block";
    }
});

closeButton.addEventListener('click', function () {
    nav.classList.remove("navActive");
    nav.classList.add("newClass");
    document.body.style.overflowY = "visible";
    toggleButton.style.display = "block";
    closeButton.style.display = "none";
});