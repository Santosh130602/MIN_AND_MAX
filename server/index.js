

const express = require('express');
const dotenv = require('dotenv');
const database = require('./config/database');
const authRoutes = require('./routers/auth');
const companyRoute = require('./routers/addcompanymedicen');
const userRoute = require('./routers/sellproduct');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

dotenv.config();

// Connect to the database
database.connect();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());







// const dialogflow = require('dialogflow');
// const { v4: uuidv4 } = require('uuid');


// const sessionId = uuidv4();


// const sessionClient = new dialogflow.SessionsClient({
//   keyFilename: 'service.json',
// });
// const sessionPath = sessionClient.sessionPath('chatbot-433607', sessionId);

// app.post('/api/dialogflow', async (req, res) => {
//   const { message } = req.body;

//   const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         text: message,
//         languageCode: 'en-US',
//       },
//     },
//   };

//   try {
//     const responses = await sessionClient.detectIntent(request);
//     const result = responses[0].queryResult.fulfillmentText;
//     res.json({ reply: result });
//   } catch (error) {
//     console.error('Dialogflow error:', error);
//     res.status(500).send('Error communicating with Dialogflow');
//   }
// });

  

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/company', companyRoute);
app.use('/api/user', userRoute);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));












