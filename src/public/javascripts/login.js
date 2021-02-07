async function handleSubmit(event) {
  event.preventDefault();

  const response = await fetch(event.target.action, {
    method: event.target.method,
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  });

  const body = await response.json();

  console.log(body);
}

window.onload = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);
};
