const form = document.getElementById("form");
const inputUrl = document.getElementById("inputUrl");
const button = document.getElementById("button");
const result = document.getElementById("result");

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

form.addEventListener("submit", shortLink, true);
