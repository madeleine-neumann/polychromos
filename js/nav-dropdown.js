(function(){
  const dd = document.getElementById('navDropdown');
  document.addEventListener('click', (e) => {
    if (dd.open && !dd.contains(e.target)) dd.open = false;
  });
  dd.addEventListener('click', (e) => {
    if (e.target.closest('a')) dd.open = false;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dd.open = false;
  });
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.view-select[open]').forEach(vs => {
      if (!vs.contains(e.target)) vs.open = false;
    });
  });
})();
