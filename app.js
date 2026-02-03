// app.js
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle (index only)
  const navbtn = document.getElementById("navbtn");
  const navmobile = document.getElementById("navmobile");
  if (navbtn && navmobile) {
    navbtn.addEventListener("click", () => {
      const isHidden = navmobile.hasAttribute("hidden");
      if (isHidden) navmobile.removeAttribute("hidden");
      else navmobile.setAttribute("hidden", "");
      navbtn.setAttribute("aria-expanded", String(isHidden));
    });

    // close menu on link click
    navmobile.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navmobile.setAttribute("hidden", "");
        navbtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Helpers
  const qs = (sel) => document.querySelector(sel);
  const escapeHtml = (s) => String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function projectCard(p) {
    const chips = (p.tech || []).slice(0, 5).map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("");
    const badge = p.category === "hardware" ? "Hardware" : "Software";
    return `
      <article class="proj">
        <div class="proj__top">
          <div>
            <div class="proj__title">${escapeHtml(p.title)}</div>
            <div class="small muted">${escapeHtml(p.tagline)}</div>
          </div>
          <span class="badge">${badge}</span>
        </div>
        <p class="proj__desc">${escapeHtml((p.highlights && p.highlights[0]) || "")}</p>
        <div class="proj__tech">${chips}</div>
        <div class="proj__footer">
          <span class="small muted">Project page</span>
          <a class="link" href="project.html?id=${encodeURIComponent(p.id)}">View →</a>
        </div>
      </article>
    `;
  }

  // Index rendering
  const softwareGrid = document.getElementById("softwareGrid");
  const hardwareGrid = document.getElementById("hardwareGrid");

  if (softwareGrid && hardwareGrid && Array.isArray(window.PROJECTS)) {
    const software = window.PROJECTS.filter(p => p.category === "software");
    const hardware = window.PROJECTS.filter(p => p.category === "hardware");

    softwareGrid.innerHTML = software.map(projectCard).join("");
    hardwareGrid.innerHTML = hardware.map(projectCard).join("");
  }

  // Project page rendering
  const projectPage = document.getElementById("projectPage");
  if (projectPage && Array.isArray(window.PROJECTS)) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const p = window.PROJECTS.find(x => x.id === id);

    if (!p) {
      projectPage.innerHTML = `
        <div class="card">
          <h2 class="h2">Project not found</h2>
          <p class="muted">Check the link or return to the home page.</p>
          <div class="cta"><a class="btn primary" href="index.html#top">Back to Home</a></div>
        </div>
      `;
      document.title = "Project — Sanzhar Kali";
      return;
    }

    document.title = `${p.title} — Sanzhar Kali`;

    const kv = `
      <div class="kv">
        <span class="chip">${p.category === "hardware" ? "Hardware" : "Software"}</span>
        ${(p.tech || []).slice(0, 6).map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
      </div>
    `;

    const highlights = (p.highlights || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
    const arch = (p.details?.architecture || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
    const learn = (p.details?.whatILearned || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");



    const github = p.links?.github ? `<a class="btn" href="${escapeHtml(p.links.github)}" target="_blank" rel="noreferrer">GitHub</a>` : "";
    const demo = p.links?.demo ? `<a class="btn" href="${escapeHtml(p.links.demo)}" target="_blank" rel="noreferrer">Demo</a>` : "";

    projectPage.innerHTML = `
      <div class="card">
        <div class="projecthead">
          <div>
            <h1>${escapeHtml(p.title)}</h1>
            <p class="muted">${escapeHtml(p.tagline)}</p>
          </div>
          ${kv}
        </div>
        <div class="cta">
          <a class="btn primary" href="index.html#${p.category === "hardware" ? "hardware" : "software"}">← Back to projects</a>
          ${github}
          ${demo}
        </div>
      </div>

      <div class="card">
        <h2 class="h2">Problem</h2>
        <p class="muted">${escapeHtml(p.details?.problem || "—")}</p>
      </div>

      <div class="card">
        <h2 class="h2">What I did</h2>
        <ul class="list">${highlights}</ul>
      </div>

      <div class="card">
        <h2 class="h2">Architecture / Notes</h2>
        <ul class="list">${arch || "<li class='muted'>Add architecture notes in projects.js</li>"}</ul>
      </div>

      <div class="card">
        <h2 class="h2">What I learned</h2>
        <ul class="list">${learn || "<li class='muted'>Add takeaways in projects.js</li>"}</ul>
      </div>

     
    `;
  }
})();
