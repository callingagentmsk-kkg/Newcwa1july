/* ============================================================
   CWA SCIENCE CLASSES — Batch Detail Page Renderer
   Reads window.CWA_CURRENT_BATCH (set in each batch html page)
   and renders subject tabs + chapter list (video/pdf) from
   batches-data.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const batchKey = window.CWA_CURRENT_BATCH;
  if (!batchKey || !CWA_BATCHES[batchKey]) return;

  const batch = CWA_BATCHES[batchKey];
  const tabsRow = document.getElementById('subjectTabs');
  const panelsWrap = document.getElementById('subjectPanels');
  if (!tabsRow || !panelsWrap) return;

  const subjectKeys = Object.keys(batch.subjects);

  subjectKeys.forEach((key, idx) => {
    const subj = batch.subjects[key];
    // Tab button
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (idx === 0 ? ' active' : '');
    btn.setAttribute('data-tab', key);
    btn.innerHTML = `<img src="assets/images/${subj.icon}.webp" alt="${subj.title}"> ${subj.title}`;
    btn.addEventListener('click', () => switchTab(key));
    tabsRow.appendChild(btn);

    // Panel
    const panel = document.createElement('div');
    panel.className = 'tab-panel' + (idx === 0 ? ' active' : '');
    panel.setAttribute('data-panel', key);

    subj.chapters.forEach((ch, chIdx) => {
      if (ch.locked) {
        panel.innerHTML += `
          <div class="locked-chapter" data-aos="fade-up">
            <div class="lock-ic"><i class="fa-solid fa-lock"></i></div>
            <div>
              <b>Chapter ${ch.no}: ${ch.title}</b>
              <span>Admission ke baad unlock hoga — is chapter ka live/recorded lecture batch join karne par milega.</span>
            </div>
          </div>`;
      } else {
        const uid = `${key}-${ch.no}`;
        panel.innerHTML += `
          <div class="chapter-card" data-aos="fade-up" data-aos-delay="${chIdx * 60}">
            <div class="chapter-head">
              <div class="chapter-title-wrap">
                <div class="chno">${ch.no}</div>
                <div>
                  <h4>${ch.title}</h4>
                  <span>${ch.desc}</span>
                </div>
              </div>
              <div class="chapter-actions">
                <button class="chip-btn video" onclick="toggleVideo('${uid}')">
                  <i class="fa-solid fa-circle-play"></i> Watch Video
                </button>
                <a class="chip-btn pdf" href="${ch.pdf}" target="_blank" download>
                  <i class="fa-solid fa-file-arrow-down"></i> Download PDF
                </a>
              </div>
            </div>
            <div class="video-wrap" id="video-${uid}">
              <iframe data-src="https://www.youtube.com/embed/${ch.videoId}" title="${ch.title}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>`;
      }
    });

    panelsWrap.appendChild(panel);
  });

  function switchTab(key) {
    tabsRow.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === key));
    panelsWrap.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.getAttribute('data-panel') === key));
    // re-trigger AOS-lite for newly visible panel
    document.querySelectorAll(`.tab-panel[data-panel="${key}"] [data-aos]`).forEach(el => el.classList.add('aos-animate'));
  }

  // ensure first panel content is visible immediately
  document.querySelectorAll('.tab-panel.active [data-aos]').forEach(el => el.classList.add('aos-animate'));
});

function toggleVideo(uid) {
  const wrap = document.getElementById('video-' + uid);
  if (!wrap) return;
  const iframe = wrap.querySelector('iframe');
  const isShowing = wrap.classList.contains('show');
  // close all other open videos first
  document.querySelectorAll('.video-wrap.show').forEach(v => {
    if (v !== wrap) {
      v.classList.remove('show');
      const f = v.querySelector('iframe');
      if (f && f.src) f.src = '';
    }
  });
  if (isShowing) {
    wrap.classList.remove('show');
    iframe.src = '';
  } else {
    if (!iframe.src) iframe.src = iframe.getAttribute('data-src');
    wrap.classList.add('show');
    wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
