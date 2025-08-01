const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve your HTML files from current directory

// Google Analytics Authentication
const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

// Analytics Data API endpoint
app.get('/api/analytics-data', async (req, res) => {
    try {
        console.log('📊 Fetching Google Analytics data...');
        
        const analyticsdata = google.analyticsdata('v1beta');
        const authClient = await auth.getClient();
        
        const response = await analyticsdata.properties.runReport({
            auth: authClient,
            property: `properties/${process.env.GA4_PROPERTY_ID}`,
            requestBody: {
                dateRanges: [{ 
                    startDate: '30daysAgo', 
                    endDate: 'today' 
                }],
                metrics: [
                    { name: 'activeUsers' },
                    { name: 'screenPageViews' }
                ],
            },
        });

        // Fixed lines - compatible with older Node.js versions
        const rows = response.data.rows || [];
        const users = (rows[0] && rows[0].metricValues && rows[0].metricValues[0] && rows[0].metricValues[0].value) || '0';
        const pageViews = (rows[0] && rows[0].metricValues && rows[0].metricValues[1] && rows[0].metricValues[1].value) || '0';

        console.log(`✅ Analytics data: ${users} users, ${pageViews} page views`);

        res.json({
            success: true,
            users: parseInt(users),
            pageViews: parseInt(pageViews),
            lastUpdated: new Date().toISOString()
        });

    } catch (error) {
        console.error('❌ Error:', error.message);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch analytics data',
            message: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📊 Visit your website at http://localhost:${PORT}`);
    console.log(`🔧 Test analytics API at http://localhost:${PORT}/api/analytics-data`);
});

