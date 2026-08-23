(() => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".site-nav-toggle");
  const ext = document.querySelector(".site-ext");
  const extToggle = document.querySelector(".site-ext-toggle");
  if (!header || !navToggle) return;

  function setNavOpen(open) {
    header.classList.toggle("is-nav-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function setExtOpen(open) {
    if (!ext || !extToggle) return;
    ext.classList.toggle("is-open", open);
    extToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const next = !header.classList.contains("is-nav-open");
    setExtOpen(false);
    setNavOpen(next);
  });

  if (extToggle) {
    extToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const next = !ext.classList.contains("is-open");
      setNavOpen(false);
      setExtOpen(next);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setNavOpen(false);
      setExtOpen(false);
    }
  });

  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      setNavOpen(false);
      setExtOpen(false);
    }
  });

  const hamburgerMq = window.matchMedia("(min-width: 50.0625rem)");
  const allInMq = window.matchMedia("(min-width: 31.3125rem)");
  const extMq = window.matchMedia("(min-width: 67.5625rem)");
  const onHamburger = (e) => {
    if (e.matches) setNavOpen(false);
  };
  const onAllIn = (e) => {
    if (e.matches) setNavOpen(false);
  };
  const onExt = (e) => {
    if (e.matches) setExtOpen(false);
  };
  if (hamburgerMq.addEventListener) {
    hamburgerMq.addEventListener("change", onHamburger);
    allInMq.addEventListener("change", onAllIn);
    extMq.addEventListener("change", onExt);
  } else {
    hamburgerMq.addListener(onHamburger);
    allInMq.addListener(onAllIn);
    extMq.addListener(onExt);
  }
})();
