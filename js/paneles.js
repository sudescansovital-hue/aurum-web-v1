
// Auto-espaciado: mide los tabs y aplica el margen correcto a cada panel
function aplicarEspaciadoPaneles() {
  var tabsBar = document.querySelector('#page-gestion [style*="sticky"]');
  if (!tabsBar) return;
  var tabsH = tabsBar.offsetHeight; // altura de la barra de tabs ~44px
  var espacioNecesario = tabsH + 16; // tabs + 16px de aire

  var paneles = {
    'gpanel-ciclo111':    document.querySelector('#gpanel-ciclo111 > div:first-child') || document.querySelector('#gpanel-ciclo111 [style*="grid-template-columns:140px"]'),
    'gpanel-horarios':    document.querySelector('#gpanel-horarios > div:first-child'),
    'gpanel-equity':      document.querySelector('#gpanel-equity > div:first-child'),
    'gpanel-cumplimiento': document.querySelector('#gpanel-cumplimiento > div:first-child'),
    'gpanel-estadisticas': document.querySelector('#gpanel-estadisticas > div:first-child'),
    'gpanel-diario':       null, // ya tiene padding correcto
    'gpanel-historial':    null  // ya tiene padding correcto
  };

  Object.keys(paneles).forEach(function(id) {
    var el = paneles[id];
    if (el) el.style.marginTop = espacioNecesario + 'px';
  });

  // Trade Record: el selector de cuentas
  var trSelector = document.querySelector('#gpanel-trade-record [style*="grid-template-columns:repeat(4,1fr)"]');
  if (trSelector) trSelector.style.marginTop = espacioNecesario + 'px';
}


document.addEventListener('DOMContentLoaded', function() {
  setTimeout(aplicarEspaciadoPaneles, 200);
});

