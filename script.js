const params = new URLSearchParams(location.search);
const guest = params.get("guest");

if (guest) {
    const guestName = document.getElementById("guestName");

    if (guestName) {
        guestName.textContent = guest;
    }
}


// ============================
// Музыка
// ============================

const music = new Audio("paulyudin-romantic-wedding-piano-160698.mp3");

music.loop = true;
music.volume = 0.5;

const musicBtn = document.getElementById("musicBtn");


// ============================
// Кнопка "Taklifnomani ochish"
// ============================

const openBtn = document.getElementById("openBtn");
const invitation = document.getElementById("details-section");

if (openBtn && invitation) {

    openBtn.addEventListener("click", () => {

        // Прокрутка вниз
        invitation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Запуск музыки
        music.play().then(() => {

            if (musicBtn) {
                musicBtn.classList.add("playing");
                musicBtn.textContent = "🔊";
            }

        }).catch((error) => {
            console.log("Музыка не запустилась:", error);
        });

    });

}


// ============================
// Кнопка музыки
// ============================

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play().then(() => {

                musicBtn.classList.add("playing");
                musicBtn.textContent = "🔊";

            }).catch((error) => {
                console.log("Музыка не запустилась:", error);
            });

        } else {

            music.pause();

            musicBtn.classList.remove("playing");
            musicBtn.textContent = "🔇";

        }

    });

}


// ============================
// Обратный отсчёт
// ============================

const target = new Date("2026-09-19T19:00:00+05:00");

function updateCountdown() {

    const diff = Math.max(0, target - Date.now());

    const s = Math.floor(diff / 1000);

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (days) {
        days.textContent = Math.floor(s / 86400);
    }

    if (hours) {
        hours.textContent = Math.floor((s % 86400) / 3600);
    }

    if (minutes) {
        minutes.textContent = Math.floor((s % 3600) / 60);
    }

    if (seconds) {
        seconds.textContent = s % 60;
    }

}

updateCountdown();

setInterval(updateCountdown, 1000);
