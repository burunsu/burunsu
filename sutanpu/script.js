window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}
window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload();
  }
};
let nav = document.querySelector("#navArea")
let btn = document.querySelector(".toggle-btn")
let msk= document.querySelector("#mask")

btn.onclick = () => {
  nav.classList.toggle("open");
}

mask.onclick = () => {
  nav.classList.toggle("open");
}
