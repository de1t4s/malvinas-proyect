document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const popup = document.getElementById("whitelist-popup");

        if (popup) {
            popup.style.display = "flex";
            setTimeout(() => {
                popup.classList.add("active");
            }, 200);

            setTimeout(() => {
                popup.classList.remove("active");
                setTimeout(() => {
                    popup.style.display = "none";
                }, 300);
            }, 5000);
        }
    }, 100);
});
