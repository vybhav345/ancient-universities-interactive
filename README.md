# Ancient Indian Universities Interactive Site

## 🏛️ Overview

This is an interactive educational site exploring the legacy of **Takshashila** and **Nalanda**, two of the oldest universities in the world. The site combines immersive storytelling, interactive visuals, quizzes, and audio tours to guide visitors through the intellectual history of Ancient India.

**Now featuring real-time visitor analytics powered by Google Analytics API integration.**

## 🚀 Features

- 🎥 **Hero Video Background** — Atmospheric video setting the historic tone
- 🖼️ **Nalanda Story Section** — Scroll-through story with images and captions
- 🔊 **Audio Tour** — Section-specific narrated and ambient audio
- 📚 **Interactive Quiz** — Test your knowledge of ancient universities
- 📊 **Real-time Analytics** — Live visitor counting using Google Analytics API
- 🕯️ **Authentic Styling** — Parchment textures, earth-tone palette, and traditional fonts
- 🔧 **Professional Backend** — Node.js server with Express and Google APIs integration

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **APIs:** Google Analytics Reporting API v1beta
- **Authentication:** Google Service Account
- **Styling:** Custom CSS with parchment textures and traditional fonts

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- Google Cloud Platform account
- Google Analytics 4 property
- Google Service Account with Analytics API access

## 🚀 Installation & Setup

### 1. Clone the Repository
git clone https://github.com/yourusername/ancient-universities-interactive.git
cd ancient-universities-interactive


### 2. Install Dependencies
npm install


### 3. Google Analytics Setup

1. **Create a Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Enable the **Google Analytics Reporting API**

2. **Create Service Account:**
   - Go to IAM & Admin → Service Accounts
   - Create a service account
   - Download the JSON key file and save it as `service-account-key.json`

3. **Add Service Account to Google Analytics:**
   - In Google Analytics, go to Admin → Property Access Management
   - Add your service account email with "Viewer" role

### 4. Environment Configuration

Create a `.env` file in the project root:
CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
Your private key here
-----END PRIVATE KEY-----"
GA4_PROPERTY_ID=123456789
PORT=3001


### 5. Add Content Assets

- Add Nalanda story images to `assets/images/` (named `0.png`, `1.png`, etc.)
- Add audio files to `assets/audio/` and reference them in `app.js`
- Customize captions, quiz content, and styles as needed

### 6. Start the Application
npm start


Visit `http://localhost:3001` to view your site with real-time analytics!


## 🔧 API Endpoints

- `GET /api/analytics-data` - Fetches real-time visitor and page view data
- `GET /api/health` - Server health check

## 🎯 Features in Detail

### Real-time Analytics Dashboard
- **Live Visitor Count:** Shows actual Google Analytics users
- **Page Views:** Real-time page view statistics
- **Auto-refresh:** Updates every 5 minutes
- **Error Handling:** Graceful fallbacks if API fails

### Interactive Elements
- **Audio Tour:** Immersive narration for each section
- **Knowledge Quiz:** Test understanding of ancient universities
- **Smooth Animations:** Professional transitions and effects
- **Responsive Design:** Works on all device sizes

## 🔒 Security Notes

**Important:** Never commit sensitive files to version control:
- `.env` (contains private keys)
- `service-account-key.json` (contains Google credentials)

These files are automatically ignored via `.gitignore`.

## 🧪 Testing

1. **Test Analytics API:**
curl http://localhost:3001/api/analytics-data


2. **Expected Response:**
{
"success": true,
"users": 14,
"pageViews": 81,
"lastUpdated": "2025-08-01T14:15:34.435Z"
}


## 🚀 Deployment

For production deployment:
1. Set up environment variables on your hosting platform
2. Upload service account credentials securely
3. Configure CORS if needed for different domains
4. Set up SSL/HTTPS for secure API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the analytics integration
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Ancient Indian universities Takshashila and Nalanda for their eternal wisdom
- Google Analytics API for real-time visitor tracking
- All contributors to this educational project

---

**Crafted to feel timeless and immersive—bringing the wisdom of ancient India to modern minds, now with professional analytics integration.**

---

## 📊 Analytics Dashboard

Your site now features:
- ✅ **Real Google Analytics data** instead of fake counters
- ✅ **Professional backend API** for data fetching
- ✅ **Live visitor tracking** that updates with actual traffic
- ✅ **Secure authentication** using Google Service Accounts

*Visit your site to see real-time visitor statistics powered by Google Analytics!*

