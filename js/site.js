const NAV = [
  { id: "home", href: "index.html", label: "Home" },
  { id: "property", href: "property.html", label: "The Property" },
  { id: "location", href: "location.html", label: "Our Location" },
  { id: "accommodation", href: "accommodation.html", label: "Our Accommodation" },
  {
    id: "experiences",
    href: "experiences.html",
    label: "Our Experiences",
    children: [
      ["Adventure Bike Tours", "adventure.html"],
      ["Enduro Bike Tours", "enduro.html"],
      ["E-MTB Tours", "emtb.html"],
      ["Paddle Boarding", "paddle.html"],
      ["Hiking", "hiking.html"],
      ["Beach Days", "beach.html"],
      ["Yoga", "yoga.html"],
      ["Tennis", "tennis.html"],
      ["Massage and Body Recovery", "massage.html"],
    ],
  },
  { id: "bookings", href: "bookings.html", label: "Bookings" },
  { id: "about", href: "about.html", label: "About" },
  { id: "gallery", href: "gallery.html", label: "Gallery" },
  { id: "contact", href: "contact.html", label: "Contact" },
];

const SOCIAL = {
  whatsapp: "https://wa.me/351926214888",
  facebook: "https://www.facebook.com/advzencom",
  instagram: "https://www.instagram.com/advzencom/",
  youtube: "https://www.youtube.com/@ADVZENCOM",
};

const ICONS = {
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.04c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.34-.14-.2-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.37-.42.5-.14.14-.28.29-.12.55.16.26.7 1.16 1.51 1.88 1.04.92 1.91 1.21 2.18 1.35.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.54.73 1.8.86.26.14.44.2.5.31.07.12.07.67-.17 1.35z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.5 8.5V6.8c0-.7.5-1 1.1-1h1.4V3h-2.4C11.9 3 11 4.6 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.3-2.8h-2.6z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 7.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 0 0 12 7.4zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM17.4 6.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 4.6c1.5 0 1.7 0 2.3.1.6 0 1 .1 1.3.3.4.2.7.4 1 .7.3.3.5.6.7 1 .2.3.3.7.3 1.3.1.6.1.8.1 2.3s0 1.7-.1 2.3c0 .6-.1 1-.3 1.3-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.3.2-.7.3-1.3.3-.6.1-.8.1-2.3.1s-1.7 0-2.3-.1c-.6 0-1-.1-1.3-.3-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.2-.3-.3-.7-.3-1.3-.1-.6-.1-.8-.1-2.3s0-1.7.1-2.3c0-.6.1-1 .3-1.3.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.2.7-.3 1.3-.3.6-.1.8-.1 2.3-.1zm0-1.6c-1.6 0-1.8 0-2.4.1-.6 0-1.1.1-1.5.3-.4.2-.8.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.3.9-.3 1.5-.1.6-.1.8-.1 2.4s0 1.8.1 2.4c0 .6.1 1.1.3 1.5.2.4.4.8.8 1.2.3.4.7.6 1.2.8.4.2.9.3 1.5.3.6.1.8.1 2.4.1s1.8 0 2.4-.1c.6 0 1.1-.1 1.5-.3.4-.2.8-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.3-.9.3-1.5.1-.6.1-.8.1-2.4s0-1.8-.1-2.4c0-.6-.1-1.1-.3-1.5-.2-.4-.4-.8-.8-1.2-.3-.4-.7-.6-1.2-.8-.4-.2-.9-.3-1.5-.3-.6-.1-.8-.1-2.4-.1z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z"/></svg>',
};

function socialLinks(className) {
  return `<div class="${className}">
    <a href="${SOCIAL.whatsapp}" aria-label="WhatsApp" target="_blank" rel="noopener">${ICONS.whatsapp}</a>
    <a href="${SOCIAL.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${ICONS.facebook}</a>
    <a href="${SOCIAL.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${ICONS.instagram}</a>
    <a href="${SOCIAL.youtube}" aria-label="YouTube" target="_blank" rel="noopener">${ICONS.youtube}</a>
  </div>`;
}

function renderHeader() {
  return `
    <a class="logo-link" href="index.html" aria-label="ADV ZEN home">
      <img src="images/logo.png" alt="ADV ZEN logo">
    </a>
    <a class="brand" href="index.html">
      <span class="brand-name">ADVZEN.COM</span>
      <span class="brand-tag">adventure as therapy</span>
    </a>
    <div class="header-actions">
      <a class="btn btn-orange header-book" href="bookings.html">Bookings</a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav-panel" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>`;
}

function renderNav(page) {
  const items = NAV.map((item) => {
    const active = item.id === page ? " active" : "";
    if (!item.children) {
      return `<li><a class="${active.trim()}" href="${item.href}">${item.label}</a></li>`;
    }
    const kids = item.children
      .map(([label, href]) => `<li><a href="${href}">${label}</a></li>`)
      .join("");
    return `<li class="nav-parent">
      <a class="${active.trim()}" href="${item.href}">${item.label}</a>
      <button class="nav-toggle" type="button" aria-label="Show experiences">+</button>
      <ul class="nav-sub">${kids}</ul>
    </li>`;
  }).join("");
  return `<div class="nav-backdrop" id="nav-backdrop" hidden></div>
    <nav class="nav-panel" id="nav-panel" aria-label="Site" inert>
      <button class="nav-close" type="button" aria-label="Close">&times;</button>
      <ul class="nav-list">${items}</ul>
      ${socialLinks("socials")}
    </nav>`;
}

function renderFooter() {
  return `
    <a href="index.html"><img class="foot-logo" src="images/logo.png" alt="ADV ZEN"></a>
    <div class="foot-contact">
      <a href="tel:+351926214888">+351 926 214 888</a>
      <a href="mailto:hello@advzen.com">hello@advzen.com</a>
      ${socialLinks("socials")}
    </div>
    <div class="foot-links">
      <div>
        <a href="location.html">Location</a> |
        <a href="experiences.html">Experiences</a> |
        <a href="property.html">Property</a><br>
        <a href="gallery.html">Photo Gallery</a> |
        <a href="accommodation.html">Accommodation</a>
      </div>
      <a class="btn btn-orange" href="bookings.html">Bookings</a>
    </div>
    <p class="copy">© ${new Date().getFullYear()} ADV ZEN. All rights reserved.</p>`;
}

function setupNav() {
  const panel = document.getElementById("nav-panel");
  const backdrop = document.getElementById("nav-backdrop");
  const openBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".nav-close");
  const setOpen = (open) => {
    panel.classList.toggle("open", open);
    backdrop.classList.toggle("show", open);
    backdrop.hidden = !open;
    panel.inert = !open;
    openBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  openBtn.addEventListener("click", () => setOpen(true));
  closeBtn.addEventListener("click", () => setOpen(false));
  backdrop.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  document.querySelectorAll(".nav-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("open");
      button.textContent = button.parentElement.classList.contains("open") ? "–" : "+";
    });
  });
}

function setupLightbox() {
  const galleries = document.querySelectorAll(".gallery");
  if (!galleries.length) return;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<button type="button" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(box);
  const img = box.querySelector("img");
  const close = () => box.classList.remove("show");
  galleries.forEach((gallery) => gallery.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    event.preventDefault();
    img.src = link.href;
    img.alt = link.querySelector("img")?.alt || "";
    box.classList.add("show");
  }));
  box.addEventListener("click", (event) => {
    if (event.target === box || event.target.closest("button")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

function setupForms() {
  document.querySelectorAll("form.enquiry").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [];
      for (const [key, value] of data.entries()) {
        if (String(value).trim()) lines.push(`${key}: ${value}`);
      }
      const subject = encodeURIComponent(data.get("Interest") || "ADV ZEN enquiry");
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:hello@advzen.com?subject=${subject}&body=${body}`;
    });
  });
}

const page = document.body.dataset.page || "home";
document.getElementById("site-header").innerHTML = renderHeader();
document.body.insertAdjacentHTML("beforeend", renderNav(page));
document.getElementById("site-footer").innerHTML = renderFooter();
setupNav();
setupLightbox();
setupForms();
if (!document.querySelector(".ig-head")) {
  document.getElementById("site-footer").insertAdjacentHTML(
    "beforebegin",
    `<div class="ig-head">Follow us on Instagram <a href="${SOCIAL.instagram}" target="_blank" rel="noopener">@advzencom</a></div>`
  );
}
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video").forEach((video) => {
    video.removeAttribute("autoplay");
    video.pause();
  });
}
