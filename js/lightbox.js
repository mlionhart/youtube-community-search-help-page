(() => {
  const links = document.querySelectorAll("a.shot-link");
  if (!links.length) return;

  const box = document.createElement("div");
  box.className = "shot-lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Full-size screenshot");

  const img = document.createElement("img");
  img.alt = "";
  box.appendChild(img);
  document.body.appendChild(box);

  function close() {
    box.hidden = true;
    img.removeAttribute("src");
    document.body.style.removeProperty("overflow");
  }

  function open(href, alt) {
    img.src = href;
    img.alt = alt || "";
    box.hidden = false;
    document.body.style.overflow = "hidden";
  }

  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      open(a.href, a.querySelector("img")?.alt || "");
    });
  });

  box.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !box.hidden) close();
  });
})();
