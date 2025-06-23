document.addEventListener("DOMContentLoaded", () => {
  const p = document.createElement("p");
  p.textContent = "DOM load success";
  document.body.appendChild(p);
});
