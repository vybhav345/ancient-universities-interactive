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

    this.audioTracks = {
      intro :
          "Welcome to the journey through ancient India's educational marvels...",
      takshashila :
          "Step into Takshashila, where the concept of university education was born...",
      nalanda : "Discover Nalanda, the pinnacle of ancient learning...",
      legacy : "Explore how these universities shaped the modern world..."
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
  }

  setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1);
        this.scrollToSection(target);
      });
    });

    // Hero buttons
    document.querySelector('.hero-buttons .btn--primary')
        ?.addEventListener('click',
                           () => { this.scrollToSection('takshashila'); });

    document.querySelector('.hero-buttons .btn--secondary')
        ?.addEventListener('click', () => { this.openWorldMap(); });

    // Comparison cards
    document.querySelectorAll('.comparison-card').forEach(card => {
      card.addEventListener('click', () => {
        const university = card.dataset.university;
        this.scrollToSection(university);
      });
    });

    // Explore cards
    document.querySelectorAll('.explore-card').forEach(card => {
      card.addEventListener('click', () => {
        const topic = card.dataset.topic;
        this.showExploreModal(topic);
      });
    });

    // Scholar cards
    document.querySelectorAll('.scholar-card').forEach(card => {
      card.addEventListener('click', () => {
        const scholar = card.dataset.scholar;
        this.showScholarModal(scholar);
      });
    });

    // Timeline eras
    document.querySelectorAll('.timeline-era').forEach(era => {
      era.addEventListener('click', () => {
        const eraData = era.dataset.era;
        this.showTimelineModal(eraData);
      });
    });

    // Campus hotspots
    document.querySelectorAll('.campus-hotspot').forEach(hotspot => {
      hotspot.addEventListener('click', () => {
        const location = hotspot.dataset.location;
        this.showArchitecturalModal(location);
      });
    });

    // Trivia items
    document.querySelectorAll('.trivia-item').forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        const triviaKey = item.dataset.popover;
        this.showPopover(e.target, triviaKey);
      });

      item.addEventListener('mouseleave', () => { this.hidePopover(); });
    });

    // Modal close events
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal(modal.id);
        }
      });
    });

    document.querySelectorAll('.close').forEach(closeBtn => {
      closeBtn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        this.closeModal(modal.id);
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {threshold : 0.1, rootMargin : '0px 0px -50px 0px'};

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Trigger counter animations
          if (entry.target.classList.contains('stat-number')) {
            this.animateCounter(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe elements for animations
    document
        .querySelectorAll(
            '.fade-in, .stat-card, .scholar-card, .explore-card, .timeline-era')
        .forEach(el => {
          el.classList.add('fade-in');
          observer.observe(el);
        });

    // Observe stat numbers
    document.querySelectorAll('.stat-number')
        .forEach(el => { observer.observe(el); });
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

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
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const closeAudioBtn = document.getElementById('close-audio');
    const audioTitle = document.getElementById('audio-title');

    audioBtn.addEventListener('click', () => { this.toggleAudioTour(); });

    playPauseBtn.addEventListener('click',
                                  () => { this.toggleAudioPlayback(); });

    closeAudioBtn.addEventListener('click', () => { this.closeAudioTour(); });
  }

  toggleAudioTour() {
    const audioPlayer = document.getElementById('audio-player');

    if (this.audioTourActive) {
      audioPlayer.classList.add('hidden');
      this.audioTourActive = false;
    } else {
      audioPlayer.classList.remove('hidden');
      this.audioTourActive = true;
      this.playAudioTrack('intro');
    }
  }

  playAudioTrack(track) {
    const audioTitle = document.getElementById('audio-title');
    const playPauseBtn = document.getElementById('play-pause-btn');

    audioTitle.textContent = this.audioTracks[track];
    playPauseBtn.textContent = '⏸️';

    // Simulate audio playback (in real implementation, you'd use actual audio
    // files)
    setTimeout(() => { playPauseBtn.textContent = '▶️'; }, 3000);
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
      // Highlight correct answer
      options.forEach(option => {
        if (option.dataset.answer === 'correct') {
          option.classList.add('correct');
        }
      });
    }

    // Disable all options
    options.forEach(option => { option.disabled = true; });

    // Move to next question after delay
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

    // Set appropriate icon based on score
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
    // Create dynamic modals for different content types
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

    // Add event listeners
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

    // Scroll to top button
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
      // Add personalized elements
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) {
        heroTitle.innerHTML =
            `Welcome ${this.userName}!<br>Ancient India's Educational Marvels`;
      }

      // Add more personalization as needed
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
    // Implementation for explore modal
    console.log('Showing explore modal for:', topic);
  }

  showTimelineModal(era) {
    // Implementation for timeline modal
    console.log('Showing timeline modal for:', era);
  }

  showArchitecturalModal(location) {
    // Implementation for architectural modal
    console.log('Showing architectural modal for:', location);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new AncientUniversitiesApp();

  // Add loading animation
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

    // Optional ambient audio setup
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
