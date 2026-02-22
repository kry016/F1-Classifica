// demo localStorage
const out = document.getElementById("out");
const nameInp = document.getElementById("name");

document.getElementById("save").onclick = () => {
  localStorage.setItem("demo_name", nameInp.value);
  render();
};

function render(){
  out.textContent = "Salvato: " + (localStorage.getItem("demo_name") ?? "");
}
render();

// service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// install prompt
let deferredPrompt;
const installBtn = document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "inline-block";
});
installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.style.display = "none";
});