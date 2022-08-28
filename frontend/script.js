const getDataForm = async () => {
  const oldUrl = document.querySelector("#oldUrl");
  const customPath = document.querySelector("#customPath");

  const data = {
    oldUrl: oldUrl.value,
    newUrl: customPath.value,
  };
  try {
    const response = await fetch("http://localhost:3000/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    const json = await response.json();
    const createdUrl = document.querySelector(".createdUrl");
    createdUrl.innerHTML = `<a href='http://localhost:3000/${json.newUrl}' target="_blank">http://localhost:3000/${json.newUrl}</a>`;
  } catch (err) {
    console.error(err);
  }
};

const button = document.querySelector(".createButton");

button.addEventListener("click", () => {
  getDataForm();
});
