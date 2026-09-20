const phone = '5511957892189';
const app = document.querySelector('#app');
const videos = [
  { file: 'Eric1.mp4', poster: 'Eric1-poster.jpg', duration: '1:14' },
  { file: 'Eric2.mp4', poster: 'Eric2-poster.jpg', duration: '0:57' },
  { file: 'Eric3.mp4', poster: 'Eric3-poster.jpg', duration: '1:23' },
  { file: 'Eric4.mp4', poster: 'Eric4-poster.jpg', duration: '1:37' },
  { file: 'Eric5.mp4', poster: 'Eric5-poster.jpg', duration: '1:53' }
];
let openIntroVideo = (location.pathname.replace(/\/$/, '') || '/') === '/';
const videoDialog = () => `<dialog class="video-dialog" id="video-dialog" aria-label="Reprodutor dos vídeos do Eric"><div class="dialog-frame"><button class="dialog-close" type="button" aria-label="Fechar vídeo e acessar a página inicial">✕</button><p class="dialog-label">ERIC EM LOUVOR <span id="dialog-count"></span></p><video id="gallery-player" aria-label="Registro em vídeo do ministério do Eric" controls playsinline preload="metadata"></video><div class="dialog-actions"><button type="button" data-step="-1">← ANTERIOR</button><button type="button" data-step="1">PRÓXIMO →</button></div></div></dialog>`;
const routes = {
  '/': () => `
    <section class="hero page" aria-labelledby="hero-heading">
      <div class="stage-lights" aria-hidden="true"></div>
      <div class="ghost-portrait" aria-hidden="true"><img src="/assets/eric-lateral-clean.png" alt="" width="1448" height="1086"></div>
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow"><span class="dash"></span> LOUVOR &amp; ADORAÇÃO</p>
          <img class="hero-lettering" src="/assets/lettering-eric.png" alt="ERIC" width="1942" height="800" fetchpriority="high">
          <h1 id="hero-heading"><span>UMA VOZ.</span> <span>UM PROPÓSITO.</span></h1>
          <p class="hero-description">LOUVOR E ADORAÇÃO EM CADA ENCONTRO.</p>
          <div class="actions"><a class="button button-primary" href="/agendamento">CONVIDAR PARA UM EVENTO <span aria-hidden="true">↗</span></a><a class="button button-outline" href="/ministerio">CONHEÇA O MINISTÉRIO <span aria-hidden="true">↗</span></a></div>
        </div>
      </div>
      <img class="hero-singer" src="/assets/eric-cantando.png" alt="Eric cantando com o microfone e o braço erguido" width="1066" height="1450" fetchpriority="high">
      <a class="scroll-cue" href="/ministerio"><span aria-hidden="true">⌄</span>CONHEÇA O ERIC</a>
    </section>
    <section class="mobile-poster" aria-label="Apresentação do ministério do Eric">
      <div class="poster-topline">
        <strong>ERIC</strong><i aria-hidden="true"></i><span>LOUVOR<br>ADORAÇÃO<br>PROPÓSITO</span>
        <span class="poster-mission"><b aria-hidden="true"></b>MÚSICA QUE<br>CONECTA CORAÇÕES<br>A DEUS</span>
      </div>
      <div class="poster-ghost" aria-hidden="true"><img src="/assets/eric-lateral-clean.png" alt=""></div>
      <img class="poster-singer" src="/assets/eric-cantando.png" alt="Eric cantando com o braço erguido">
      <div class="poster-message">
        <h1>COMEÇAREMOS<br>EM <em>BREVE</em></h1>
        <p>OBRIGADO POR ESTAR AQUI!</p>
      </div>
      <div class="poster-loader" aria-hidden="true"><span></span></div>
      <p class="poster-prepare">PREPARE SEU CORAÇÃO</p>
      <nav class="poster-values" aria-label="Conheça o ministério">
        <a href="/ministerio"><span class="poster-icon music" aria-hidden="true">♫</span><b>LOUVOR</b></a>
        <a href="/ministerio"><span class="poster-icon cross" aria-hidden="true">†</span><b>ADORAÇÃO</b></a>
        <a href="/agendamento"><svg viewBox="0 0 64 48" aria-hidden="true"><circle cx="32" cy="13" r="8"></circle><circle cx="13" cy="18" r="6"></circle><circle cx="51" cy="18" r="6"></circle><path d="M18 44v-7c0-8 6-14 14-14s14 6 14 14v7M2 43v-6c0-7 5-12 11-12 4 0 7 2 9 5M62 43v-6c0-7-5-12-11-12-4 0-7 2-9 5"></path></svg><b>PROPÓSITO</b></a>
      </nav>
      <p class="poster-verse"><em>“TUDO TEM O SEU TEMPO,<br>E HÁ TEMPO PARA TODO O PROPÓSITO<br>DEBAIXO DO CÉU.”</em><small>ECLESIASTES 3:1</small></p>
    </section>${videoDialog()}`,
  '/ministerio': () => `
    <section class="ministry page" aria-labelledby="ministry-heading">
      <div class="ministry-visual reveal"><span class="outline-name" aria-hidden="true">ERIC</span><div class="portrait-glow" aria-hidden="true"></div><img src="/assets/eric-social-v3.png" alt="Eric em retrato, sorrindo, de terno preto" width="852" height="1280"></div>
      <div class="ministry-copy reveal"><p class="eyebrow"><span class="dash"></span> LOUVOR &amp; ADORAÇÃO</p><h1 id="ministry-heading">CONHEÇA<br>O <em>ERIC</em></h1><p class="ministry-intro">Uma voz a serviço da fé.<br>Louvor e adoração em encontros<br>que aproximam pessoas.</p><div class="section-divider"></div><p class="subheading">PARA CADA ENCONTRO</p><ul class="event-types"><li>CULTOS</li><li>CONGRESSOS</li><li>CELEBRAÇÕES</li></ul><a class="button button-primary" href="/agendamento">CONVIDAR PARA UM EVENTO <span aria-hidden="true">→</span></a><a class="gallery-jump" href="#videos">ASSISTA AOS VÍDEOS <span aria-hidden="true">↓</span></a></div>
    </section>
    <section class="gallery-section" id="videos" aria-labelledby="gallery-heading">
      <div class="gallery-heading reveal"><div><p class="eyebrow"><span class="dash"></span> ERIC EM VÍDEO</p><h2 id="gallery-heading">MOMENTOS DE <em>LOUVOR</em></h2></div><p>Uma seleção de registros para você conhecer o ministério de perto.</p></div>
      <div class="gallery-grid">${videos.map((video, index) => `
        <button type="button" class="video-card reveal" data-video="${index}" aria-label="Reproduzir vídeo ${index + 1} de ${videos.length}">
          <span class="video-image"><img src="/assets/${video.poster}" alt="" width="640" height="1138" loading="lazy"><span class="play-icon" aria-hidden="true">▶</span></span>
          <span class="video-meta"><span><small>REGISTRO ${String(index + 1).padStart(2, '0')}</small><strong>ERIC EM LOUVOR</strong></span><span class="video-duration">${video.duration}</span></span>
        </button>`).join('')}</div>
      <div class="gallery-footer reveal"><span>LOUVOR • FÉ • PROPÓSITO</span><a class="button button-outline" href="/agendamento">CONVIDAR PARA UM EVENTO <span aria-hidden="true">↗</span></a></div>
    </section>
    ${videoDialog()}`,
  '/agendamento': () => `
    <section class="booking page" aria-labelledby="booking-heading">
      <div class="booking-intro reveal"><p class="eyebrow"><span class="dash"></span> FAÇA SEU CONVITE</p><h1 id="booking-heading">VAMOS<br><em>ADORAR</em><br>JUNTOS?</h1><p>Conte sobre seu evento. Sua mensagem será preparada para envio ao WhatsApp oficial de contato.</p><div class="booking-accent" aria-hidden="true"></div></div>
      <div class="form-panel reveal"><p class="panel-kicker">SOLICITAÇÃO DE AGENDA</p><h2>CONVIDE O ERIC</h2><form id="booking-form" novalidate>
        <div class="form-grid">
          <div class="field"><label for="name">Nome do responsável <b>*</b></label><input id="name" name="name" autocomplete="name" required aria-describedby="name-error"><small id="name-error" class="error"></small></div>
          <div class="field"><label for="whatsapp">WhatsApp <b>*</b></label><input id="whatsapp" name="whatsapp" type="tel" autocomplete="tel" inputmode="tel" placeholder="(11) 99999-9999" required aria-describedby="whatsapp-error"><small id="whatsapp-error" class="error"></small></div>
          <div class="field"><label for="email">E-mail <b>*</b></label><input id="email" name="email" type="email" autocomplete="email" required aria-describedby="email-error"><small id="email-error" class="error"></small></div>
          <div class="field"><label for="type">Tipo de evento <b>*</b></label><select id="type" name="type" required aria-describedby="type-error"><option value="">Selecione</option><option>Culto</option><option>Congresso</option><option>Conferência</option><option>Casamento</option><option>Celebração</option><option>Evento especial</option><option>Outro</option></select><small id="type-error" class="error"></small></div>
          <div class="field"><label for="date">Data do evento <b>*</b></label><input id="date" name="date" type="date" required aria-describedby="date-error"><small id="date-error" class="error"></small></div>
          <div class="field"><label for="city">Cidade / UF <b>*</b></label><input id="city" name="city" placeholder="São Paulo / SP" required aria-describedby="city-error"><small id="city-error" class="error"></small></div>
          <div class="field full"><label for="venue">Nome da igreja ou local <b>*</b></label><input id="venue" name="venue" required aria-describedby="venue-error"><small id="venue-error" class="error"></small></div>
          <div class="field full"><label for="details">Conte um pouco sobre o evento <b>*</b></label><textarea id="details" name="details" rows="4" required aria-describedby="details-error"></textarea><small id="details-error" class="error"></small></div>
        </div>
        <button class="button button-primary submit-button" type="submit">ENVIAR SOLICITAÇÃO <span aria-hidden="true">↗</span></button>
        <p class="booking-notice">O envio não confirma a reserva. Aguarde o retorno sobre a disponibilidade.</p><p id="form-status" role="status" aria-live="polite"></p>
      </form></div>
    </section>`
};

function render() {
  document.querySelector('#gallery-player')?.pause();
  const path = location.pathname.replace(/\/$/, '') || '/';
  const route = routes[path] ? path : '/';
  app.innerHTML = routes[route]();
  document.body.classList.toggle('home-page', route === '/');
  document.querySelectorAll('[data-route]').forEach(a => a.setAttribute('aria-current', a.dataset.route === route ? 'page' : 'false'));
  document.title = `${route === '/' ? 'Início' : route === '/ministerio' ? 'Ministério' : 'Agendamento'} | Eric`;
  initMotion();
  if (route === '/ministerio' || route === '/') {
    initGallery(route === '/' && openIntroVideo);
    if (route === '/') openIntroVideo = false;
  }
  if (route === '/agendamento') initForm();
}

let revealObserver;
function initMotion() {
  revealObserver?.disconnect();
  const items = document.querySelectorAll('.reveal');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('visible'));
    return;
  }
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px 45px 0px' });
  items.forEach(item => revealObserver.observe(item));
}

function initGallery(autoOpen = false) {
  const dialog = document.querySelector('#video-dialog');
  const player = dialog.querySelector('video');
  let selected = 0;
  let opener;
  function openVideo(index) {
    selected = (index + videos.length) % videos.length;
    const video = videos[selected];
    player.pause();
    player.src = `/assets/${video.file}`;
    player.poster = `/assets/${video.poster}`;
    dialog.querySelector('#dialog-count').textContent = `${String(selected + 1).padStart(2, '0')} / ${String(videos.length).padStart(2, '0')}`;
    if (!dialog.open) dialog.showModal();
    player.play().catch(() => {});
  }
  document.querySelectorAll('[data-video]').forEach(button => button.addEventListener('click', () => {
    opener = button;
    openVideo(Number(button.dataset.video));
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => openVideo(selected + Number(button.dataset.step))));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { player.pause(); player.removeAttribute('src'); player.load(); opener?.focus(); });
  if (autoOpen) requestAnimationFrame(() => openVideo(0));
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="/"]');
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target) return;
  event.preventDefault();
  if (location.pathname !== link.pathname) history.pushState(null, '', link.pathname);
  render(); window.scrollTo(0, 0); closeMenu();
});
window.addEventListener('popstate', render);
const menuButton = document.querySelector('#menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); nav.classList.remove('open'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); nav.classList.toggle('open', open); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('scroll', () => document.querySelector('#site-header').classList.toggle('scrolled', scrollY > 24), { passive: true });

function initForm() {
  const form = document.querySelector('#booking-form');
  const date = form.elements.date;
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  date.min = localToday;
  const whatsapp = form.elements.whatsapp;
  whatsapp.addEventListener('input', () => {
    let digits = whatsapp.value.replace(/\D/g, '').slice(0, 11);
    whatsapp.value = digits.length > 10 ? digits.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3') : digits.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  });
  const fields = [...form.querySelectorAll('input, select, textarea')];
  function validate(input) {
    const value = input.value.trim();
    let message = !value ? 'Este campo é obrigatório.' : '';
    if (!message && input.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Informe um e-mail válido.';
    if (!message && input.name === 'whatsapp' && !/^\d{10,11}$/.test(value.replace(/\D/g, ''))) message = 'Informe um WhatsApp com DDD.';
    if (!message && input.name === 'date' && value < localToday) message = 'Escolha uma data futura.';
    document.querySelector(`#${input.id}-error`).textContent = message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }
  fields.forEach(input => {
    input.addEventListener('blur', () => { if (input.value) validate(input); });
    input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') validate(input); });
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const valid = fields.map(validate).every(Boolean);
    if (!valid) { fields.find(input => input.getAttribute('aria-invalid') === 'true')?.focus(); return; }
    const button = form.querySelector('.submit-button');
    if (button.disabled) return;
    button.disabled = true; button.textContent = 'PREPARANDO MENSAGEM…';
    const data = Object.fromEntries(new FormData(form));
    const day = data.date.split('-').reverse().join('/');
    const message = `Olá, gostaria de convidar o Eric para um evento.\n\nResponsável: ${data.name}\nWhatsApp: ${data.whatsapp}\nE-mail: ${data.email}\nTipo: ${data.type}\nData: ${day}\nCidade / UF: ${data.city}\nIgreja ou local: ${data.venue}\nSobre o evento: ${data.details}\n\nEntendo que o envio não confirma a reserva.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const status = document.querySelector('#form-status');
    status.textContent = 'Mensagem preparada. Conclua o envio no WhatsApp. Se ele não abrir, use este link: ';
    const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'Abrir mensagem'; status.append(a);
    status.classList.add('is-ready');
    setTimeout(() => { button.disabled = false; button.innerHTML = 'ENVIAR SOLICITAÇÃO <span aria-hidden="true">↗</span>'; }, 1500);
    window.location.assign(url);
  });
}
render();
