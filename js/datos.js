
const ANIMALES_DATA = {
  aguila: {
    nombre:'Águila', nick:'Williams', tag:'Visión · Silencio',
    body:'Williams no opera. Nunca lo ha hecho en público.<br><br>Creó Aurum Velare por dos razones: una inspiración que llevaba años madurando, y una necesidad real que vio en Roderas — alguien con proceso, con criterio, pero sin un lugar donde compartirlo sin ruido.<br><br>De esa combinación nació esto. Un espacio abierto a lo que cada usuario necesite: su propio proceso, su propio equipo, su propio animal.<br><br>El Águila no habla. Construye el marco y deja que los demás vuelen.',
    cita:'"No todos los que observan están quietos. Algunos están construyendo algo que tú aún no puedes ver."'
  },
  leon: {
    nombre:'León', nick:'Roderas', tag:'Presencia · Convicción',
    body:'Roderas lleva tiempo en el proceso. Más del que quisiera reconocer.<br><br>Todavía no es rentable. Lo sabe, lo acepta, y lo dice sin disculparse — porque eso es exactamente lo que define al León: no huir de la verdad.<br><br>Perdió a la Hormiga en el camino. Al Elefante lo tiene cerca, pero el mercado no espera a nadie. Roderas sigue.<br><br>Creó esta web para compartir su proceso real, con sus datos, sus errores y sus ciclos. Gracias a la oportunidad que le brindó Williams, el Águila. Sin ella, esto no existiría.',
    cita:'"Seguir sin ser rentable no es fracasar. Es la única forma honesta de aprender."'
  },
  hormiga: {
    nombre:'Hormiga', nick:'Mara', tag:'Disciplina · Repetición',
    body:'Mara fue scalper. De las pocas que entienden lo que significa estar delante de una pantalla hora tras hora sin romperse.<br><br>Estuvo mucho tiempo en el proceso. Junto a Roderas, construyendo, fallando, aprendiendo. Era metódica, constante — la hormiga que levanta lo que otros no ven.<br><br>Pero al final abandonó. El mercado no siempre premia a quien más trabaja, y Mara eligió salir.<br><br>Roderas la perdió. Y esa pérdida también forma parte del proceso. Su historia sigue aquí porque el camino no se borra cuando alguien se va.',
    cita:'"Hay quien deja el proceso antes de ver los resultados. Eso también es una decisión válida."'
  },
  elefante: {
    nombre:'Elefante', nick:'Toco', tag:'Memoria · Control emocional',
    body:'Toco opera fuerte. Pero solo cuando hay que hacerlo.<br><br>No sobreopera. No persigue el mercado. Espera con una paciencia que muy pocos tienen, y cuando el momento llega — entra con el lotaje correcto, en el timeframe correcto, sin dudar.<br><br>Es el animal más cercano al León. No por jerarquía, sino por entendimiento mutuo: Roderas confía en su criterio, y Toco confía en el proceso.<br><br>El Elefante no olvida sus errores. Ahí está su verdadera fuerza.',
    cita:'"La paciencia no es esperar. Es saber exactamente qué estás esperando."'
  },
  oso: {
    nombre:'Oso', nick:'Equipo Roderas', tag:'Paciencia · Protección',
    body:'El Oso puede entrar en el equipo del León.<br><br>Es el perfil que protege el capital antes que cualquier otra cosa. No ataca sin razón. Analiza, defiende, y cuando mueve — mueve con peso.<br><br>Si te reconoces en esta forma de operar, si quieres formar parte del proceso de Roderas — el espacio está abierto.<br><br>El equipo no se construye con prisa.',
    cita:'"Un oso no necesita justificar por qué espera. El mercado aprende a respetarle."'
  },
  toro: {
    nombre:'Toro', nick:'Equipo Roderas', tag:'Expansión · Momentum',
    body:'El Toro también puede entrar en el equipo del León.<br><br>Es expansión pura cuando el mercado lo permite. Aprovecha el momentum, no lo fuerza. Sabe que hay momentos para empujar y momentos para detenerse — y rara vez los confunde.<br><br>Si tu proceso tiene esa energía, si reconoces el timing antes que los demás — el equipo de Roderas podría ser tu lugar.<br><br>Pero el Toro que entra sin proceso, entra y sale sin dejar huella.',
    cita:'"La fuerza sin dirección no es momentum. Es ruido."'
  },
  lobo: {
    nombre:'Lobo', nick:'Tu propio camino', tag:'Instinto · Adaptación',
    body:'El Lobo no está en ningún equipo. Ni falta que le hace.<br><br>Es para quien quiere vivir su propio proceso, construir su propio equipo, o simplemente ser un animal distinto — uno que no aparece en esta web porque aún no tiene nombre.<br><br>Aurum Velare está abierto a eso. No todo el mundo necesita pertenecer a una estructura. Algunos necesitan crear la suya.<br><br>Si eres el Lobo, ya lo sabes.',
    cita:'"El lobo no busca manada. Construye territorio."'
  }
};

const ETAPAS_DATA = {
  e0:  { num:'0',  nombre:'Descubrimiento', sub:'El inicio del proceso',         body:'Algo llamó tu atención. No sabes exactamente qué es, pero aquí estás.<br><br>El descubrimiento no es una etapa que se trabaja — es una etapa que te encuentra. Quizá fue una gráfica, una conversación, una pérdida.<br><br>El proceso empieza antes de que lo decidas.',                                                                                cita:'"Todo proceso tiene un momento anterior al primer paso. Ese momento también cuenta."' },
  e1:  { num:'1',  nombre:'Silencio',       sub:'Observas sin operar',            body:'El punto de partida. Antes de operar un solo euro, el proceso empieza aquí — mirando, leyendo, entendiendo cómo se mueve XAU/USD sin tener nada en juego.<br><br>La mayoría saltea esta etapa con prisa. Los que la respetan llegan más lejos.<br><br>No es pasividad. Es preparación.',                              cita:'"El que observa sin actuar no está perdiendo el tiempo. Está construyendo criterio."' },
  e2:  { num:'2',  nombre:'Umbral',         sub:'Primeros trades reales',         body:'El dinero entra en juego por primera vez. Los números dejan de ser teóricos y el ruido emocional aparece sin avisar.<br><br>Aquí se descubre si el análisis aguanta presión real o solo funcionaba en papel.<br><br>No se espera rentabilidad. Se espera honestidad con los datos.',                               cita:'"El primer trade real te dice más sobre ti que cien operaciones en demo."' },
  e3:  { num:'3',  nombre:'Estructura',     sub:'Empiezas a ver patrones',        body:'Los datos empiezan a tener forma. Hay sesiones que se repiten, horarios que funcionan mejor, tipos de setup que encajan con tu forma de operar.<br><br>No es que el mercado haya cambiado. Es que tú empiezas a leerlo de otra manera.<br><br>La estructura no se impone — se descubre.',                            cita:'"Ver patrones no es magia. Es haber fallado suficientes veces como para reconocer lo que se repite."' },
  e4:  { num:'4',  nombre:'Fractura',       sub:'Donde la mayoría abandona',      body:'La etapa más difícil del proceso. Los resultados no acompañan, la confianza se resiente y la mente empieza a buscar atajos o excusas.<br><br>Mara se fue aquí. Muchos otros también.<br><br>Los que continúan no lo hacen porque sea fácil. Lo hacen porque entienden que la fractura forma parte del camino.',    cita:'"La fractura no es un error del proceso. Es el proceso."' },
  e5:  { num:'5',  nombre:'Claridad',       sub:'Sabes qué haces y por qué',      body:'Por primera vez, las decisiones tienen una razón clara detrás. No intuición, no esperanza — criterio.<br><br>Sabes qué tipo de trade funciona para ti, en qué condiciones entras, cuándo no operas. El ruido exterior deja de importar.<br><br>La claridad no llega de golpe. Se construye trade a trade.',         cita:'"Claridad no es certeza. Es saber actuar bien aunque el resultado sea incierto."' },
  e6:  { num:'6',  nombre:'Consistencia',   sub:'Los números se repiten',         body:'Lo que funcionó la semana pasada funciona esta semana. No siempre, pero con una regularidad que los datos confirman.<br><br>El edge existe. Ya no es fe — es evidencia.<br><br>Aquí empieza el trabajo real de afinar, no de cambiar.',                                                                                 cita:'"Consistencia no es ganar siempre. Es que los números cuenten la misma historia mes tras mes."' },
  e7:  { num:'7',  nombre:'Confianza',      sub:'Operas sin dudar el proceso',    body:'Las dudas no desaparecen, pero ya no paralizan. Ejecutas el plan aunque el mercado empuje en contra, porque confías en lo que los datos te han enseñado.<br><br>La confianza no viene del ego. Viene de haber visto los números suficientes veces como para saber que el proceso funciona.',                          cita:'"Confiar en el proceso no es ignorar el riesgo. Es saber gestionarlo sin perder la cabeza."' },
  e8:  { num:'8',  nombre:'Paciencia',      sub:'Consistencia · Espera',          body:'Sabes operar. Ahora aprendes a no hacerlo.',                                                                                                                                                                                                                                                                                    cita:'"El mercado premia la espera, no la actividad."' },
  e9:  { num:'9',  nombre:'Rentabilidad',   sub:'Los datos confirman el edge',    body:'Los números son positivos de forma sostenida. No un mes excepcional — una tendencia real que los datos respaldan.<br><br>Roderas todavía no está aquí. Lo sabe y lo comparte sin filtro. Porque llegar a esta etapa fingiendo que ya estás no sirve a nadie.<br><br>La rentabilidad es consecuencia del proceso.',  cita:'"El trader rentable no es el que más sabe. Es el que menos se equivoca con lo mismo."' },
  e10: { num:'10', nombre:'Vuelo',          sub:'Escalas con criterio',           body:'El capital crece, los lotajes también — pero con la misma lógica que funcionó en etapas anteriores. No se escala por ambición, se escala porque los datos lo permiten.<br><br>El vuelo sin criterio es caída libre. Con criterio, es el resultado natural de haber construido bien.',                                cita:'"Escalar sin proceso es apostar. Escalar con proceso es crecer."' },
  e11: { num:'11', nombre:'✦ Oro',          sub:'El proceso es tuyo',             body:'No es el final. Es el punto donde el proceso ya no necesita validación externa — porque tú mismo eres la evidencia.<br><br>Aurum Velare no promete que llegues aquí. Promete que si llegas, lo habrás construido de verdad.<br><br>El oro no se regala. Se trabaja.',                                                  cita:'"Llegar al once no significa que hayas terminado. Significa que ya sabes cómo empezar de nuevo."' }
};

function abrirEtapa(id) {
  const e = ETAPAS_DATA[id];
  if (!e) return;
  document.getElementById('etapa-num').textContent = e.num;
  document.getElementById('etapa-nombre').textContent = e.nombre;
  document.getElementById('etapa-sub').textContent = e.sub;
  document.getElementById('etapa-body').innerHTML = e.body;
  document.getElementById('etapa-cita').textContent = e.cita;
  const modal = document.getElementById('modal-etapa');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarEtapa() {
  document.getElementById('modal-etapa').style.display = 'none';
  document.body.style.overflow = '';
}

function abrirAnimal(id) {
  const a = ANIMALES_DATA[id];
  if (!a) return;
  document.getElementById('animal-nombre').textContent = a.nombre;
  document.getElementById('animal-nick').textContent = a.nick;
  document.getElementById('animal-tag').textContent = a.tag;
  document.getElementById('animal-body').innerHTML = a.body;
  document.getElementById('animal-cita').textContent = a.cita;
  const modal = document.getElementById('modal-animal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarAnimal() {
  const modal = document.getElementById('modal-animal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

