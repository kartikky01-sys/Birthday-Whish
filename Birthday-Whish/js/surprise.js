document.addEventListener("DOMContentLoaded", function () {

    const musicBtn = document.getElementById("musicBtn");

    const music = document.getElementById("birthdayMusic");

    // Music Play and Pause

    musicBtn.addEventListener("click", function () {

        if (music.paused) {

            music.play()
                .then(function () {
                    musicBtn.innerHTML = "⏸ Pause Music";
                })
                .catch(function () {
                    alert("Please add birthday.mp3 in the music folder.");
                });

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵 Play Music";

        }

    });

});