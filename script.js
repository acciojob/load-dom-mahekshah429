document.addEventListener("DOMContentLoaded", () => {
  const message = document.createElement("p");
  message.textContent = "DOM load success";
  document.body.appendChild(message);
});
