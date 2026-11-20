// ============================================================
//  SINCÈRE — logique de l'appli
// ============================================================
(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- Stockage local (protégé) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem("sincere_" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("sincere_" + k, JSON.stringify(v)); } catch (e) {} }
  };

  // ---------- Porte 18+ ----------
  if (store.get("majeur", false)) $("#porte").classList.add("cache");
  $("#btn-majeur").onclick = () => { store.set("majeur", true); $("#porte").classList.add("cache"); };
  $("#btn-mineur").onclick = () => {
    $("#msg-mineur").innerHTML = "Cette appli n'est pas faite pour toi. Pour des réponses fiables sur la sexualité, va sur <a href='https://www.onsexprime.fr' target='_blank' rel='noopener'>onsexprime.fr</a> ou appelle Fil Santé Jeunes au 0 800 235 236 (gratuit et anonyme).";
  };

  // ---------- Mode discret ----------
  const discret = $("#discret");
  $("#btn-discret").onclick = () => discret.classList.remove("cache");
  let timer;
  discret.addEventListener("pointerdown", () => { timer = setTimeout(() => discret.classList.add("cache"), 700); });
  ["pointerup", "pointerleave", "pointercancel"].forEach((e) => discret.addEventListener(e, () => clearTimeout(timer)));
  discret.addEventListener("dblclick", () => discret.classList.add("cache"));

  // ---------- Navigation ----------
  const vues = ["explorer", "trouver", "apprendre", "favoris"];
  function aller(v) {
    vues.forEach((n) => $("#v-" + n).classList.toggle("cache", n !== v));
    document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("on", b.dataset.v === v));
    if (v === "trouver") quizDebut();
    if (v === "apprendre") apprendreListe();
    if (v === "favoris") afficherFavoris();
    window.scrollTo(0, 0);
  }
  document.querySelectorAll("nav button").forEach((b) => (b.onclick = () => aller(b.dataset.v)));

  // ---------- Favoris ----------
  let favoris = new Set(store.get("favoris", []));
  function basculerFav(id) {
    favoris.has(id) ? favoris.delete(id) : favoris.add(id);
    store.set("favoris", [...favoris]);
    document.querySelectorAll(`[data-fav="${id}"]`).forEach((b) => (b.textContent = favoris.has(id) ? "♥" : "♡"));
  }

  // ---------- Carte d'une plateforme ----------
  function libelle(groupe, cle) { return (FILTRES[groupe] && FILTRES[groupe].options[cle]) || cle; }

  function carte(p, extra) {
    const nbCrit = Object.keys(CRITERES).length;
    const ok = p.criteres.length;
    const pastilles = Object.keys(CRITERES).map((c) => `<i class="${p.criteres.includes(c) ? "ok" : ""}"></i>`).join("");
    const tags =
      p.format.map((f) => `<span class="tag f">${libelle("format", f)}</span>`).join("") +
      p.langue.map((l) => `<span class="tag">${libelle("langue", l)}</span>`).join("") +
      p.prix.map((x) => `<span class="tag">${libelle("prix", x)}</span>`).join("");
    const ambiances = p.ambiance.map((a) => libelle("ambiance", a)).join(" · ");
    const focus = p.focus.map((a) => libelle("focus", a)).join(" · ");
    const publics = p.public.map((a) => libelle("public", a)).join(" · ");
    const crit = Object.entries(CRITERES).map(([k, v]) =>
      p.criteres.includes(k) ? `<li>✅ ${v}</li>` : `<li class="non">○ ${v} — non vérifié</li>`).join("");
    const estGuide = p.format.includes("guide") && p.criteres.length === 0;
    return `
      <article class="carte">
        <button class="fav" data-fav="${p.id}" aria-label="Favori">${favoris.has(p.id) ? "♥" : "♡"}</button>
        <h3>${esc(p.nom)}</h3>
        ${extra || ""}
        <div class="meta">${tags}</div>
        <p class="resume">${esc(p.resume)}</p>
        ${estGuide ? "" : `<div class="score">${pastilles}&nbsp; ${ok}/${nbCrit} critères éthiques</div>`}
        <button class="plus" data-plus="${p.id}">Voir la fiche ▾</button>
        <div class="detail cache" id="d-${p.id}">
          <p>${esc(p.details)}</p>
          <p><b>Ambiance :</b> ${ambiances}</p>
          <p><b>On y voit / entend :</b> ${publics}</p>
          <p><b>Points forts :</b> ${focus}</p>
          ${estGuide ? "" : `<ul class="crit">${crit}</ul>`}
          <a class="btn" style="display:inline-block;text-decoration:none" href="${p.url}" target="_blank" rel="noopener noreferrer">Ouvrir le site ↗</a>
          <p class="avert">Lien externe. Le site peut te demander une vérification d'âge. « Non vérifié » veut dire qu'on n'a pas trouvé l'info publiquement, pas forcément que c'est mauvais.</p>
        </div>
      </article>`;
  }

  function brancherCartes(conteneur) {
    conteneur.querySelectorAll("[data-fav]").forEach((b) => (b.onclick = () => { basculerFav(b.dataset.fav); if (!$("#v-favoris").classList.contains("cache")) afficherFavoris(); }));
    conteneur.querySelectorAll("[data-plus]").forEach((b) => (b.onclick = () => {
      const d = conteneur.querySelector("#d-" + b.dataset.plus);
      d.classList.toggle("cache");
      b.textContent = d.classList.contains("cache") ? "Voir la fiche ▾" : "Masquer ▴";
    }));
  }

  // ---------- Explorer + filtres ----------
  const actifs = {}; // groupe -> Set
  Object.keys(FILTRES).forEach((g) => (actifs[g] = new Set()));
  let texte = "";

  function construirePanneau() {
    let h = "";
    for (const [g, def] of Object.entries(FILTRES)) {
      h += `<div class="groupe"><h4>${def.titre}</h4><div class="puces">`;
      for (const [k, v] of Object.entries(def.options)) {
        h += `<button class="puce ${actifs[g].has(k) ? "on" : ""}" data-g="${g}" data-k="${k}">${v}</button>`;
      }
      h += `</div></div>`;
    }
    h += `<p class="mode">Plusieurs choix dans un même groupe = l'un <i>ou</i> l'autre. Entre les groupes = tout doit correspondre.</p>`;
    $("#panneau").innerHTML = h;
    $("#panneau").querySelectorAll(".puce").forEach((b) => (b.onclick = () => {
      const s = actifs[b.dataset.g];
      s.has(b.dataset.k) ? s.delete(b.dataset.k) : s.add(b.dataset.k);
      b.classList.toggle("on");
      afficherListe();
    }));
  }

  function correspond(p) {
    for (const g of Object.keys(actifs)) {
      if (actifs[g].size === 0) continue;
      const valeurs = p[g] || [];
      if (![...actifs[g]].some((k) => valeurs.includes(k))) return false;
    }
    if (texte) {
      const tout = [p.nom, p.resume, p.details,
        ...Object.keys(FILTRES).flatMap((g) => (p[g] || []).map((k) => libelle(g, k)))].join(" ").toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "");
      const mots = texte.split(/\s+/).filter(Boolean);
      if (!mots.every((m) => tout.includes(m))) return false;
    }
    return true;
  }

  function afficherListe() {
    const res = PLATEFORMES.filter(correspond);
    $("#liste").innerHTML = res.length ? res.map((p) => carte(p)).join("")
      : `<div class="vide">Rien ne correspond à tous ces critères.<br>Essaie d'en retirer un ou deux.</div>`;
    brancherCartes($("#liste"));
    $("#compteur").textContent = `${res.length} résultat${res.length > 1 ? "s" : ""}`;
    // puces actives
    let a = "", n = 0;
    for (const g of Object.keys(actifs)) for (const k of actifs[g]) {
      n++; a += `<button class="puce on" data-g="${g}" data-k="${k}">${libelle(g, k)} ✕</button>`;
    }
    $("#actifs").innerHTML = a;
    $("#actifs").querySelectorAll(".puce").forEach((b) => (b.onclick = () => {
      actifs[b.dataset.g].delete(b.dataset.k); construirePanneau(); afficherListe();
    }));
    $("#btn-effacer").classList.toggle("cache", n === 0 && !texte);
  }

  $("#btn-filtres").onclick = () => $("#panneau").classList.toggle("cache");
  $("#btn-effacer").onclick = () => {
    Object.values(actifs).forEach((s) => s.clear());
    texte = ""; $("#recherche").value = "";
    construirePanneau(); afficherListe();
  };
  $("#recherche").addEventListener("input", (e) => {
    texte = e.target.value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
    afficherListe();
  });

  // ---------- Quiz « Pour moi » ----------
  let reponses = [];
  function quizDebut() {
    reponses = [];
    $("#v-trouver").innerHTML = `
      <h2>Trouve ce qui te parle</h2>
      <p class="sous">5 petites questions, aucune réponse n'est enregistrée ailleurs que sur ton téléphone.</p>
      <button class="btn" id="q-go">Commencer</button>`;
    $("#q-go").onclick = () => quizQuestion(0);
  }

  function quizQuestion(i) {
    if (i >= QUIZ.length) return quizResultat();
    const q = QUIZ[i];
    $("#v-trouver").innerHTML = `
      <div class="progress"><div style="width:${(i / QUIZ.length) * 100}%"></div></div>
      <p class="sous">Question ${i + 1} sur ${QUIZ.length}</p>
      <div class="quiz-q">${q.q}</div>
      ${q.r.map((r, j) => `<button class="quiz-r" data-j="${j}">${r.t}</button>`).join("")}
      ${i > 0 ? `<button class="retour" id="q-prec">← Question précédente</button>` : ""}`;
    $("#v-trouver").querySelectorAll(".quiz-r").forEach((b) => (b.onclick = () => {
      reponses[i] = q.r[b.dataset.j].f; quizQuestion(i + 1);
    }));
    if (i > 0) $("#q-prec").onclick = () => quizQuestion(i - 1);
  }

  function quizResultat() {
    const prefs = reponses.filter((r) => r && Object.keys(r).length);
    const notes = PLATEFORMES.map((p) => {
      let score = 0, raisons = [];
      prefs.forEach((f) => {
        const [g, k] = Object.entries(f)[0];
        if ((p[g] || []).includes(k)) { score += g === "format" ? 3 : 2; raisons.push(libelle(g, k)); }
      });
      score += p.criteres.length * 0.2; // léger bonus éthique
      return { p, score, raisons };
    }).filter((x) => x.raisons.length > 0).sort((a, b) => b.score - a.score).slice(0, 6);

    const html = notes.map(({ p, raisons }) =>
      carte(p, `<p class="sous" style="margin:0 0 6px">Correspond à : ${raisons.map(esc).join(" · ")}</p>`)).join("");
    $("#v-trouver").innerHTML = `
      <h2>Tes suggestions</h2>
      <p class="sous">Classées selon tes réponses. Tu peux affiner dans l'onglet Explorer.</p>
      <div id="res-quiz">${html || `<div class="vide">Aucune correspondance, essaie d'autres réponses.</div>`}</div>
      <button class="btn sec" id="q-re">Refaire le quiz</button>
      <button class="btn" id="q-explorer" style="margin-left:6px">Voir dans Explorer</button>`;
    brancherCartes($("#res-quiz"));
    $("#q-re").onclick = quizDebut;
    $("#q-explorer").onclick = () => {
      Object.values(actifs).forEach((s) => s.clear());
      prefs.forEach((f) => { const [g, k] = Object.entries(f)[0]; if (g === "format" || g === "langue") actifs[g].add(k); });
      construirePanneau(); afficherListe(); aller("explorer");
    };
  }

  // ---------- Apprendre ----------
  let lus = new Set(store.get("lus", []));
  function apprendreListe() {
    $("#v-apprendre").innerHTML = `
      <h2>Apprendre</h2>
      <p class="sous">${lus.size}/${MODULES.length} modules lus. Courts, sans jugement, pour remettre la réalité au centre.</p>
      ${MODULES.map((m) => `
        <button class="module" data-m="${m.id}">
          <span class="em">${m.emoji}</span>
          <span><b>${esc(m.titre)}</b><small>${esc(m.sous)}</small></span>
          ${lus.has(m.id) ? `<span class="lu">✓</span>` : ""}
        </button>`).join("")}`;
    $("#v-apprendre").querySelectorAll(".module").forEach((b) => (b.onclick = () => lireModule(b.dataset.m)));
  }

  function lireModule(id) {
    const i = MODULES.findIndex((m) => m.id === id);
    const m = MODULES[i];
    lus.add(id); store.set("lus", [...lus]);
    const corps = m.sections.map((s) =>
      (s.h ? `<h3>${esc(s.h)}</h3>` : "") +
      (s.p ? `<p>${esc(s.p)}</p>` : "") +
      (s.liste ? `<ul>${s.liste.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>` : "")).join("");
    const suivant = MODULES[i + 1];
    $("#v-apprendre").innerHTML = `
      <button class="retour" id="m-retour">← Tous les modules</button>
      <div class="lecture">
        <h2>${m.emoji} ${esc(m.titre)}</h2>
        <p class="sous">${esc(m.sous)}</p>
        ${corps}
      </div>
      ${suivant ? `<button class="btn" id="m-suiv" style="margin-top:18px">Suivant : ${esc(suivant.titre)} →</button>` : ""}`;
    $("#m-retour").onclick = apprendreListe;
    if (suivant) $("#m-suiv").onclick = () => lireModule(suivant.id);
    window.scrollTo(0, 0);
  }

  // ---------- Favoris (vue) ----------
  function afficherFavoris() {
    const res = PLATEFORMES.filter((p) => favoris.has(p.id));
    $("#liste-fav").innerHTML = res.length ? res.map((p) => carte(p)).join("")
      : `<div class="vide">Pas encore de favori.<br>Touche ♡ sur une fiche pour la garder ici.</div>`;
    brancherCartes($("#liste-fav"));
  }

  // ---------- Démarrage ----------
  construirePanneau();
  afficherListe();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
