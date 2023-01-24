const themeSwitcher = document.getElementById("theme-switch");
const themeSwitcherCheckbox = document.getElementById("theme-switch-checkbox");
const form = document.getElementById("formShort");
const formLong = document.getElementById("formLong");
const inputUrl = document.getElementById("inputUrl");
const inputLongUrl = document.getElementById("inputLongUrl");
const result = document.getElementById("result");
const resultLong = document.getElementById("resultLong");

async function shortLink(event) {
  event.preventDefault();

  if (inputUrl.value.length > 0) {
    const q = await fetch("/", {
      method: "POST",
      body: JSON.stringify({
        url: inputUrl.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await q.json();
    console.log();
    result.innerHTML = `<button id='shortLinkBtn' onclick='copyShortLink()'><img id='shortLinkImg' src='./images/content.svg' width='20' height='20'></button> Сокращенная ссылка: <a id='shortLinks' href="${document.location.href}c/${res.id}">${document.location.href}c/${res.id}</a>`;
  }
}

async function longLink(event) {
  event.preventDefault();

  if (inputLongUrl.value.length > 0) {
    const q = await fetch("/", {
      method: "POST",
      body: JSON.stringify({
        url: inputLongUrl.value,
        long: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let res = await q.json();

    resultLong.innerHTML = `<button id='longLinkBtn' onclick='copyLongLink()'><img id='longLinkImg' src='./images/content.svg' width='20' height='20'></button> Сокращенная ссылка: <a id='longLinks' href="${document.location.href}c/${res.id}">${document.location.href}c/${res.id}</a>`;
  }
}

function copyLongLink() {
  let longLinks = document.getElementById("longLinks").href;
  let longLinkImg = document.getElementById("longLinkImg");
  navigator.clipboard.writeText(longLinks);
  longLinkImg.src = "./images/done.svg";
}

function copyShortLink() {
  let shortLinks = document.getElementById("shortLinks").href;
  let shortLinkImg = document.getElementById("shortLinkImg");
  navigator.clipboard.writeText(shortLinks);
  shortLinkImg.src = "./images/done.svg";
}

let theme = window.localStorage.getItem("theme") || "light";
if (theme === "dark") {
  document.body.classList.add("dark");
  themeSwitcher.src = "./images/dark_mode.svg";
  themeSwitcherCheckbox.checked = true;
} else {
  document.body.classList.remove("dark");
  themeSwitcher.src = "./images/light_mode.svg";
  themeSwitcherCheckbox.checked = false;
}

form.addEventListener("submit", shortLink, true);
formLong.addEventListener("submit", longLink, true);

themeSwitcherCheckbox.addEventListener("change", (e) => {
  if (theme === "light") {
    themeSwitcher.src = "./images/dark_mode.svg";
    theme = "dark";
    window.localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    themeSwitcher.src = "./images/light_mode.svg";
    theme = "light";
    window.localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
});
