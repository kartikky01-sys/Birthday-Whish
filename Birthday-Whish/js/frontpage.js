document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    // Get Started Button
    button.addEventListener("click", function () {

        button.innerText = "Let's Celebrate! 🎉";

        button.style.transform = "scale(0.95)";

        // Open next page
        setTimeout(function () {
            window.location.href = "candle";
        }, 500);

    });

});