const navtoggle = document.getElementById('navtoggle');
const navlinks = document.getElementById('navlinks');
navtoggle.addEventListener('click', () => navlinks.classList.toggle('open'));
navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));

const btnCurso = document.getElementById('btn-curso');
const info = document.getElementById('course-info');
btnCurso.addEventListener('click', () => {
  info.classList.toggle('open');
  btnCurso.textContent = info.classList.contains('open') ? 'Ocultar detalhes' : 'Ver detalhes do curso';
  if(info.classList.contains('open')){
    setTimeout(() => info.scrollIntoView({behavior:'smooth', block:'center'}), 150);
  }
});

const filters = document.querySelectorAll('#filters button');
const cards = document.querySelectorAll('#grid .card');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(c => {
      c.classList.toggle('hidden', f !== 'all' && c.dataset.cat !== f);
    });
  });
});

function bindCarousel(gridId, prevId, nextId){
  const grid = document.getElementById(gridId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  if(!grid || !prev || !next) return;
  function scrollAmount(){
    const card = grid.querySelector('.card:not(.hidden)');
    const gap = 22;
    return card ? card.getBoundingClientRect().width + gap : 280;
  }
  prev.addEventListener('click', () => grid.scrollBy({left:-scrollAmount(), behavior:'smooth'}));
  next.addEventListener('click', () => grid.scrollBy({left:scrollAmount(), behavior:'smooth'}));
}

bindCarousel('grid', 'carPrev', 'carNext');
bindCarousel('turmaGrid', 'turmaPrev', 'turmaNext');