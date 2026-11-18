document.addEventListener("DOMContentLoaded", function () {

    const blowBtn = document.getElementById("blowBtn");
    const nextBtn = document.getElementById("nextBtn");
    const message = document.getElementById("message");

    const candles = document.querySelectorAll(".candle");

    const music = document.getElementById("birthdayMusic");

    blowBtn.addEventListener("click", function () {

        // Turn off candles one by one
        candles.forEach(function (candle, index) {

            setTimeout(function () {
                candle.classList.add("out");
            }, index * 300);

        });

        // Play birthday music when candles are blown
        setTimeout(function () {

            music.play().catch(function (error) {
                console.log("Music playback failed:", error);
            });

            // Show birthday message
            message.style.display = "block";

            blowBtn.style.display = "none";

            nextBtn.hidden = false;

            // Confetti effect
            createConfetti();

        }, 1800);

    });

    // Next Surprise Page
    nextBtn.addEventListener("click", function () {

        window.location.href = "surprise.html";

    });

    // Confetti
    function createConfetti() {

        const emojis = ["🎉", "🎊", "❤️", "✨", "💖"];

        for (let i = 0; i < 40; i++) {

            const confetti = document.createElement("span");

            confetti.innerHTML =
                emojis[Math.floor(Math.random() * emojis.length)];

            confetti.style.position = "fixed";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = "-30px";
            confetti.style.fontSize = "22px";
            confetti.style.zIndex = "1000";
            confetti.style.pointerEvents = "none";

            document.body.appendChild(confetti);

            const animation = confetti.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform: "translateY(110vh) rotate(720deg)",
                        opacity: 0
                    }
                ],
                {
                    duration: 3000,
                    easing: "linear"
                }
            );

            animation.onfinish = function () {
                confetti.remove();
            };

        }
    }

});