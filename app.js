// AgroSakha Application Data and Logic
const APP_DATA = {
  villages: [
    { name: 'Harda', population: 45000 },
    { name: 'Khirkiya', population: 12000 },
    { name: 'Timarni', population: 8500 },
    { name: 'Sirali', population: 6200 },
    { name: 'Rehtakhedi', population: 5800 },
    { name: 'Handiya', population: 7100 },
    { name: 'Satwas', population: 4900 },
    { name: 'Chainpur', population: 5500 }
  ],
  
  weatherForecast: [
    { day: 'Today', maxTemp: 38, minTemp: 26, condition: 'Partly Cloudy', rain: 20, icon: '⛅' },
    { day: 'Tomorrow', maxTemp: 39, minTemp: 27, condition: 'Sunny', rain: 10, icon: '☀️' },
    { day: 'Day 3', maxTemp: 40, minTemp: 28, condition: 'Sunny', rain: 5, icon: '☀️' },
    { day: 'Day 4', maxTemp: 37, minTemp: 26, condition: 'Thunderstorms', rain: 80, icon: '⛈️' },
    { day: 'Day 5', maxTemp: 35, minTemp: 24, condition: 'Rain', rain: 90, icon: '🌧️' },
    { day: 'Day 6', maxTemp: 34, minTemp: 23, condition: 'Cloudy', rain: 60, icon: '☁️' },
    { day: 'Day 7', maxTemp: 36, minTemp: 25, condition: 'Partly Cloudy', rain: 30, icon: '⛅' }
  ],
  
  notifications: [
    {
      id: 1,
      type: 'weather',
      priority: 'high',
      time: '2025-10-25 08:30 AM',
      message_en: 'Heavy rainfall alert for Harda on 28th Oct. Secure your crops and ensure proper drainage.',
      message_hi: '28 अक्टूबर को हरदा में भारी बारिश की चेतावनी। अपनी फसलों को सुरक्षित करें।'
    },
    {
      id: 2,
      type: 'pest',
      priority: 'medium',
      time: '2025-10-24 06:15 PM',
      message_en: 'Bollworm infestation reported in cotton crops near Khirkiya. Check your fields.',
      message_hi: 'खिरकिया के पास कपास में गुलाबी सुंडी का प्रकोप। अपने खेत की जांच करें।'
    },
    {
      id: 3,
      type: 'market',
      priority: 'medium',
      time: '2025-10-24 02:45 PM',
      message_en: 'Soybean price increased by ₹120/quintal at Harda mandi. Good time to sell.',
      message_hi: 'हरदा मंडी में सोयाबीन का भाव ₹120/क्विंटल बढ़ा। बेचने का अच्छा समय।'
    },
    {
      id: 4,
      type: 'scheme',
      priority: 'low',
      time: '2025-10-23 10:00 AM',
      message_en: 'PM-KISAN installment will be credited by 31st Oct. Verify your bank details.',
      message_hi: 'PM-KISAN की किस्त 31 अक्टूबर तक जमा होगी। अपने बैंक विवरण सत्यापित करें।'
    }
  ],
  
  diseases: {
    wheat: {
      name: 'Wheat Yellow Rust',
      name_hindi: 'गेहूं का पीला रतुआ',
      confidence: 92,
      severity: 'Moderate',
      treatment_en: 'Apply sulfur-based fungicide (400g/acre). Spray during cool hours.',
      treatment_hi: 'सल्फर आधारित फफूंदनाशक (400g/एकड़) लगाएं। ठंडे समय में छिड़काव करें।',
      cost: '₹400-500/acre'
    },
    soybean: {
      name: 'Soybean Mosaic Virus',
      name_hindi: 'सोयाबीन मोजेक वायरस',
      confidence: 89,
      severity: 'Severe',
      treatment_en: 'Remove infected plants immediately. Control aphids with neem oil.',
      treatment_hi: 'संक्रमित पौधों को तुरंत हटा दें। नीम के तेल से एफिड नियंत्रण करें।',
      cost: '₹300-400/acre'
    },
    cotton: {
      name: 'Cotton Bollworm',
      name_hindi: 'कपास का गुलाबी सुंडी',
      confidence: 94,
      severity: 'Severe',
      treatment_en: 'Spray NPV 250 LE/ha or Bt formulation. Monitor pheromone traps.',
      treatment_hi: 'NPV 250 LE/ha या Bt फॉर्मूलेशन का छिड़काव करें। फेरोमोन ट्रैप की निगरानी करें।',
      cost: '₹600-800/acre'
    },
    gram: {
      name: 'Gram Wilt',
      name_hindi: 'चने का उकठा रोग',
      confidence: 87,
      severity: 'Moderate',
      treatment_en: 'Use Trichoderma-treated seeds. Improve drainage. Crop rotation recommended.',
      treatment_hi: 'ट्राइकोडर्मा उपचारित बीज उपयोग करें। जल निकासी सुधारें।',
      cost: '₹350-450/acre'
    }
  },
  
  marketPrices: [
    { commodity: 'Wheat', commodity_hindi: 'गेहूं', price: 2180, yesterday: 2150, change: +1.4 },
    { commodity: 'Soybean', commodity_hindi: 'सोयाबीन', price: 4950, yesterday: 4830, change: +2.5 },
    { commodity: 'Cotton', commodity_hindi: 'कपास', price: 6650, yesterday: 6720, change: -1.0 },
    { commodity: 'Gram', commodity_hindi: 'चना', price: 5320, yesterday: 5300, change: +0.4 },
    { commodity: 'Garlic', commodity_hindi: 'लहसुन', price: 8600, yesterday: 8550, change: +0.6 }
  ],
  
  schemes: [
    {
      name: 'PM-KISAN',
      name_hindi: 'प्रधानमंत्री किसान सम्मान निधि',
      benefit_en: '₹6,000 per year in 3 installments',
      benefit_hi: '₹6,000 प्रति वर्ष 3 किस्तों में',
      eligibility_en: 'All landholding farmers',
      eligibility_hi: 'सभी भूमिधारी किसान',
      icon: '💰',
      status: 'not-applied'
    },
    {
      name: 'Fasal Bima Yojana',
      name_hindi: 'फसल बीमा योजना',
      benefit_en: 'Full crop loss coverage, 2% premium for Kharif',
      benefit_hi: 'पूर्ण फसल नुकसान कवरेज, खरीफ के लिए 2% प्रीमियम',
      eligibility_en: 'All farmers with crop insurance',
      eligibility_hi: 'फसल बीमा वाले सभी किसान',
      icon: '🌾',
      status: 'not-applied'
    },
    {
      name: 'MP Organic Farming',
      name_hindi: 'एमपी जैविक खेती',
      benefit_en: '₹10,000 per hectare subsidy',
      benefit_hi: '₹10,000 प्रति हेक्टेयर सब्सिडी',
      eligibility_en: 'Farmers transitioning to organic',
      eligibility_hi: 'जैविक खेती अपनाने वाले किसान',
      icon: '🌱',
      status: 'not-applied'
    },
    {
      name: 'Soil Health Card',
      name_hindi: 'मृदा स्वास्थ्य कार्ड',
      benefit_en: 'Free soil testing and fertilizer recommendations',
      benefit_hi: 'मुफ्त मृदा परीक्षण और उर्वरक सिफारिश',
      eligibility_en: 'All farmers',
      eligibility_hi: 'सभी किसान',
      icon: '🧪',
      status: 'not-applied'
    }
  ],
  
  communityPosts: [
    {
      id: 1,
      author: 'Ramesh Patel',
      village: 'Harda',
      time: '2 hours ago',
      content_en: 'What is the best time for wheat sowing in Harda this season?',
      content_hi: 'इस सीजन में हरदा में गेहूं की बुवाई के लिए सबसे अच्छा समय क्या है?',
      replies: 5,
      likes: 8
    },
    {
      id: 2,
      author: 'Sunita Yadav',
      village: 'Khirkiya',
      time: '5 hours ago',
      content_en: 'My income doubled with organic soybean! Thanks to AgroSakha advice.',
      content_hi: 'जैविक सोयाबीन से मेरी आय दोगुनी हो गई! AgroSakha की सलाह के लिए धन्यवाद।',
      replies: 12,
      likes: 18
    },
    {
      id: 3,
      author: 'Mohan Singh',
      village: 'Timarni',
      time: '1 day ago',
      content_en: 'Need urgent market price alerts for cotton. Where to sell?',
      content_hi: 'कपास के लिए तत्काल बाजार मूल्य अलर्ट चाहिए। कहाँ बेचें?',
      replies: 3,
      likes: 5
    },
    {
      id: 4,
      author: 'Kavita Sharma',
      village: 'Sirali',
      time: '1 day ago',
      content_en: 'PM-KISAN payment received today! Thank you AgroSakha for reminders.',
      content_hi: 'PM-KISAN का भुगतान आज प्राप्त हुआ! रिमाइंडर के लिए AgroSakha का धन्यवाद।',
      replies: 8,
      likes: 12
    },
    {
      id: 5,
      author: 'Rajesh Kumar',
      village: 'Handiya',
      time: '2 days ago',
      content_en: 'Pest attack in my gram crop. AgroSakha disease detection helped identify early!',
      content_hi: 'मेरी चने की फसल में कीट का हमला। AgroSakha रोग पहचान ने जल्दी पहचानने में मदद की!',
      replies: 6,
      likes: 10
    }
  ],
  
  farmActivities: [
    { date: 'Oct 24', activity_en: 'Fertilizer applied to Sector A', activity_hi: 'सेक्टर A में उर्वरक लगाया गया' },
    { date: 'Oct 20', activity_en: 'Irrigation scheduled', activity_hi: 'सिंचाई निर्धारित' },
    { date: 'Oct 15', activity_en: 'Disease monitoring completed', activity_hi: 'रोग निगरानी पूर्ण' }
  ]
};

// Application State
const state = {
  currentLanguage: 'en',
  currentView: 'dashboard',
  isLoggedIn: false,
  currentUser: null,
  offlineMode: false
};

// Utility Functions
function showLoading(text) {
  const overlay = document.getElementById('loading-overlay');
  const loadingText = document.getElementById('loading-text');
  if (text) {
    loadingText.querySelector('span').textContent = text;
  }
  overlay.classList.add('active');
}

function hideLoading() {
  document.getElementById('loading-overlay').classList.remove('active');
}

function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function switchLanguage() {
  state.currentLanguage = state.currentLanguage === 'en' ? 'hi' : 'en';
  updateLanguage();
  
  // Update language toggle button
  const langBtn = document.getElementById('lang-toggle-btn');
  if (state.currentLanguage === 'hi') {
    langBtn.innerHTML = '<span class="lang-inactive">EN</span> ↔️ <span class="lang-active">HI</span>';
  } else {
    langBtn.innerHTML = '<span class="lang-active">EN</span> ↔️ <span class="lang-inactive">HI</span>';
  }
  
  showToast(state.currentLanguage === 'hi' ? 'भाषा बदली गई' : 'Language Changed');
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const attr = state.currentLanguage === 'en' ? 'data-en' : 'data-hi';
    const text = el.getAttribute(attr);
    if (text) {
      el.textContent = text;
    }
  });
}

function switchView(viewId) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  
  // Show selected view
  const targetView = document.getElementById(viewId + '-view');
  if (targetView) {
    targetView.classList.add('active');
    state.currentView = viewId;
  }
  
  // Update bottom nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.view === viewId) {
      item.classList.add('active');
    }
  });
}

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// Authentication
function initAuth() {
  // Populate village dropdowns
  const signupVillage = document.getElementById('signup-village');
  const farmVillage = document.getElementById('farm-village');
  
  APP_DATA.villages.forEach(village => {
    const option1 = document.createElement('option');
    option1.value = village.name;
    option1.textContent = village.name;
    signupVillage.appendChild(option1);
    
    const option2 = document.createElement('option');
    option2.value = village.name;
    option2.textContent = village.name;
    farmVillage.appendChild(option2);
  });
  
  // Auth tabs
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
      
      this.classList.add('active');
      const formId = this.dataset.tab + '-form';
      document.getElementById(formId).classList.add('active');
    });
  });
  
  // Login form
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('login-phone').value;
    const password = document.getElementById('login-password').value;
    
    // Demo login check
    if (phone === 'demo_farmer' || password === 'harda2025') {
      state.isLoggedIn = true;
      state.currentUser = {
        name: 'Demo Farmer',
        phone: '9876543210',
        village: 'Harda'
      };
      
      document.getElementById('user-name').textContent = state.currentUser.name;
      switchScreen('app-screen');
      showToast('Welcome to AgroSakha!');
      initApp();
    } else {
      showToast('Invalid credentials. Use demo_farmer/harda2025');
    }
  });
  
  // Signup form
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const phone = document.getElementById('signup-phone').value;
    const village = document.getElementById('signup-village').value;
    
    state.isLoggedIn = true;
    state.currentUser = { name, phone, village };
    
    document.getElementById('user-name').textContent = name;
    switchScreen('app-screen');
    showToast('Account created successfully!');
    initApp();
  });
}

// Initialize App Features
function initApp() {
  initNotifications();
  initWeather();
  initDisease();
  initMarket();
  initSchemes();
  initCommunity();
  initFarm();
}

// Notifications
function initNotifications() {
  const notificationBtn = document.getElementById('notification-btn');
  const notificationPanel = document.getElementById('notification-panel');
  const notificationsList = document.getElementById('notifications-list');
  
  notificationBtn.addEventListener('click', () => {
    notificationPanel.classList.toggle('active');
  });
  
  // Close panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!notificationBtn.contains(e.target) && !notificationPanel.contains(e.target)) {
      notificationPanel.classList.remove('active');
    }
  });
  
  // Render notifications
  notificationsList.innerHTML = APP_DATA.notifications.map(notif => `
    <div class="notification-item ${notif.type}">
      <div class="notification-time">
        ${notif.time}
        <span class="notification-priority ${notif.priority}">${notif.priority.toUpperCase()}</span>
      </div>
      <div class="notification-message">
        ${state.currentLanguage === 'en' ? notif.message_en : notif.message_hi}
      </div>
    </div>
  `).join('');
}

// Weather Module
function initWeather() {
  const forecastGrid = document.getElementById('forecast-grid');
  const alertsList = document.getElementById('weather-alerts-list');
  
  // Render forecast
  forecastGrid.innerHTML = APP_DATA.weatherForecast.map(day => `
    <div class="forecast-card">
      <div class="forecast-day">${day.day}</div>
      <div class="forecast-icon">${day.icon}</div>
      <div class="forecast-temps">${day.maxTemp}° / ${day.minTemp}°</div>
      <div class="forecast-rain">${day.rain}% rain</div>
    </div>
  `).join('');
  
  // Render weather alerts
  const weatherAlerts = [
    { severity: 'high', message: 'Heavy rainfall warning: 80mm expected in 24 hours' },
    { severity: 'medium', message: 'Good sowing window: Adequate soil moisture detected' }
  ];
  
  alertsList.innerHTML = weatherAlerts.map(alert => `
    <div class="alert-card ${alert.severity}">
      <div class="alert-title">${alert.severity === 'high' ? '⚠️ High Alert' : '⚡ Weather Update'}</div>
      <div class="alert-message">${alert.message}</div>
    </div>
  `).join('');
}

// Disease Detection Module
function initDisease() {
  const uploadArea = document.getElementById('upload-area');
  const uploadBtn = document.getElementById('upload-btn');
  const imageInput = document.getElementById('disease-image');
  const cropType = document.getElementById('crop-type');
  const diseaseResult = document.getElementById('disease-result');
  
  uploadBtn.addEventListener('click', () => imageInput.click());
  uploadArea.addEventListener('click', () => imageInput.click());
  
  imageInput.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      analyzeDiseaseImage(file, cropType.value);
    }
  });
}

function analyzeDiseaseImage(file, crop) {
  showLoading(state.currentLanguage === 'en' ? 'Analyzing image...' : 'छवि का विश्लेषण...');
  
  setTimeout(() => {
    hideLoading();
    const disease = APP_DATA.diseases[crop];
    
    document.getElementById('disease-name').textContent = disease.name;
    document.getElementById('disease-name-hindi').textContent = disease.name_hindi;
    document.getElementById('disease-confidence').textContent = disease.confidence + '%';
    document.getElementById('disease-severity').textContent = disease.severity;
    document.getElementById('treatment-text').textContent = 
      state.currentLanguage === 'en' ? disease.treatment_en : disease.treatment_hi;
    document.getElementById('treatment-cost').textContent = disease.cost;
    
    document.getElementById('disease-result').style.display = 'block';
    document.getElementById('disease-result').scrollIntoView({ behavior: 'smooth' });
    
    showToast(state.currentLanguage === 'en' ? 'Analysis Complete!' : 'विश्लेषण पूर्ण!');
  }, 2500);
}

// Market Prices Module
function initMarket() {
  const marketTbody = document.getElementById('market-tbody');
  
  function renderMarketPrices() {
    marketTbody.innerHTML = APP_DATA.marketPrices.map(item => {
      const changeClass = item.change > 0 ? 'positive' : 'negative';
      const changeSymbol = item.change > 0 ? '↑' : '↓';
      const commodity = state.currentLanguage === 'en' ? item.commodity : item.commodity_hindi;
      
      return `
        <tr>
          <td><strong>${commodity}</strong></td>
          <td>₹${item.price}</td>
          <td class="price-change ${changeClass}">${changeSymbol} ${Math.abs(item.change)}%</td>
        </tr>
      `;
    }).join('');
  }
  
  renderMarketPrices();
  
  document.getElementById('mandi-select').addEventListener('change', () => {
    showLoading(state.currentLanguage === 'en' ? 'Fetching prices...' : 'कीमतें लाई जा रही हैं...');
    setTimeout(() => {
      hideLoading();
      renderMarketPrices();
    }, 1000);
  });
}

// Government Schemes Module
function initSchemes() {
  const schemesList = document.getElementById('schemes-list');
  
  schemesList.innerHTML = APP_DATA.schemes.map(scheme => `
    <div class="scheme-card">
      <div class="scheme-header">
        <div class="scheme-icon">${scheme.icon}</div>
        <div class="scheme-title">
          <div class="scheme-name">${scheme.name}</div>
          <div class="scheme-name-hindi">${scheme.name_hindi}</div>
        </div>
      </div>
      <div class="scheme-benefit">
        ${state.currentLanguage === 'en' ? scheme.benefit_en : scheme.benefit_hi}
      </div>
      <div class="scheme-eligibility">
        <strong>${state.currentLanguage === 'en' ? 'Eligibility:' : 'पात्रता:'}</strong>
        ${state.currentLanguage === 'en' ? scheme.eligibility_en : scheme.eligibility_hi}
      </div>
      <div class="scheme-actions">
        <button class="btn btn--primary" onclick="applyScheme('${scheme.name}')">
          <span data-en="Apply Now" data-hi="अभी आवेदन करें">Apply Now</span>
        </button>
        <span class="scheme-status ${scheme.status}">
          ${scheme.status === 'not-applied' ? 'Not Applied' : scheme.status}
        </span>
      </div>
    </div>
  `).join('');
}

function applyScheme(schemeName) {
  showToast(state.currentLanguage === 'en' ? 
    `Application submitted for ${schemeName}` : 
    `${schemeName} के लिए आवेदन जमा किया गया`);
}

// Community Module
function initCommunity() {
  const postsList = document.getElementById('posts-list');
  
  function renderPosts() {
    postsList.innerHTML = APP_DATA.communityPosts.map(post => {
      const initials = post.author.split(' ').map(n => n[0]).join('');
      const content = state.currentLanguage === 'en' ? post.content_en : post.content_hi;
      
      return `
        <div class="post-card">
          <div class="post-header">
            <div class="post-avatar">${initials}</div>
            <div class="post-author-info">
              <div class="post-author">${post.author}</div>
              <div class="post-meta">${post.village} • ${post.time}</div>
            </div>
          </div>
          <div class="post-content">${content}</div>
          <div class="post-stats">
            <div class="post-stat">💬 ${post.replies} ${state.currentLanguage === 'en' ? 'replies' : 'जवाब'}</div>
            <div class="post-stat">❤️ ${post.likes} ${state.currentLanguage === 'en' ? 'likes' : 'लाइक'}</div>
          </div>
        </div>
      `;
    }).join('');
  }
  
  renderPosts();
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderPosts();
    });
  });
}

// Farm Management Module
function initFarm() {
  const farmForm = document.getElementById('farm-form');
  const farmSetup = document.getElementById('farm-setup');
  const farmDashboard = document.getElementById('farm-dashboard');
  
  farmForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const village = document.getElementById('farm-village').value;
    const area = document.getElementById('farm-area').value;
    const irrigation = document.getElementById('farm-irrigation').value;
    const soil = document.getElementById('farm-soil').value;
    
    const selectedCrops = Array.from(document.querySelectorAll('.crops-checkboxes input:checked'))
      .map(cb => cb.value);
    
    showLoading(state.currentLanguage === 'en' ? 'Saving profile...' : 'प्रोफाइल सहेजी जा रही है...');
    
    setTimeout(() => {
      hideLoading();
      farmSetup.style.display = 'none';
      farmDashboard.style.display = 'flex';
      
      document.getElementById('farm-info-title').textContent = `${village} Farm`;
      document.getElementById('farm-stat-area').textContent = `${area} hectares`;
      document.getElementById('farm-stat-crops').textContent = selectedCrops.join(', ');
      document.getElementById('farm-stat-soil').textContent = soil;
      
      // Render activities
      const activitiesList = document.getElementById('farm-activities');
      activitiesList.innerHTML = APP_DATA.farmActivities.map(activity => `
        <div class="activity-item">
          <div class="activity-date">${activity.date}</div>
          <div class="activity-text">
            ${state.currentLanguage === 'en' ? activity.activity_en : activity.activity_hi}
          </div>
        </div>
      `).join('');
      
      showToast(state.currentLanguage === 'en' ? 'Farm profile saved!' : 'खेत प्रोफाइल सहेजी गई!');
    }, 1500);
  });
}

// Navigation
function initNavigation() {
  // Feature cards navigation
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
      const view = this.dataset.view;
      switchView(view);
    });
  });
  
  // Bottom navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
      const view = this.dataset.view;
      if (view) {
        switchView(view);
      }
    });
  });
  
  // Profile navigation
  document.getElementById('profile-nav').addEventListener('click', () => {
    switchView('farm');
  });
  
  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const target = this.dataset.back;
      switchView(target);
    });
  });
  
  // Language toggle
  document.getElementById('lang-toggle-btn').addEventListener('click', switchLanguage);
  
  // Offline mode toggle
  document.getElementById('offline-mode-toggle').addEventListener('change', function() {
    state.offlineMode = this.checked;
    
    if (state.offlineMode) {
      const banner = document.createElement('div');
      banner.className = 'offline-banner';
      banner.id = 'offline-banner';
      banner.innerHTML = state.currentLanguage === 'en' ? 
        '📡 Offline Mode - Showing cached data' : 
        '📡 ऑफलाइन मोड - संग्रहीत डेटा दिखाया जा रहा है';
      document.querySelector('.app-header').after(banner);
      showToast(state.currentLanguage === 'en' ? 'Offline mode enabled' : 'ऑफलाइन मोड सक्षम');
    } else {
      const banner = document.getElementById('offline-banner');
      if (banner) banner.remove();
      showToast(state.currentLanguage === 'en' ? 'Online mode enabled' : 'ऑनलाइन मोड सक्षम');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('🌾 AgroSakha - Farmer Alert App Initialized');
  console.log('📍 Location: Harda, Madhya Pradesh');
  
  initAuth();
  initNavigation();
  
  // Welcome message
  setTimeout(() => {
    const welcomeMsg = state.currentLanguage === 'en' ? 
      'Welcome to AgroSakha! Your farming companion.' : 
      'AgroSakha में आपका स्वागत है! आपका खेती साथी।';
    console.log(welcomeMsg);
  }, 1000);
});