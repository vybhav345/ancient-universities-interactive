// Enhanced interactive functionality for ancient Indian universities
class AncientUniversitiesApp {
  constructor() {
    this.currentTheme = 'light';
    this.audioTourActive = false;
    this.currentQuizQuestion = 0;
    this.quizScore = 0;
    this.userName = '';
    this.quizData = [
      {
        question : "What was the pass rate for Takshashila's entrance exam?",
        options : [ "50%", "30%", "70%", "90%" ],
        correct : 1
      },
      {
        question : "How many manuscripts were in Nalanda's library?",
        options : [ "1 million", "5 million", "9 million", "12 million" ],
        correct : 2
      },
      {
        question : "Who was Buddha's personal physician from Takshashila?",
        options : [ "Panini", "Chanakya", "Jivaka", "Nagarjuna" ],
        correct : 2
      },
      {
        question : "In which century was Nalanda founded?",
        options : [
          "3rd century CE", "5th century CE", "7th century CE", "9th century CE"
        ],
        correct : 1
      },
      {
        question : "What does 'Dharma Gunj' mean?",
        options : [
          "House of Wisdom", "Mountain of Truth", "Sea of Knowledge",
          "Temple of Learning"
        ],
        correct : 1
      }
    ];

    this.scholarData = {
      panini : {
        name : "Panini",
        field : "Grammar & Linguistics",
        avatar : "📜",
        education :
            "Studied at Takshashila under renowned grammarians, mastering Sanskrit and its nuances.",
        achievement :
            "Created the Ashtadhyayi with 4,000 rules that became the foundation of Sanskrit grammar and influenced linguistic study worldwide.",
        legacy :
            "His systematic approach to grammar inspired modern computational linguistics and remains unmatched in its precision."
      },
      chanakya : {
        name : "Chanakya",
        field : "Political Science & Economics",
        avatar : "⚖️",
        education :
            "Graduated from Takshashila with expertise in politics, economics, and military strategy.",
        achievement :
            "Authored the Arthashastra, a comprehensive treatise on statecraft, and guided Chandragupta Maurya to establish the Mauryan Empire.",
        legacy :
            "His political theories influenced governance systems across Asia and continue to be studied in modern political science."
      },
      jivaka : {
        name : "Jivaka",
        field : "Medicine & Surgery",
        avatar : "⚕️",
        education :
            "Completed 7 years of medical training at Takshashila, passing the legendary final examination.",
        achievement :
            "Became Buddha's personal physician and pioneered surgical techniques that were centuries ahead of their time.",
        legacy :
            "His medical innovations influenced Ayurvedic practices and established the foundation for medical education in ancient India."
      }
    };

    this.triviaData = {
      'jivaka-test' : {
        title : "Jivaka's Impossible Test",
        content :
            "When Jivaka was asked to find a plant with no medicinal properties within 14 kilometers of Takshashila, he returned empty-handed, declaring that every plant had healing potential. This profound understanding earned him his graduation."
      },
      'silk-road' : {
        title : "Silk Road Gateway",
        content :
            "Takshashila's strategic location on the Silk Road made it a melting pot of cultures. Students from Greece, Persia, China, and Arabia brought diverse knowledge, creating an early model of international education."
      },
      'international' : {
        title : "Ancient Global University",
        content :
            "At its peak, Nalanda had students from 27 countries including China, Korea, Japan, Tibet, Mongolia, and Sri Lanka. The Chinese scholar Xuanzang studied here for 5 years and documented its magnificence."
      }
    };

    this.exploreData = {
      admission : {
        icon : '🎯',
        title : 'The Gates of Takshashila',
        subtitle : 'A Legendary Entrance Exam',
        content :
            'Admission to Takshashila was notoriously difficult. Prospective students had to demonstrate profound knowledge and intellectual prowess to a council of scholars. The pass rate was a mere 30%, ensuring only the most dedicated minds entered its halls. This rigorous standard maintained its reputation as the premier center of learning.'
      },
      curriculum : {
        icon : '📚',
        title : 'The 68 Subjects',
        subtitle : 'A Comprehensive Curriculum',
        content :
            'Takshashila offered a vast curriculum of 68 distinct subjects. These included the Vedas, grammar, philosophy, medicine (Ayurveda), surgery, archery, politics, warfare, astronomy, commerce, and even music and dance. This holistic approach to education was unparalleled in the ancient world.'
      },
      scholars : {
        icon : '👨‍🎓',
        title : 'A Legacy of Legends',
        subtitle : 'The Minds that Shaped an Era',
        content :
            'Takshashila was not just a university; it was a cradle of genius. Its alumni include figures like Panini, the father of grammar; Chanakya, the master political strategist; and Jivaka, the pioneer of medicine. These scholars and their works have left an indelible mark on history.'
      }
    };

    this.timelineData = {
      'takshashila-foundation' : {
        icon : '🏛️',
        title : 'The Dawn of an Era',
        subtitle : 'c. 600 BCE',
        content :
            'Takshashila is established, becoming what many historians consider the world\'s first university. It quickly becomes a beacon for scholars in various disciplines.'
      },
      'panini-grammar' : {
        icon : '📜',
        title : 'Panini\'s Ashtadhyayi',
        subtitle : 'c. 400 BCE',
        content :
            'The grammarian Panini, an alumnus of Takshashila, composes the Ashtadhyayi. This masterpiece of 4,000 grammatical rules standardizes the Sanskrit language and becomes a foundational text for linguistics.'
      },
      'chanakya-era' : {
        icon : '⚖️',
        title : 'Chanakya and the Mauryan Empire',
        subtitle : 'c. 350 BCE',
        content :
            'Chanakya (or Kautilya), a professor at Takshashila, authors the Arthashastra and mentors Chandragupta Maurya, leading to the establishment of the mighty Mauryan Empire.'
      },
      'nalanda-foundation' : {
        icon : '🏛️',
        title : 'Nalanda is Born',
        subtitle : '427 CE',
        content :
            'Under the patronage of the Gupta Empire, Nalanda Mahavihara is founded. It evolves into the world\'s first great residential university, with vast libraries, dormitories, and lecture halls.'
      },
      'xuanzang-visit' : {
        icon : '🇨🇳',
        title : 'Xuanzang\'s Journey',
        subtitle : '630 CE',
        content :
            'The Chinese Buddhist monk and scholar Xuanzang arrives at Nalanda. He studies there for five years and his detailed writings provide one of the most important historical accounts of the university at its zenith.'
      },
      'nalanda-destruction' : {
        icon : '💥',
        title : 'The End of an Age',
        subtitle : '1193 CE',
        content :
            'The library of Nalanda is set aflame by invaders led by Bakhtiyar Khilji. The fire is said to have burned for three months, destroying millions of manuscripts and marking a tragic end to a 700-year legacy of learning.'
      }
    };

    this.campusData = {
      library : {
        icon : '📚',
        title : 'Dharma Gunj - The Library',
        subtitle : 'The Mountain of Truth',
        content :
            'Nalanda\'s library, the Dharma Gunj, was a nine-story complex housing three massive buildings: the Ratnasagara (Ocean of Jewels), Ratnadadhi (Sea of Jewels), and Ratnaranjaka (Jewel-Adorned). It contained an estimated nine million manuscripts.'
      },
      'lecture-hall' : {
        icon : '🎓',
        title : 'The Lecture Halls',
        subtitle : 'Centers of Debate',
        content :
            'Nalanda had hundreds of lecture halls where thousands of students and teachers engaged in rigorous debate and learning. The curriculum covered every field of learning, from science and mathematics to medicine and Buddhist scriptures.'
      },
      temples : {
        icon : '🛕',
        title : 'The Great Stupa',
        subtitle : 'A Place of Worship and Study',
        content :
            'The campus was dotted with temples and stupas, with the Great Stupa being the most prominent structure. These were not just places of worship but also integral to the architectural and academic life of the monastery.'
      }
    };

    this.mapConnectionData = {
      china : {
        title : "Xuanzang's Pilgrimage",
        description :
            "The famous Chinese scholar Xuanzang traveled to Nalanda in the 7th century. He studied for five years and took over 650 manuscripts back to China, significantly influencing the course of East Asian Buddhism.",
      },
      greece : {
        title : "Hellenistic Exchange",
        description :
            "Following Alexander's campaigns, the region of Takshashila became a hub for Greco-Indian dialogue. Greek astronomy, philosophy, and art exchanged with Indian mathematics and spiritual thought.",
      },
      persia : {
        title : "Achaemenid & Sassanian Links",
        description :
            "For centuries, Persian empires shared a border and deep cultural ties with the educational centers in Gandhara. Scholars, traders, and ideas flowed freely between the two great civilizations.",
      },
      tibet : {
        title : "The Roots of Tibetan Buddhism",
        description :
            "Many foundational figures of Tibetan Buddhism, like Padmasambhava and Shantarakshita, were scholars from Nalanda. They carried the university's teachings into the Himalayas, shaping Tibetan culture forever.",
      },
    };

    this.audioTracks = {
      intro : "assets/audio/intro.mp3",
      takshashila : "assets/audio/takshashila.mp3",
      nalanda : "assets/audio/nalanda.mp3",
      legacy : "assets/audio/legacy.mp3" // add file if available
    };

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.setupThemeToggle();
    this.setupAudioTour();
    this.setupQuiz();
    this.setupModals();
    this.setupPopovers();
    this.setupScrollEffects();
    this.checkFirstVisit();
    window.addEventListener(
        'load', () => { document.getElementById('loading-screen')?.remove(); });
  }

  setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToSection(link.getAttribute('href').substring(1));
      });
    });

    // Hero Button
    document.getElementById('begin-journey-btn')
        ?.addEventListener('click', () => this.scrollToSection('takshashila'));

    // Clickable Cards
    document
        .querySelectorAll(
            '.comparison-card, .explore-card, .scholar-card, .timeline-era, .campus-hotspot')
        .forEach(card => {
          const handleInteraction = () => {
            if (card.dataset.university)
              this.scrollToSection(card.dataset.university);
            if (card.dataset.scholar)
              this.showInfoModal('scholar', card.dataset.scholar);
            if (card.dataset.topic)
              this.showInfoModal('explore', card.dataset.topic);
            if (card.dataset.era)
              this.showInfoModal('timeline', card.dataset.era);
            if (card.dataset.location)
              this.showInfoModal('campus', card.dataset.location);
          };
          card.addEventListener('click', handleInteraction);
          card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleInteraction();
            }
          });
        });

    // Trivia Items (Popover)
    document.querySelectorAll('.trivia-item').forEach(item => {
      const show = () => this.showPopover(item, item.dataset.popover);
      const hide = () => this.hidePopover();
      item.addEventListener('mouseenter', show);
      item.addEventListener('focus', show);
      item.addEventListener('mouseleave', hide);
      item.addEventListener('blur', hide);
    });

    // Modal close events
    const infoModal = document.getElementById('info-modal');
    infoModal?.addEventListener('click', e => {
      if (e.target === infoModal)
        this.closeModal();
    });
    infoModal?.querySelector('.close').addEventListener(
        'click', () => this.closeModal());
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape')
        this.closeModal();
    });

    // Quiz Buttons
    document.querySelectorAll('.quiz-option').forEach(option => {
      option.addEventListener('click', () => this.handleQuizAnswer(option));
    });
    document.getElementById('restart-quiz-btn')
        ?.addEventListener('click', () => this.restartQuiz());
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate counters
          entry.target.querySelectorAll('.stat-number.animated')
              .forEach(el => this.animateCounter(el));
          // Context-aware audio tour
          if (this.audioTourActive && entry.target.dataset.universityAudio) {
            this.updateAudioPrompt(entry.target.dataset.universityAudio);
          }
        }
      });
    }, {threshold : 0.4});

    document.querySelectorAll('#takshashila, #nalanda').forEach(section => {
      section.dataset.universityAudio = section.id;
      observer.observe(section);
    });
  }

  // Fully functional generic modal
  showInfoModal(type, key) {
    let data;
    switch (type) {
    case 'scholar':
      data = this.scholarData[key];
      break;
    case 'explore':
      data = this.exploreData[key];
      break;
    case 'timeline':
      data = this.timelineData[key];
      break;
    case 'campus':
      data = this.campusData[key];
      break;
    default:
      return;
    }
    if (!data)
      return;

    document.getElementById('modal-icon').textContent =
        data.icon || data.avatar;
    document.getElementById('modal-title').textContent =
        data.name || data.title;
    document.getElementById('modal-subtitle').textContent =
        data.field || data.subtitle;

    let bodyContent = '';
    if (data.education) { // Scholar format
      bodyContent =
          `<p><b>Education:</b> ${data.education}</p><p><b>Achievement:</b> ${
              data.achievement}</p><p><b>Legacy:</b> ${data.legacy}</p>`;
    } else { // Generic format
      bodyContent = `<p>${data.content}</p>`;
    }
    document.getElementById('modal-body').innerHTML = bodyContent;

    document.getElementById('info-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(this.currentTheme);
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    localStorage.setItem('theme', theme);

    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';

    this.currentTheme = theme;
  }

  setupAudioTour() {
    const audioBtn = document.getElementById('audio-tour-btn');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const closeAudioBtn = document.getElementById('close-audio');

    audioBtn.addEventListener('click', () => { this.toggleAudioTour(); });
    playPauseBtn.addEventListener('click',
                                  () => { this.toggleAudioPlayback(); });
    closeAudioBtn.addEventListener('click', () => { this.closeAudioTour(); });
  }

  toggleAudioTour() {
    const audioPlayer = document.getElementById('audio-player');

    if (this.audioTourActive) {
      this.closeAudioTour();
    } else {
      audioPlayer.classList.remove('hidden');
      this.audioTourActive = true;
      this.playAudioTrack('intro');
    }
  }

  playAudioTrack(track) {
    const audioTitle = document.getElementById('audio-title');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const audioElement = document.getElementById('audio-element');

    // Set a friendly title for display
    const trackTitles = {
      intro : "Introduction Audio Tour",
      takshashila : "Takshashila Audio Tour",
      nalanda : "Nalanda Audio Tour",
      legacy : "Legacy Audio Tour"
    };
    audioTitle.textContent = trackTitles[track] || "Audio Tour";

    // Update audio src dynamically if you have more audio files for other
    // tracks Here, only intro.mp3 is used. To extend, add those files and set
    // src accordingly.
    audioElement.src = this.audioTracks[track];

    // Load and play
    audioElement.load();
    audioElement.play()
        .then(() => { playPauseBtn.textContent = '⏸️'; })
        .catch(err => { console.error("Audio playback failed:", err); });

    // When audio ends, reset play button
    audioElement.onended = () => { playPauseBtn.textContent = '▶️'; };
  }

  toggleAudioPlayback() {
    const audioElement = document.getElementById('audio-element');
    const playPauseBtn = document.getElementById('play-pause-btn');

    if (audioElement.paused) {
      audioElement.play();
      playPauseBtn.textContent = '⏸️';
    } else {
      audioElement.pause();
      playPauseBtn.textContent = '▶️';
    }
  }

  closeAudioTour() {
    const audioPlayer = document.getElementById('audio-player');
    const audioElement = document.getElementById('audio-element');
    const playPauseBtn = document.getElementById('play-pause-btn');

    audioElement.pause();
    audioElement.currentTime = 0;
    audioPlayer.classList.add('hidden');
    playPauseBtn.textContent = '▶️';
    this.audioTourActive = false;
  }

  setupQuiz() {
    this.renderQuizQuestion();

    document.querySelectorAll('.quiz-option').forEach(option => {
      option.addEventListener('click',
                              (e) => { this.handleQuizAnswer(e.target); });
    });
  }

  renderQuizQuestion() {
    const questionData = this.quizData[this.currentQuizQuestion];
    const questionText = document.getElementById('question-text');
    const options = document.querySelectorAll('.quiz-option');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    if (questionData) {
      questionText.textContent = questionData.question;
      options.forEach((option, index) => {
        option.textContent = questionData.options[index];
        option.dataset.answer =
            index === questionData.correct ? 'correct' : 'wrong';
        option.classList.remove('correct', 'incorrect');
        option.disabled = false;
      });

      const progress =
          ((this.currentQuizQuestion + 1) / this.quizData.length) * 100;
      progressFill.style.width = `${progress}%`;
      progressText.textContent =
          `Question ${this.currentQuizQuestion + 1} of ${this.quizData.length}`;
    }
  }

  handleQuizAnswer(selectedOption) {
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = selectedOption.dataset.answer === 'correct';

    if (isCorrect) {
      this.quizScore++;
      selectedOption.classList.add('correct');
    } else {
      selectedOption.classList.add('incorrect');
      options.forEach(option => {
        if (option.dataset.answer === 'correct') {
          option.classList.add('correct');
        }
      });
    }

    options.forEach(option => { option.disabled = true; });

    setTimeout(() => {
      this.currentQuizQuestion++;
      if (this.currentQuizQuestion < this.quizData.length) {
        this.renderQuizQuestion();
      } else {
        this.showQuizResults();
      }
    }, 1500);
  }

  showQuizResults() {
    const quizQuestion = document.querySelector('.quiz-question');
    const quizResult = document.querySelector('.quiz-result');
    const finalScore = document.getElementById('final-score');
    const resultIcon = document.querySelector('.result-icon');

    quizQuestion.classList.add('hidden');
    quizResult.classList.remove('hidden');
    finalScore.textContent = this.quizScore;

    if (this.quizScore >= 4) {
      resultIcon.textContent = '🏆';
    } else if (this.quizScore >= 3) {
      resultIcon.textContent = '🎉';
    } else {
      resultIcon.textContent = '📚';
    }
  }

  restartQuiz() {
    this.currentQuizQuestion = 0;
    this.quizScore = 0;

    const quizQuestion = document.querySelector('.quiz-question');
    const quizResult = document.querySelector('.quiz-result');

    quizQuestion.classList.remove('hidden');
    quizResult.classList.add('hidden');

    this.renderQuizQuestion();
  }

  setupModals() {
    this.createDynamicModal('scholar-modal');
    this.createDynamicModal('timeline-modal');
    this.createDynamicModal('architectural-modal');
    this.createDynamicModal('explore-modal');
  }

  createDynamicModal(modalId) {
    if (document.getElementById(modalId))
      return;

    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal';
    modal.innerHTML = `
            <div class="modal-content enhanced">
                <span class="close">&times;</span>
                <div class="modal-header">
                    <div class="modal-avatar">
                        <span class="avatar-icon">📜</span>
                    </div>
                    <div class="modal-title">
                        <h3 id="${modalId}-title">Title</h3>
                        <span id="${modalId}-subtitle">Subtitle</span>
                    </div>
                </div>
                <div class="modal-body" id="${modalId}-body">
                    <p>Content goes here...</p>
                </div>
            </div>
        `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal(modalId);
      }
    });

    modal.querySelector('.close').addEventListener(
        'click', () => { this.closeModal(modalId); });
  }

  showScholarModal(scholarKey) {
    const scholar = this.scholarData[scholarKey];
    if (!scholar)
      return;

    const modal = document.getElementById('scholar-modal');
    const title = document.getElementById('scholar-modal-title');
    const subtitle = document.getElementById('scholar-modal-subtitle');
    const body = document.getElementById('scholar-modal-body');
    const avatar = modal.querySelector('.avatar-icon');

    title.textContent = scholar.name;
    subtitle.textContent = scholar.field;
    avatar.textContent = scholar.avatar;

    body.innerHTML = `
            <div class="scholar-timeline">
                <div class="timeline-item">
                    <div class="timeline-marker">🎓</div>
                    <div class="timeline-content">
                        <h4>Education</h4>
                        <p>${scholar.education}</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker">⭐</div>
                    <div class="timeline-content">
                        <h4>Major Achievement</h4>
                        <p>${scholar.achievement}</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker">🌟</div>
                    <div class="timeline-content">
                        <h4>Legacy</h4>
                        <p>${scholar.legacy}</p>
                    </div>
                </div>
            </div>
        `;

    this.showModal('scholar-modal');
  }

  setupPopovers() {
    const popover = document.getElementById('popover');
    if (!popover) {
      const popoverEl = document.createElement('div');
      popoverEl.id = 'popover';
      popoverEl.className = 'popover';
      popoverEl.innerHTML = `
                <div class="popover-content">
                    <h4 id="popover-title">Title</h4>
                    <p id="popover-text">Content</p>
                </div>
                <div class="popover-arrow"></div>
            `;
      document.body.appendChild(popoverEl);
    }
  }

  showPopover(target, triviaKey) {
    const trivia = this.triviaData[triviaKey];
    if (!trivia)
      return;

    const popover = document.getElementById('popover');
    const title = document.getElementById('popover-title');
    const text = document.getElementById('popover-text');

    title.textContent = trivia.title;
    text.textContent = trivia.content;

    const rect = target.getBoundingClientRect();
    popover.style.display = 'block';
    popover.style.left =
        `${rect.left + rect.width / 2 - popover.offsetWidth / 2}px`;
    popover.style.top = `${rect.top - popover.offsetHeight - 10}px`;
  }

  hidePopover() {
    const popover = document.getElementById('popover');
    if (popover)
      popover.style.display = 'none';
  }

  setupScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', this.throttle(() => {
      const scrolled = window.pageYOffset;
      const heroPattern = document.querySelector('.hero-pattern');

      if (heroPattern && scrolled < window.innerHeight) {
        heroPattern.style.transform = `translateY(${scrolled * 0.3}px)`;
      }

      // Update active navigation
      this.updateActiveNavigation();
    }, 16));

    this.createScrollToTopButton();
  }

  createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');

    scrollBtn.addEventListener(
        'click', () => { window.scrollTo({top : 0, behavior : 'smooth'}); });

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', this.throttle(() => {
      if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.transform = 'translateY(0)';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.transform = 'translateY(20px)';
      }
    }, 100));
  }

  updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  checkFirstVisit() {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      setTimeout(() => { this.showGreetingModal(); }, 1000);
      localStorage.setItem('hasVisited', 'true');
    }
  }

  showGreetingModal() {
    const modal = document.createElement('div');
    modal.id = 'greeting-modal';
    modal.className = 'modal';
    modal.innerHTML = `
            <div class="modal-content greeting">
                <div class="greeting-header">
                    <div class="greeting-avatar">👨‍🎓</div>
                    <h3>Welcome, Future Scholar!</h3>
                </div>
                <div class="greeting-body">
                    <p>What name would you like our ancient scholars to call you?</p>
                    <input type="text" id="user-name" placeholder="Enter your name" class="form-control">
                    <div style="display: flex; gap: 12px; margin-top: 16px;">
                        <button class="btn btn--primary" onclick="app.setUserName()">Begin Journey</button>
                        <button class="btn btn--outline" onclick="app.skipGreeting()">Skip</button>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    this.showModal('greeting-modal');
  }

  setUserName() {
    const nameInput = document.getElementById('user-name');
    const name = nameInput.value.trim();

    if (name) {
      this.userName = name;
      localStorage.setItem('userName', name);
      this.personalizeExperience();
    }

    this.closeModal('greeting-modal');
  }

  skipGreeting() { this.closeModal('greeting-modal'); }

  personalizeExperience() {
    if (this.userName) {
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) {
        heroTitle.innerHTML =
            `Welcome ${this.userName}!<br>Ancient India's Educational Marvels`;
      }
    }
  }

  // Utility methods
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({top : targetPosition, behavior : 'smooth'});
    }
  }

  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => { modal.style.display = 'none'; });
    document.body.style.overflow = 'auto';
  }

  animateCounter(element) {
    if (element.dataset.counted)
      return;

    const text = element.textContent;
    const finalValue = parseInt(text.replace(/[^\d]/g, ''));
    const suffix = text.replace(/[\d,]/g, '');

    if (finalValue && finalValue > 0) {
      element.dataset.counted = 'true';
      const duration = 2000;
      const steps = 60;
      const stepValue = finalValue / steps;
      let currentValue = 0;

      const counter = setInterval(() => {
        currentValue += stepValue;
        if (currentValue >= finalValue) {
          element.textContent = finalValue.toLocaleString() + suffix;
          clearInterval(counter);
        } else {
          element.textContent =
              Math.floor(currentValue).toLocaleString() + suffix;
        }
      }, duration / steps);
    }
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Additional methods for new features
  openWorldMap() { this.scrollToSection('world-map-section'); }

  showExploreModal(topic) {
    console.log('Showing explore modal for:', topic);
    // Implement modal content/population as needed
  }

  showTimelineModal(era) {
    console.log('Showing timeline modal for:', era);
    // Implement modal content/population as needed
  }

  showArchitecturalModal(location) {
    console.log('Showing architectural modal for:', location);
    // Implement modal content/population as needed
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new AncientUniversitiesApp();

  // Add loading animation fade-in
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// Global functions for backward compatibility
window.scrollToSection = (sectionId) => window.app.scrollToSection(sectionId);
window.showModal = (modalId) => window.app.showModal(modalId);
window.closeModal = (modalId) => window.app.closeModal(modalId);
window.restartQuiz = () => window.app.restartQuiz();

// Remove loading screen after content loads
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    setTimeout(() => loadingScreen.remove(), 1000);
  }

  // Optional ambient audio setup (adjust path & file if you want ambient music)
  const ambientAudio = new Audio('assets/audio/ambient_sitar.mp3');
  ambientAudio.loop = true;
  ambientAudio.volume = 0.2;

  const toggleAmbientBtn = document.createElement('button');
  toggleAmbientBtn.textContent = '🎶 Toggle Music';
  toggleAmbientBtn.className = 'btn btn--sm btn--outline';
  toggleAmbientBtn.style.position = 'fixed';
  toggleAmbientBtn.style.bottom = '20px';
  toggleAmbientBtn.style.right = '20px';
  toggleAmbientBtn.style.zIndex = 1000;

  document.body.appendChild(toggleAmbientBtn);
  let playing = false;

  toggleAmbientBtn.addEventListener('click', () => {
    if (!playing) {
      ambientAudio.play();
      toggleAmbientBtn.textContent = '🔇 Stop Music';
    } else {
      ambientAudio.pause();
      toggleAmbientBtn.textContent = '🎶 Toggle Music';
    }
    playing = !playing;
  });
});

// Nalanda Story Slider
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.story-slide');
  const prevBtn = document.querySelector('.story-prev');
  const nextBtn = document.querySelector('.story-next');
  let current = 0;
  if (slides.length === 0)
    return;

  function showSlide(index) {
    slides.forEach(
        (slide, i) => { slide.classList.toggle('active', i === index); });
  }

  showSlide(current);

  prevBtn.addEventListener('click', function() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  nextBtn.addEventListener('click', function() {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
});
