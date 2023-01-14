const form = document.getElementById("formShort");
const formLong = document.getElementById("formLong");
const inputUrl = document.getElementById("inputUrl");
const inputLongUrl = document.getElementById("inputLongUrl");
const result = document.getElementById("result");
const resultLong = document.getElementById("resultLong");

async function shortLink(event) {
  event.preventDefault();

  if (inputUrl.value.length > 0) {
    const q = await fetch("/links", {
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
    result.innerHTML = `Сокращенная ссылка: <a href="${document.location.href}links/${res.id}">${document.location.href}links/${res.id}</a>`;
  }
}

async function longLink(event) {
  event.preventDefault();

  if (inputLongUrl.value.length > 0) {
    const q = await fetch("/links", {
      method: "POST",
      body: JSON.stringify({
        url: inputLongUrl.value,
        long: true
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await q.json();
    console.log('хуйня переделывай');
    resultLong.innerHTML = `Сокращенная ссылка: <a href="${document.location.href}links/${res.id}">${document.location.href}links/${res.id}</a>`;
  }
}

form.addEventListener("submit", shortLink, true);
formLong.addEventListener("submit", longLink, true);
