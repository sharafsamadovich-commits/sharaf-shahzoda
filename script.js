const params = new URLSearchParams(location.search);
const guest = params.get("guest");
if (guest) {
  document.getElementById("guestName").textContent = decodeURIComponent(guest).replace(/\+/g, " ");
}

document.getElementById("openBtn").addEventListener("click", () => {
  document.getElementById("invitation").scrollIntoView({behavior:"smooth"});
});

const target = new Date("2026-09-19T19:00:00+05:00").getTime();
function updateCountdown(){
  const diff = Math.max(0, target - Date.now());
  const s = Math.floor(diff/1000);
  document.getElementById("days").textContent = Math.floor(s/86400);
  document.getElementById("hours").textContent = Math.floor((s%86400)/3600);
  document.getElementById("minutes").textContent = Math.floor((s%3600)/60);
  document.getElementById("seconds").textContent = s%60;
}
updateCountdown();
setInterval(updateCountdown,1000);

// Music button is reserved for the couple's chosen song.
// Add an audio file named assets/music.mp3 later to enable it.
document.getElementById("musicBtn").addEventListener("click",()=>{
  alert("Musiqani keyinroq siz tanlagan qo'shiq bilan qo'shamiz.");
});
