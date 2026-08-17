const params = new URLSearchParams(location.search);
const guest = params.get("guest");

if (guest) {
    document.getElementById("guestName").textContent = guest;
}

const openBtn = document.getElementById("openBtn");
const invitation = document.getElementById("invitation");

openBtn.addEventListener("click", () => {
    invitation.classList.add("show");
    invitation.scrollIntoView({ behavior: "smooth" });

    music.play().then(() => {
        musicBtn.classList.add("playing");
        musicBtn.textContent = "🔊";
    }).catch(() => {});
});

const target = new Date("2026-09-19T19:00:00+05:00");

function updateCountdown() {
    const diff = Math.max(0, target - Date.now());
    const s = Math.floor(diff / 1000);

    document.getElementById("days").textContent =
        Math.floor(s / 86400);

    document.getElementById("hours").textContent =
        Math.floor((s % 86400) / 3600);

    document.getElementById("minutes").textContent =
        Math.floor((s % 3600) / 60);

    document.getElementById("seconds").textContent =
        s % 60;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Музыка
const music = new Audio("paulyudin-romantic-wedding-piano-160698.mp3");
music.loop = true;
music.volume = 0.5;

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play().then(() => {
            musicBtn.classList.add("playing");
            musicBtn.textContent = "🔊";
        }).catch(() => {});
    } else {
        music.pause();
        musicBtn.classList.remove("playing");
        musicBtn.textContent = "🔇";
    }
});
