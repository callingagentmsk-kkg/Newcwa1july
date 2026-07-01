/* ============================================================
   CWA SCIENCE CLASSES — Weekly Test Result Lookup Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('resultForm');
  if (!form) return;

  const outputBox = document.getElementById('resultOutput');
  const formBody = document.getElementById('resultFormBody');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('studentClass').value; // class select
    const mobile = document.getElementById('studentMobile').value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      shakeField(document.getElementById('studentMobile'));
      return;
    }

    // Loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Checking...';
    submitBtn.disabled = true;

    setTimeout(() => {
      const record = CWA_RESULTS_DB[mobile];
      renderResult(record, mobile);
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      outputBox.classList.add('show');
      outputBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 900);
  });

  function shakeField(field) {
    field.style.borderColor = '#ef4444';
    field.animate([
      { transform: 'translateX(0)' }, { transform: 'translateX(-8px)' },
      { transform: 'translateX(8px)' }, { transform: 'translateX(-6px)' },
      { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }
    ], { duration: 400 });
    setTimeout(() => field.style.borderColor = '', 1500);
  }

  const iconMap = {
    physics: 'assets/images/icon-physics.webp',
    chemistry: 'assets/images/icon-chemistry.webp',
    maths: 'assets/images/icon-maths.webp'
  };
  const colorMap = {
    physics: '#4f46e5',
    chemistry: '#ec4899',
    maths: '#10b981'
  };

  function renderResult(record, mobile) {
    if (!record) {
      outputBox.innerHTML = `
        <div class="not-found-box">
          <i class="fa-solid fa-circle-exclamation"></i>
          <h4>Result Not Found</h4>
          <p>Is mobile number <b>${mobile}</b> ka result abhi upload nahi hua hai, ya number register nahi hai.<br>Kripya class office se sampark karein ya niche diye number par WhatsApp karein.</p>
          <a href="https://wa.me/916207434940?text=Sir%20mera%20result%20nahi%20dikh%20raha%2C%20mobile%3A%20${mobile}" target="_blank" class="btn btn-primary">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp Sir
          </a>
        </div>`;
      return;
    }

    const totalMarks = record.subjects.reduce((s, x) => s + x.marks, 0);
    const totalMax = record.subjects.reduce((s, x) => s + x.total, 0);
    const pct = Math.round((totalMarks / totalMax) * 100);
    const initials = record.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

    let remarkHtml = '';
    if (pct >= 90) remarkHtml = `<div class="result-remark excellent"><i class="fa-solid fa-star"></i> Outstanding performance! Keep it up — Topper material! 🏆</div>`;
    else if (pct >= 70) remarkHtml = `<div class="result-remark pass"><i class="fa-solid fa-thumbs-up"></i> Very good performance! Thoda aur practice se aap top par ja sakte hain. 💪</div>`;
    else remarkHtml = `<div class="result-remark avg"><i class="fa-solid fa-triangle-exclamation"></i> Practice zaroori hai. Weak chapters ko dobara revise karein & doubt class attend karein. 📚</div>`;

    const circumference = 2 * Math.PI * 40;
    const dash = (pct / 100) * circumference;

    let subjectRows = '';
    record.subjects.forEach(s => {
      const spct = Math.round((s.marks / s.total) * 100);
      subjectRows += `
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <img src="${iconMap[s.icon]}" class="subj-ic" alt="${s.name}">
              <div>
                ${s.name}
                <div class="bar-bg" style="width:140px;"><div class="bar-fill" style="width:${spct}%; background:${colorMap[s.icon]};"></div></div>
              </div>
            </div>
          </td>
          <td>${s.marks}<span style="color:#94a3b8;font-weight:600;"> / ${s.total}</span></td>
        </tr>`;
    });

    outputBox.innerHTML = `
      <div class="result-topcard">
        <div style="display:flex;align-items:center;gap:16px;">
          <div class="result-avatar">${initials}</div>
          <div>
            <div class="result-name">${record.name}</div>
            <div class="result-meta"><i class="fa-solid fa-graduation-cap"></i> ${record.className} &nbsp;•&nbsp; ${record.testName}</div>
            <div class="result-meta"><i class="fa-regular fa-calendar"></i> ${record.date}</div>
          </div>
        </div>
        <div class="result-score-ring">
          <svg width="92" height="92">
            <circle cx="46" cy="46" r="40" stroke="#e2e8f0" stroke-width="8" fill="none"/>
            <circle cx="46" cy="46" r="40" stroke="url(#gradRing)" stroke-width="8" fill="none"
              stroke-dasharray="${circumference}" stroke-dashoffset="${circumference - dash}" stroke-linecap="round"/>
            <defs>
              <linearGradient id="gradRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#4f46e5"/>
                <stop offset="100%" stop-color="#ec4899"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="pct"><b>${pct}%</b><span>Overall</span></div>
        </div>
      </div>

      <table class="result-subject-table">
        <tbody>${subjectRows}</tbody>
      </table>

      <div class="result-badges">
        <div class="result-badge"><b style="color:#4f46e5;">${totalMarks}/${totalMax}</b><span>TOTAL MARKS</span></div>
        <div class="result-badge"><b style="color:#f59e0b;">#${record.rank}</b><span>CLASS RANK</span></div>
        <div class="result-badge"><b style="color:#10b981;">${record.totalStudents}</b><span>TOTAL STUDENTS</span></div>
      </div>

      ${remarkHtml}

      <div style="text-align:center;margin-top:22px;">
        <a href="https://wa.me/916207434940?text=Sir%20mera%20result%20check%20ho%20gaya%2C%20thank%20you!" target="_blank" class="btn btn-outline">
          <i class="fa-brands fa-whatsapp"></i> Share on WhatsApp
        </a>
      </div>
    `;
  }
});
