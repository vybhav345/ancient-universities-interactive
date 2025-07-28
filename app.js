// Enhanced interactive functionality for ancient Indian universities
class AncientUniversitiesApp {
  constructor() {
    this.currentTheme = 'light';
    this.audioTourActive = false;
    this.currentQuizQuestion = 0;
    this.quizScore = 0;
    this.userName = '';
    this.currentAudio = null;

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
        name : "पाणिनि (Panini)",
        field : "व्याकरण एवं भाषाविज्ञान (Grammar & Linguistics)",
        avatar : "📜",
        education :
            "Studied at Takshashila under renowned grammarians, mastering Sanskrit and its nuances.",
        achievement :
            "Created the Ashtadhyayi with 4,000 rules that became the foundation of Sanskrit grammar and influenced linguistic study worldwide.",
        legacy :
            "His systematic approach to grammar inspired modern computational linguistics and remains unmatched in its precision."
      },
      chanakya : {
        name : "चाणक्य (Chanakya)",
        field : "राजनीति शास्त्र एवं अर्थशास्त्र (Political Science & Economics)",
        avatar : "⚖️",
        education :
            "Graduated from Takshashila with expertise in politics, economics, and military strategy.",
        achievement :
            "Authored the Arthashastra, a comprehensive treatise on statecraft, and guided Chandragupta Maurya to establish the Mauryan Empire.",
        legacy :
            "His political theories influenced governance systems across Asia and continue to be studied in modern political science."
      },
      jivaka : {
        name : "जीविका (Jivaka)",
        field : "चिकित्सा एवं शल्य चिकित्सा (Medicine & Surgery)",
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
        title : 'तक्षशिला के द्वार (The Gates of Takshashila)',
        subtitle : 'एक ऐतिहासिक प्रवेश परीक्षा (A Legendary Entrance Exam)',
        content :
            'Admission to Takshashila was notoriously difficult. Prospective students had to demonstrate profound knowledge and intellectual prowess to a council of scholars. The pass rate was a mere 30%, ensuring only the most dedicated minds entered its halls. This rigorous standard maintained its reputation as the premier center of learning.'
      },
      curriculum : {
        icon : '📚',
        title : '६८ विषय (The 68 Subjects)',
        subtitle : 'एक व्यापक पाठ्यक्रम (A Comprehensive Curriculum)',
        content :
            'Takshashila offered a vast curriculum of 68 distinct subjects. These included the Vedas, grammar, philosophy, medicine (Ayurveda), surgery, archery, politics, warfare, astronomy, commerce, and even music and dance. This holistic approach to education was unparalleled in the ancient world.'
      },
      scholars : {
        icon : '👨‍🎓',
        title : 'महान हस्तियों की विरासत (A Legacy of Legends)',
        subtitle :
            'वह महान बुद्धि जिन्‍होंने एक युग गढ़ा (The Minds that Shaped an Era)',
        content :
            'Takshashila was not just a university; it was a cradle of genius. Its alumni include figures like Panini, the father of grammar; Chanakya, the master political strategist; and Jivaka, the pioneer of medicine. These scholars and their works have left an indelible mark on history.'
      }
    };

    this.timelineData = {
      'takshashila-foundation' : {
        icon : '🏛️',
        title : 'युग की शुरुआत (The Dawn of an Era)',
        subtitle : 'c. 600 BCE',
        content :
            'Takshashila is established, becoming what many historians consider the world\'s first university. It quickly becomes a beacon for scholars in various disciplines.'
      },
      'panini-grammar' : {
        icon : '📜',
        title : 'पाणिनि की अष्टाध्यायी (Panini\'s Ashtadhyayi)',
        subtitle : 'c. 400 BCE',
        content :
            'The grammarian Panini, an alumnus of Takshashila, composes the Ashtadhyayi. This masterpiece of 4,000 grammatical rules standardizes the Sanskrit language and becomes a foundational text for linguistics.'
      },
      'chanakya-era' : {
        icon : '⚖️',
        title : 'चाणक्य और मौर्य साम्राज्य (Chanakya and the Mauryan Empire)',
        subtitle : 'c. 350 BCE',
        content :
            'Chanakya (or Kautilya), a professor at Takshashila, authors the Arthashastra and mentors Chandragupta Maurya, leading to the establishment of the mighty Mauryan Empire.'
      },
      'nalanda-foundation' : {
        icon : '🏛️',
        title : 'नालंदा की स्थापना (Nalanda is Founded)',
        subtitle : '427 CE',
        content :
            'Under the patronage of the Gupta Empire, Nalanda Mahavihara is founded. It evolves into the world\'s first great residential university, with vast libraries, dormitories, and lecture halls.'
      },
      'xuanzang-visit' : {
        icon : '🇨🇳',
        title : 'ह्वेनसांग की यात्रा (Xuanzang\'s Journey)',
        subtitle : '630 CE',
        content :
            'The Chinese Buddhist monk and scholar Xuanzang arrives at Nalanda. He studies there for five years and his detailed writings provide one of the most important historical accounts of the university at its zenith.'
      },
      'nalanda-destruction' : {
        icon : '💥',
        title : 'युग का अंत (The End of an Age)',
        subtitle : '1193 CE',
        content :
            'The library of Nalanda is set aflame by invaders led by Bakhtiyar Khilji. The fire is said to have burned for three months, destroying millions of manuscripts and marking a tragic end to a 700-year legacy of learning.'
      }
    };

    this.campusData = {
      library : {
        icon : '📚',
        title : 'धर्मगंज – पुस्तकालय (Dharma Ganj - The Library)',
        subtitle : 'सत्य का पर्वत (The Mountain of Truth)',
        content :
            'Nalanda\'s library, the Dharma Gunj, was a nine-story complex housing three massive buildings: the Ratnasagara (Ocean of Jewels), Ratnadadhi (Sea of Jewels), and Ratnaranjaka (Jewel-Adorned). It contained an estimated nine million manuscripts.'
      },
      'lecture-hall' : {
        icon : '🎓',
        title : 'व्याख्यानशाला (The Lecture Halls)',
        subtitle : 'तर्क-वितर्क के केन्द्र (Centers of Debate)',
        content :
            'Nalanda had hundreds of lecture halls where thousands of students and teachers engaged in rigorous debate and learning. The curriculum covered every field of learning, from science and mathematics to medicine and Buddhist scriptures.'
      },
      temples : {
        icon : '🛕',
        title : 'विशाल स्तूप (The Great Stupa)',
        subtitle : 'उपासना एवं अध्ययन स्थल (A Place of Worship and Study)',
        content :
            'The campus was dotted with temples and stupas, with the Great Stupa being the most prominent structure. These were not just places of worship but also integral to the architectural and academic life of the monastery.'
      }
    };

    this.faqData = {
      'admission-secrets' : {
        question :
            "What were the secret admission criteria at Takshashila that historians rarely discuss?",
        answer :
            "Beyond intellectual prowess, candidates had to demonstrate physical endurance through a 7-day wilderness survival test..."
      },
      // ... other FAQ items
    };

    this.audioTracks = {
      intro : "assets/audio/intro.mp3",
      takshashila : "assets/audio/takshashila.mp3",
      nalanda : "assets/audio/nalanda.mp3",
      legacy : "assets/audio/legacy.mp3"
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
    this.setupFAQ();

    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
      }, 2500); // 2.5 seconds delay for demo
    });
  }

  setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          this.scrollToSection(href.substring(1));
          this.setupMobileMenu();
          this.setupActiveLinks();
        }
      });
    });

    // Hero Button
    const beginJourneyBtn = document.getElementById('begin-journey-btn');
    if (beginJourneyBtn) {
      beginJourneyBtn.addEventListener(
          'click', () => this.scrollToSection('takshashila'));
    }

    // Clickable Cards
    document
        .querySelectorAll(
            '.comparison-card, .explore-card, .scholar-card, .timeline-era, .campus-hotspot')
        .forEach(card => {
          const handleInteraction = () => {
            if (card.dataset.university) {
              this.scrollToSection(card.dataset.university);
            } else if (card.dataset.scholar) {
              this.showInfoModal('scholar', card.dataset.scholar);
            } else if (card.dataset.topic) {
              this.showInfoModal('explore', card.dataset.topic);
            } else if (card.dataset.era) {
              this.showInfoModal('timeline', card.dataset.era);
            } else if (card.dataset.location) {
              this.showInfoModal('campus', card.dataset.location);
            }
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
      const show = () => {
        if (item.dataset.popover) {
          this.showPopover(item, item.dataset.popover);
        }
      };
      const hide = () => this.hidePopover();

      item.addEventListener('mouseenter', show);
      item.addEventListener('focus', show);
      item.addEventListener('mouseleave', hide);
      item.addEventListener('blur', hide);
    });

    // Modal close events
    const infoModal = document.getElementById('info-modal');
    if (infoModal) {
      infoModal.addEventListener('click', e => {
        if (e.target === infoModal) {
          this.closeModal();
        }
      });

      const closeBtn = infoModal.querySelector('.close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeModal());
      }
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });

    // Quiz Buttons
    document.querySelectorAll('.quiz-option').forEach(option => {
      option.addEventListener('click', () => this.handleQuizAnswer(option));
    });

    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    if (restartQuizBtn) {
      restartQuizBtn.addEventListener('click', () => this.restartQuiz());
    }
  }

  // Add these new methods to the class:
  setupMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
      // Create overlay for mobile menu
      const overlay = document.createElement('div');
      overlay.className = 'nav-overlay';
      overlay.id = 'nav-overlay';
      document.body.appendChild(overlay);

      navToggle.addEventListener('click', () => { this.toggleMobileMenu(); });

      // Close menu when clicking overlay
      overlay.addEventListener('click', () => { this.closeMobileMenu(); });

      // Close menu when clicking a nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => { this.closeMobileMenu(); });
      });
    }
  }

  toggleMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-overlay');

    const isActive = navMenu.classList.contains('active');

    if (isActive) {
      this.closeMobileMenu();
    } else {
      navMenu.classList.add('active');
      navToggle.classList.add('active');
      overlay.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  closeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-overlay');

    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    overlay.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'auto';
  }

  setupActiveLinks() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
      const currentSection = this.getCurrentSection();

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });
  }

  getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    for (let section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight) {
        return section.id;
      }
    }

    return 'home';
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate counters
          entry.target.querySelectorAll('.stat-number.animated')
              .forEach(el => { this.animateCounter(el); });

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

  updateAudioPrompt(audioTrack) {
    if (this.audioTracks[audioTrack]) {
      this.playAudioTrack(audioTrack);
    }
  }

  // Fixed modal system
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

    // Create modal if it doesn't exist
    let modal = document.getElementById('info-modal');
    if (!modal) {
      modal = this.createInfoModal();
    }

    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalBody = document.getElementById('modal-body');

    if (modalIcon)
      modalIcon.textContent = data.icon || data.avatar || '📚';
    if (modalTitle)
      modalTitle.textContent = data.name || data.title;
    if (modalSubtitle)
      modalSubtitle.textContent = data.field || data.subtitle || '';

    let bodyContent = '';
    if (data.education) { // Scholar format
      bodyContent = `
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Achievement:</strong> ${data.achievement}</p>
        <p><strong>Legacy:</strong> ${data.legacy}</p>
      `;
    } else { // Generic format
      bodyContent = `<p>${data.content}</p>`;
    }

    if (modalBody)
      modalBody.innerHTML = bodyContent;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  createInfoModal() {
    const modal = document.createElement('div');
    modal.id = 'info-modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-header">
          <div class="modal-icon" id="modal-icon">📚</div>
          <div>
            <h3 id="modal-title">Title</h3>
            <p id="modal-subtitle">Subtitle</p>
          </div>
        </div>
        <div class="modal-body" id="modal-body">
          <p>Content goes here...</p>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });

    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    return modal;
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
    if (!themeToggle)
      return;

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
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    this.currentTheme = theme;
  }

  setupAudioTour() {
    const audioBtn = document.getElementById('audio-tour-btn');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const closeAudioBtn = document.getElementById('close-audio');

    if (audioBtn) {
      audioBtn.addEventListener('click', () => this.toggleAudioTour());
    }
    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => this.toggleAudioPlayback());
    }
    if (closeAudioBtn) {
      closeAudioBtn.addEventListener('click', () => this.closeAudioTour());
    }
  }

  toggleAudioTour() {
    const audioPlayer = document.getElementById('audio-player');
    if (!audioPlayer)
      return;

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

    if (!audioElement)
      return;

    // Set a friendly title for display
    const trackTitles = {
      intro : "Introduction Audio Tour",
      takshashila : "Takshashila Audio Tour",
      nalanda : "Nalanda Audio Tour",
      legacy : "Legacy Audio Tour"
    };

    if (audioTitle) {
      audioTitle.textContent = trackTitles[track] || "Audio Tour";
    }

    // Stop current audio if playing
    if (this.currentAudio && !this.currentAudio.paused) {
      this.currentAudio.pause();
    }

    // Set new audio source
    if (this.audioTracks[track]) {
      audioElement.src = this.audioTracks[track];
      this.currentAudio = audioElement;

      // Load and play
      audioElement.load();
      audioElement.play()
          .then(() => {
            if (playPauseBtn)
              playPauseBtn.textContent = '⏸️';
          })
          .catch(err => { console.error("Audio playback failed:", err); });

      // When audio ends, reset play button
      audioElement.onended = () => {
        if (playPauseBtn)
          playPauseBtn.textContent = '▶️';
      };
    }
  }

  toggleAudioPlayback() {
    const audioElement = document.getElementById('audio-element');
    const playPauseBtn = document.getElementById('play-pause-btn');

    if (!audioElement || !playPauseBtn)
      return;

    if (audioElement.paused) {
      audioElement.play()
          .then(() => { playPauseBtn.textContent = '⏸️'; })
          .catch(err => { console.error("Audio play failed:", err); });
    } else {
      audioElement.pause();
      playPauseBtn.textContent = '▶️';
    }
  }

  closeAudioTour() {
    const audioPlayer = document.getElementById('audio-player');
    const audioElement = document.getElementById('audio-element');
    const playPauseBtn = document.getElementById('play-pause-btn');

    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }

    if (audioPlayer) {
      audioPlayer.classList.add('hidden');
    }

    if (playPauseBtn) {
      playPauseBtn.textContent = '▶️';
    }

    this.audioTourActive = false;
    this.currentAudio = null;
  }

  setupQuiz() { this.renderQuizQuestion(); }

  renderQuizQuestion() {
    if (this.currentQuizQuestion >= this.quizData.length)
      return;

    const questionData = this.quizData[this.currentQuizQuestion];
    const questionText = document.getElementById('question-text');
    const options = document.querySelectorAll('.quiz-option');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    if (questionData && questionText) {
      questionText.textContent = questionData.question;

      options.forEach((option, index) => {
        if (questionData.options[index]) {
          option.textContent = questionData.options[index];
          option.dataset.answer =
              index === questionData.correct ? 'correct' : 'wrong';
          option.classList.remove('correct', 'incorrect');
          option.disabled = false;
        }
      });

      if (progressFill) {
        const progress =
            ((this.currentQuizQuestion + 1) / this.quizData.length) * 100;
        progressFill.style.width = `${progress}%`;
      }

      if (progressText) {
        progressText.textContent = `Question ${
            this.currentQuizQuestion + 1} of ${this.quizData.length}`;
      }
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

    if (quizQuestion)
      quizQuestion.classList.add('hidden');
    if (quizResult)
      quizResult.classList.remove('hidden');
    if (finalScore)
      finalScore.textContent = this.quizScore;

    if (resultIcon) {
      if (this.quizScore >= 4) {
        resultIcon.textContent = '🏆';
      } else if (this.quizScore >= 3) {
        resultIcon.textContent = '🎉';
      } else {
        resultIcon.textContent = '📚';
      }
    }
  }

  restartQuiz() {
    this.currentQuizQuestion = 0;
    this.quizScore = 0;

    const quizQuestion = document.querySelector('.quiz-question');
    const quizResult = document.querySelector('.quiz-result');

    if (quizQuestion)
      quizQuestion.classList.remove('hidden');
    if (quizResult)
      quizResult.classList.add('hidden');

    this.renderQuizQuestion();
  }

  setupModals() {
    // Modal setup is now handled dynamically in showInfoModal
  }

  setupPopovers() {
    let popover = document.getElementById('popover');
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

    if (!popover || !title || !text)
      return;

    title.textContent = trivia.title;
    text.textContent = trivia.content;

    const rect = target.getBoundingClientRect();
    popover.style.display = 'block';

    // Calculate position
    const popoverRect = popover.getBoundingClientRect();
    const left = rect.left + rect.width / 2 - popoverRect.width / 2;
    const top = rect.top - popoverRect.height - 10;

    popover.style.left = `${
        Math.max(
            10, Math.min(left, window.innerWidth - popoverRect.width - 10))}px`;
    popover.style.top = `${Math.max(10, top)}px`;
  }

  hidePopover() {
    const popover = document.getElementById('popover');
    if (popover) {
      popover.style.display = 'none';
    }
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
    // Check if button already exists
    if (document.querySelector('.scroll-to-top'))
      return;

    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 80px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background: #007bff;
      color: white;
      font-size: 20px;
      cursor: pointer;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
      z-index: 1000;
    `;

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
    } else {
      // Load saved user name
      const savedName = localStorage.getItem('userName');
      if (savedName) {
        this.userName = savedName;
        this.personalizeExperience();
      }
    }
  }

  setupFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (question && answer) {
        question.addEventListener('click', () => {
          // Close other open FAQs
          document.querySelectorAll('.faq-answer.active')
              .forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                  otherAnswer.classList.remove('active');
                }
              });

          // Toggle current FAQ
          answer.classList.toggle('active');

          // Update icon
          const icon = question.querySelector('.faq-icon');
          if (icon) {
            icon.textContent = answer.classList.contains('active') ? '📖' : '📜';
          }
        });
      }
    });
  }

  showGreetingModal() {
    // Remove existing greeting modal if it exists
    const existingModal = document.getElementById('greeting-modal');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'greeting-modal';
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
      <div class="modal-content greeting">
        <div class="greeting-header">
          <div class="greeting-avatar">👨‍🎓</div>
          <h3>Welcome, Future Scholar!</h3>
        </div>
        <div class="greeting-body">
          <p>What name would you like our ancient scholars to call you?</p>
          <input type="text" id="user-name" placeholder="Enter your name" class="form-control" style="margin: 16px 0; padding: 8px; width: 100%; border: 1px solid #ddd; border-radius: 4px;">
          <div style="display: flex; gap: 12px; margin-top: 16px;">
            <button class="btn btn--primary" onclick="window.app.setUserName()">Begin Journey</button>
            <button class="btn btn--outline" onclick="window.app.skipGreeting()">Skip</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Focus on input
    const nameInput = document.getElementById('user-name');
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 100);

      // Allow Enter key to submit
      nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.setUserName();
        }
      });
    }
  }

  setUserName() {
    const nameInput = document.getElementById('user-name');
    const name = nameInput ? nameInput.value.trim() : '';

    if (name) {
      this.userName = name;
      localStorage.setItem('userName', name);
      this.personalizeExperience();
    }

    this.closeGreetingModal();
  }

  skipGreeting() { this.closeGreetingModal(); }

  closeGreetingModal() {
    const modal = document.getElementById('greeting-modal');
    if (modal) {
      modal.remove();
    }
    document.body.style.overflow = 'auto';
  }

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
window.scrollToSection = (sectionId) => {
  if (window.app) {
    window.app.scrollToSection(sectionId);
  }
};

window.restartQuiz = () => {
  if (window.app) {
    window.app.restartQuiz();
  }
};

// Remove loading screen after content loads
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    setTimeout(() => loadingScreen.remove(), 1000);
  }

  // Optional ambient audio setup
  try {
    const ambientAudio = new Audio('assets/audio/ambient_sitar.mp3');
    ambientAudio.loop = true;
    ambientAudio.volume = 0.2;

    // Check if ambient music button already exists
    if (!document.getElementById('ambient-music-btn')) {
      const toggleAmbientBtn = document.createElement('button');
      toggleAmbientBtn.id = 'ambient-music-btn';
      toggleAmbientBtn.textContent = '🎶 Toggle Music';
      toggleAmbientBtn.className = 'btn btn--sm btn--outline';
      toggleAmbientBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        padding: 8px 12px;
        border: 1px solid #007bff;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 4px;
        cursor: pointer;
      `;

      document.body.appendChild(toggleAmbientBtn);
      let playing = false;

      toggleAmbientBtn.addEventListener('click', () => {
        if (!playing) {
          ambientAudio.play()
              .then(() => {
                toggleAmbientBtn.textContent = '🔇 Stop Music';
                playing = true;
              })
              .catch(err => { console.error('Audio play failed:', err); });
        } else {
          ambientAudio.pause();
          toggleAmbientBtn.textContent = '🎶 Toggle Music';
          playing = false;
        }
      });
    }
  } catch (error) {
    console.error('Ambient audio setup failed:', error);
  }
});

// Nalanda Story Slider
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.story-slide');
  const prevBtn = document.querySelector('.story-prev');
  const nextBtn = document.querySelector('.story-next');

  if (slides.length === 0)
    return;

  let current = 0;

  function showSlide(index) {
    slides.forEach(
        (slide, i) => { slide.classList.toggle('active', i === index); });
  }

  showSlide(current);

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  }
});
