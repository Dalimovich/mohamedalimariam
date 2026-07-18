// Complete English/German translation toggle. Text is stored locally and no
// external translation service is needed.
(function () {
  var de = {
    'Work':'Projekte','Skills':'Kenntnisse','Story':'Über mich','Current focus':'Aktueller Fokus','Contact':'Kontakt',
    'Mechanical Engineering Student · Developer':'Maschinenbaustudent · Entwickler',
    'Mechanical Engineering, CAD Design &':'Maschinenbau, CAD-Konstruktion &',
    'AI Study Tools':'KI-Lerntools',
    'I’m a Mechanical Engineering student at TU Braunschweig with a focus on CAD design, SolidWorks, technical drawings, Python, web design, and building Minallo — an AI study assistant for students.':'Ich studiere Maschinenbau an der TU Braunschweig mit Schwerpunkt auf CAD-Konstruktion, SolidWorks, technischen Zeichnungen, Python, Webdesign und der Entwicklung von Minallo — einem KI-Lernassistenten für Studierende.',
    'Work with me':'Mit mir arbeiten','View CV':'Lebenslauf ansehen','Visit Minallo ↗':'Minallo besuchen ↗',
    'Featured project':'Ausgewähltes Projekt','Minallo AI Study Assistant':'Minallo KI-Lernassistent',
    'AI study platform for summaries, quizzes, flashcards, explanations and exam preparation.':'KI-Lernplattform für Zusammenfassungen, Quizfragen, Karteikarten, Erklärungen und Prüfungsvorbereitung.',
    'Developer · Product builder · Web interface':'Entwickler · Produktentwicklung · Weboberfläche','SolidWorks · AutoCAD · Python · Web Design':'SolidWorks · AutoCAD · Python · Webdesign',
    'Technical profile':'Technisches Profil','Engineering, CAD, Python and digital product building.':'Ingenieurwesen, CAD, Python und Entwicklung digitaler Produkte.',
    'From 3D-CAD and technical drawings to HTML/web design and AI-based platforms.':'Von 3D-CAD und technischen Zeichnungen bis zu HTML/Webdesign und KI-basierten Plattformen.',
    'Selected work':'Ausgewählte Arbeiten','Projects and strengths':'Projekte und Stärken','built around technical thinking':'auf Basis technischen Denkens',
    'A personal portfolio layout with clear project and skill cards, focused on mechanical engineering, CAD design, programming, and Minallo as a real product.':'Ein persönliches Portfolio mit übersichtlichen Projekt- und Kompetenzkarten, mit Fokus auf Maschinenbau, CAD-Konstruktion, Programmierung und Minallo als reales Produkt.',
    'AI Product':'KI-Produkt','Live Project':'Live-Projekt','Built as a study platform for students with AI workflows, course-based learning, summaries, quizzes, flashcards and exam preparation.':'Als Lernplattform für Studierende entwickelt – mit KI-Workflows, kursbasiertem Lernen, Zusammenfassungen, Quizfragen, Karteikarten und Prüfungsvorbereitung.',
    'AI study tool · product design · interface building':'KI-Lerntool · Produktdesign · Interface-Entwicklung','Open minallo.de ↗':'minallo.de öffnen ↗',
    'Engineering':'Ingenieurwesen','Student Focus':'Fokus Studium','Mechanical Design Profile':'Profil Maschinenbaukonstruktion',
    'Technical background in machine construction, technical drawings and design-oriented thinking.':'Technischer Hintergrund in Maschinenkonstruktion, technischen Zeichnungen und konstruktionsorientiertem Denken.',
    'Machine construction · technical drawings · structured thinking':'Maschinenkonstruktion · technische Zeichnungen · strukturiertes Denken',
    'Software':'Software','Hands-on':'Praxisnah','Programming & Web Design':'Programmierung & Webdesign',
    'First practical experience with Python and HTML/Webdesign used to create clean, modern digital interfaces.':'Erste praktische Erfahrungen mit Python und HTML/Webdesign zur Entwicklung klarer, moderner digitaler Oberflächen.',
    'Python · HTML · UI thinking · problem solving':'Python · HTML · UI-Denken · Problemlösung','Technical Tools':'Technische Werkzeuge','CAD & 3D Visual Skills':'CAD- & 3D-Visualisierungskenntnisse',
    'Knowledge of SolidWorks, AutoCAD, 3D-CAD and technical documentation workflows.':'Kenntnisse in SolidWorks, AutoCAD, 3D-CAD und Abläufen der technischen Dokumentation.',
    'SolidWorks · AutoCAD · 3D-CAD · technical visualization':'SolidWorks · AutoCAD · 3D-CAD · technische Visualisierung',
    'What I offer':'Was ich biete','Technical skills that shape':'Technische Kompetenzen, die prägen,','how I build and design':'wie ich entwickle und konstruiere',
    'The skills below come from my CV and from my current developer work on Minallo.':'Die folgenden Kenntnisse stammen aus meinem Lebenslauf und meiner aktuellen Entwicklungsarbeit an Minallo.',
    'Machine Construction':'Maschinenkonstruktion','Technical understanding of machine construction, engineering logic and structured problem solving.':'Technisches Verständnis für Maschinenkonstruktion, ingenieurwissenschaftliche Logik und strukturierte Problemlösung.',
    'Mechanical engineering · design mindset':'Maschinenbau · konstruktives Denken','CAD & Technical Drawings':'CAD & technische Zeichnungen',
    'Use of 3D-CAD, SolidWorks, AutoCAD and technical drawings as core technical tools.':'Anwendung von 3D-CAD, SolidWorks, AutoCAD und technischen Zeichnungen als zentrale technische Werkzeuge.',
    'Programming & Web Design':'Programmierung & Webdesign','Hands-on foundation in Python, HTML and web design for creating practical digital solutions.':'Praxisnahe Grundlagen in Python, HTML und Webdesign zur Entwicklung praktischer digitaler Lösungen.',
    'Office & Productivity':'Office & Produktivität','MS Excel and MS Office Suite for documentation, calculations, presentations and structured workflows.':'MS Excel und die MS Office Suite für Dokumentation, Berechnungen, Präsentationen und strukturierte Arbeitsabläufe.',
    'AI Product Development':'KI-Produktentwicklung','Developer of Minallo AI Study Assistant, combining product thinking, AI workflows and interface design.':'Entwickler des Minallo KI-Lernassistenten, der Produktdenken, KI-Workflows und Interface-Design verbindet.',
    'Product building · AI workflows · student-focused tools':'Produktentwicklung · KI-Workflows · Tools für Studierende',
    'About me':'Über mich','What I did, what I study,':'Was ich bisher gemacht habe, was ich studiere','and what I’m building now':'und woran ich gerade arbeite',
    '“I’m currently studying Mechanical Engineering at Technische Universität Braunschweig. My background started in technical sciences, and today I combine engineering, CAD, programming and web design while building Minallo as an AI study assistant for students.”':'„Ich studiere derzeit Maschinenbau an der Technischen Universität Braunschweig. Mein Werdegang begann in den technischen Wissenschaften; heute verbinde ich Ingenieurwesen, CAD, Programmierung und Webdesign und entwickle Minallo als KI-Lernassistenten für Studierende.“',
    'Mechanical Engineering student in Braunschweig · Developer of Minallo AI Study Assistant · Multilingual in Italian, Arabic, German, English and French.':'Maschinenbaustudent in Braunschweig · Entwickler des Minallo KI-Lernassistenten · Mehrsprachig in Italienisch, Arabisch, Deutsch, Englisch und Französisch.',
    'Italian':'Italienisch','Arabic':'Arabisch','German':'Deutsch','English':'Englisch','French':'Französisch',
    'My path':'Mein Weg','From technical sciences':'Von den technischen Wissenschaften','to engineering and AI tools':'zum Ingenieurwesen und zu KI-Tools',
    'This section explains what I studied before, what I am studying now, and what I am currently building.':'Dieser Abschnitt zeigt, was ich zuvor gelernt habe, was ich heute studiere und woran ich aktuell arbeite.',
    'What I did before':'Was ich zuvor gemacht habe','I completed my secondary school / Abitur in Technical Sciences at LPIM in Monastir, Tunisia, in 2022.':'2022 habe ich meinen Schulabschluss / mein Abitur im Bereich Technische Wissenschaften am LPIM in Monastir, Tunesien, erworben.',
    'Technical sciences background':'Hintergrund in technischen Wissenschaften','Early focus on structured technical thinking':'Früher Fokus auf strukturiertes technisches Denken','Foundation for mechanical engineering studies':'Grundlage für das Maschinenbaustudium',
    'What I study now':'Was ich heute studiere','I am currently studying Mechanical Engineering at Technische Universität Braunschweig in Germany.':'Ich studiere derzeit Maschinenbau an der Technischen Universität Braunschweig in Deutschland.',
    'Focus on construction, CAD and engineering fundamentals':'Fokus auf Konstruktion, CAD und ingenieurwissenschaftliche Grundlagen',
    'What I am building':'Woran ich arbeite','I am the developer of Minallo, an AI study assistant that helps students learn from their course files.':'Ich bin der Entwickler von Minallo, einem KI-Lernassistenten, der Studierenden hilft, mit ihren Kursunterlagen zu lernen.',
    'AI study workflows':'KI-Lernworkflows','Summaries, quizzes, flashcards and exam prep':'Zusammenfassungen, Quizfragen, Karteikarten und Prüfungsvorbereitung','Web product, UI and student-focused features':'Webprodukt, Benutzeroberfläche und Funktionen für Studierende',
    'Core profile':'Kernprofil','Mechanical design, CAD,':'Maschinenbaukonstruktion, CAD','and AI product building':'und KI-Produktentwicklung',
    'My profile connects mechanical engineering studies with practical CAD work, technical drawing skills, programming basics, and the development of Minallo as a real student-focused AI product.':'Mein Profil verbindet das Maschinenbaustudium mit praktischer CAD-Arbeit, Kenntnissen im technischen Zeichnen, Programmiergrundlagen und der Entwicklung von Minallo als reales KI-Produkt für Studierende.',
    'Primary strength':'Kernkompetenz','CAD Design & SolidWorks':'CAD-Konstruktion & SolidWorks',
    'A main part of my technical profile is CAD design. I work with 3D-CAD tools, especially SolidWorks, to understand mechanical parts, create structured models, and think in terms of dimensions, assemblies, constraints, and manufacturable geometry.':'Ein zentraler Teil meines technischen Profils ist die CAD-Konstruktion. Ich arbeite mit 3D-CAD-Werkzeugen, insbesondere SolidWorks, um mechanische Bauteile zu verstehen, strukturierte Modelle zu erstellen und in Maßen, Baugruppen, Abhängigkeiten und fertigungsgerechter Geometrie zu denken.',
    'CAD Design':'CAD-Konstruktion','Assemblies':'Baugruppen','Mechanical Engineering':'Maschinenbau',
    'I am currently studying Mechanical Engineering at TU Braunschweig. My studies give me a strong technical foundation in machine construction, engineering fundamentals, technical drawings, and structured problem solving.':'Ich studiere derzeit Maschinenbau an der TU Braunschweig. Mein Studium vermittelt mir eine solide technische Grundlage in Maschinenkonstruktion, ingenieurwissenschaftlichen Grundlagen, technischen Zeichnungen und strukturierter Problemlösung.',
    'Technical Drawings':'Technische Zeichnungen','Engineering Logic':'Ingenieurwissenschaftliche Logik','AutoCAD & Technical Drawings':'AutoCAD & technische Zeichnungen',
    'Alongside SolidWorks, I use AutoCAD and technical drawing principles to represent parts clearly. This includes reading and preparing technical documentation, working with dimensions, and presenting mechanical ideas in a precise visual format.':'Neben SolidWorks nutze ich AutoCAD und die Grundlagen des technischen Zeichnens, um Bauteile klar darzustellen. Dazu gehören das Lesen und Erstellen technischer Dokumentationen, das Arbeiten mit Bemaßungen und die präzise visuelle Darstellung mechanischer Ideen.',
    '2D Drawings':'2D-Zeichnungen','Dimensions':'Bemaßungen','Documentation':'Dokumentation','Developer of Minallo':'Entwickler von Minallo',
    'I am building Minallo, an AI study assistant for students. This project shows my ability to combine product thinking, web design, AI workflows, and real student problems into one platform.':'Ich entwickle Minallo, einen KI-Lernassistenten für Studierende. Das Projekt zeigt meine Fähigkeit, Produktdenken, Webdesign, KI-Workflows und reale Herausforderungen von Studierenden auf einer Plattform zu verbinden.',
    'AI Study Assistant':'KI-Lernassistent','Product Building':'Produktentwicklung','Student Platform':'Plattform für Studierende','Python & Web Design':'Python & Webdesign',
    'I also have first practical experience with Python and HTML/Webdesign. This helps me connect engineering thinking with digital tools, automation ideas, and modern website interfaces.':'Ich habe außerdem erste praktische Erfahrungen mit Python und HTML/Webdesign. Dadurch kann ich ingenieurwissenschaftliches Denken mit digitalen Werkzeugen, Automatisierungsideen und modernen Website-Oberflächen verbinden.',
    'Problem Solving':'Problemlösung','Office & Communication':'Office & Kommunikation',
    'I use MS Excel and the MS Office Suite for structured work, documentation, presentations, and organization. My multilingual background also helps me communicate clearly across different teams and environments.':'Ich nutze MS Excel und die MS Office Suite für strukturiertes Arbeiten, Dokumentation, Präsentationen und Organisation. Mein mehrsprachiger Hintergrund hilft mir außerdem, in unterschiedlichen Teams und Umgebungen klar zu kommunizieren.',
    'Languages':'Sprachen','What I am doing now':'Was ich gerade mache','and where I am heading':'und wohin ich mich entwickle',
    'This section replaces generic process steps with concrete information that is more useful for a personal portfolio.':'Dieser Abschnitt ersetzt allgemeine Prozessschritte durch konkrete Informationen, die für ein persönliches Portfolio aussagekräftiger sind.',
    'Currently studying':'Aktuelles Studium','Mechanical Engineering at TU Braunschweig':'Maschinenbau an der TU Braunschweig',
    'I am currently pursuing a Bachelor’s degree in Mechanical Engineering at Technische Universität Braunschweig.':'Ich absolviere derzeit ein Bachelorstudium im Maschinenbau an der Technischen Universität Braunschweig.',
    'Machine construction and engineering fundamentals':'Maschinenkonstruktion und ingenieurwissenschaftliche Grundlagen','CAD, technical drawings and mechanical design':'CAD, technische Zeichnungen und mechanische Konstruktion','Analytical and structured technical problem solving':'Analytische und strukturierte technische Problemlösung',
    'Currently building':'Aktuelle Entwicklung','Minallo — AI Study Assistant for Students':'Minallo — KI-Lernassistent für Studierende','I am building Minallo as a student-focused AI platform that turns course material into useful study tools.':'Ich entwickle Minallo als KI-Plattform für Studierende, die Kursmaterialien in nützliche Lernwerkzeuge verwandelt.',
    'AI explanations from course files':'KI-Erklärungen aus Kursdateien','Web product design, UI improvements and learning workflows':'Webproduktdesign, UI-Verbesserungen und Lernworkflows','Technical development':'Technische Weiterentwicklung',
    'Growing between engineering and software':'Weiterentwicklung zwischen Ingenieurwesen und Software','My goal is to connect mechanical engineering knowledge with practical digital skills.':'Mein Ziel ist es, Maschinenbaukenntnisse mit praktischen digitalen Fähigkeiten zu verbinden.',
    'Python programming and automation basics':'Python-Programmierung und Automatisierungsgrundlagen','HTML/Webdesign and interface thinking':'HTML/Webdesign und Interface-Denken','SolidWorks, AutoCAD and 3D-CAD workflows':'SolidWorks-, AutoCAD- und 3D-CAD-Workflows',
    'Looking forward':'Ausblick','Practical opportunities and technical projects':'Praktische Möglichkeiten und technische Projekte','I am interested in opportunities where I can apply engineering, CAD, programming and product-building skills.':'Ich interessiere mich für Möglichkeiten, bei denen ich meine Kenntnisse in Ingenieurwesen, CAD, Programmierung und Produktentwicklung einsetzen kann.',
    'Student jobs, internships or technical projects':'Werkstudentenstellen, Praktika oder technische Projekte','Mechanical design, CAD or technical documentation':'Mechanische Konstruktion, CAD oder technische Dokumentation','Digital tools for students, learning and productivity':'Digitale Tools für Studium, Lernen und Produktivität',
    'Interested in working together?':'Interesse an einer Zusammenarbeit?','Open to opportunities connected to mechanical engineering, web design, technical projects, student-focused tools, and digital product work.':'Ich bin offen für Möglichkeiten in den Bereichen Maschinenbau, Webdesign, technische Projekte, Tools für Studierende und digitale Produktentwicklung.',
    'Email me':'E-Mail senden','Call me':'Anrufen','Email':'E-Mail','Phone':'Telefon','Location':'Standort','Braunschweig, Germany':'Braunschweig, Deutschland',
    'Mechanical Engineering Student':'Maschinenbaustudent','Developer of Minallo':'Entwickler von Minallo',
    '© 2026 Mohamed Ali Mariam · Mechanical Engineering Student':'© 2026 Mohamed Ali Mariam · Maschinenbaustudent',
    'Developer of Minallo ·':'Entwickler von Minallo ·','· medalimariam@gmail.com · Braunschweig, Germany':'· medalimariam@gmail.com · Braunschweig, Deutschland'
  };
  var original = new Map();
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var node;
  while ((node = walker.nextNode())) {
    var key = node.nodeValue.trim().replace(/\s+/g, ' ');
    if (key && de[key]) original.set(node, { text: node.nodeValue, key: key });
  }
  var toggle = document.getElementById('lang-toggle');
  var label = document.getElementById('lang-label');
  var metaDescription = document.querySelector('meta[name="description"]');
  var englishMeta = metaDescription.content;
  var englishTitle = document.title;
  function setLanguage(lang) {
    var german = lang === 'de';
    original.forEach(function (value, textNode) {
      if (german) {
        var leading = value.text.match(/^\s*/)[0], trailing = value.text.match(/\s*$/)[0];
        textNode.nodeValue = leading + de[value.key] + trailing;
      } else textNode.nodeValue = value.text;
    });
    document.documentElement.lang = german ? 'de' : 'en';
    document.title = german ? 'Mohamed Ali Mariam — Maschinenbau, CAD & KI' : englishTitle;
    metaDescription.content = german ? 'Mohamed Ali Mariam — Maschinenbaustudent an der TU Braunschweig mit Fokus auf CAD-Konstruktion, SolidWorks, technische Zeichnungen, Python und Webdesign. Entwickler von Minallo, einem KI-Lernassistenten.' : englishMeta;
    label.textContent = german ? 'EN' : 'DE';
    toggle.setAttribute('aria-label', german ? 'Show website in English' : 'Website auf Deutsch anzeigen');
    toggle.setAttribute('aria-pressed', german ? 'true' : 'false');
    document.querySelectorAll('[aria-label*="Call Mohamed"]') .forEach(function(el) { el.setAttribute('aria-label', german ? 'Mohamed Ali Mariam unter +49 176 84501044 anrufen' : 'Call Mohamed Ali Mariam at +49 176 84501044'); });
    localStorage.setItem('portfolio-language', lang);
  }
  toggle.addEventListener('click', function () {
    var nextLanguage = document.documentElement.lang === 'de' ? 'en' : 'de';
    localStorage.setItem('portfolio-language', nextLanguage);
    window.location.href = nextLanguage === 'de' ? 'de.html' : 'index.html';
  });
  setLanguage(document.documentElement.lang === 'de' ? 'de' : 'en');
})();

// Smooth mouse-follow trail for fine pointers only.
(function () {
  if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var dots = [];
  var dotCount = 1;
  var mouse = { x: -40, y: -40 };
  for (var i = 0; i < dotCount; i++) {
    var dot = document.createElement('span');
    dot.className = 'mouse-follower';
    dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
    dots.push({ el: dot, x: mouse.x, y: mouse.y });
  }

  document.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    dots.forEach(function (dot) { dot.el.classList.add('is-visible'); });
  }, { passive: true });

  document.addEventListener('mouseleave', function () {
    dots.forEach(function (dot) { dot.el.classList.remove('is-visible'); });
  });

  function animateFollower() {
    var targetX = mouse.x;
    var targetY = mouse.y;
    dots.forEach(function (dot, index) {
      var easing = Math.max(.18, .36 - index * .018);
      dot.x += (targetX - dot.x) * easing;
      dot.y += (targetY - dot.y) * easing;
      dot.el.style.left = dot.x + 'px';
      dot.el.style.top = dot.y + 'px';
      targetX = dot.x;
      targetY = dot.y;
    });
    requestAnimationFrame(animateFollower);
  }
  requestAnimationFrame(animateFollower);
})();

// Accessible back-to-top control shared by both language versions.
(function () {
  var german = document.documentElement.lang === 'de';
  var button = document.createElement('button');
  button.className = 'back-to-top';
  button.type = 'button';
  button.setAttribute('aria-label', german ? 'Zurück nach oben' : 'Back to top');
  button.title = german ? 'Zurück nach oben' : 'Back to top';
  button.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.appendChild(button);

  function updateButton() {
    button.classList.toggle('is-visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', updateButton, { passive: true });
  button.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  updateButton();
})();

// Subtle reveal-on-scroll (premium, lightweight).
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// Explicit contact actions so email/call buttons behave consistently.
(function () {
  var emailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=medalimariam@gmail.com&su=Portfolio%20contact';
  var phoneUrl = 'tel:+4917684501044';

  document.querySelectorAll('[data-contact-action="email"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.open(emailUrl, '_blank', 'noopener,noreferrer');
    });
  });

  document.querySelectorAll('[data-contact-action="call"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = phoneUrl;
    });
  });
})();
