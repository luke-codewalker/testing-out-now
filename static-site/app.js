const url =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000"
    : "https://api-random.now.sh/";

fetch(url)
  .then(res => res.json())
  .then(body => {
    document.querySelector(".date.raw").textContent = body.date;
    document.querySelector(".date.format").textContent = new Date(body.date);
  })
  .catch(err => console.error(err));
