### **Objectives for Next Week**

#### **1\. Restructure Codebase**

* Refactor frontend and backend code to follow the Separation of Concerns principle.  
* Follow provided examples for guidance.

### ---

#### **2\. Find Tea Data**

* Search for tea-related APIs.  
* Explore alternative methods like Wikipedia scraping or similar.  
* Contact website owners to request permission for data usage.

### ---

#### **3\. Continue Development**

* Progress on UI and logic for both frontend and backend.  
* Ensure smooth integration and communication between both sides.

### ---

#### **4\. Research and Integrate OpenAI API**

* Research OpenAI API and set up basic integration for a tea chatbot.  
* Implement a functional proof of concept for user interaction.

### ---

#### **5\. Use Git Properly**

* Create a separate branch for each feature.  
* Submit Pull Requests (PRs) for review as discussed.

### 

### **Backend:**

#### **Dedicated configuration file:**

config.js:  
require('dotenv').config();

module.exports \= {  
  port: process.env.PORT || 5001,  
  mongoUri: process.env.MONGO\_URI,  
  jwtSecret: process.env.JWT\_SECRET  
};

Then use in server.js:  
	const { port, mongoUri } \= require('./config/config');  
mongoose.connect(mongoUri, { ... });  
app.listen(port, () \=\> console.log(\`Server running on port ${port}\`));

#### **Centralized Error Handling:**

	Add an error handling middleware:  
		app.use((err, req, res, next) \=\> {  
  console.error(err);  
  res.status(err.statusCode || 500).json({ message: err.message });  
});  
	  
	Then use ‘next(error) inside routes to pass error to the centralized error handler.

	

#### 	**Separate Mongoose initialization:**

	Consider using “Async / Await” instead of ‘then()’  
	Create a new file: config/db.js:  
		const mongoose \= require('mongoose');  
const { mongoUri } \= require('./config');

const connectDB \= async () \=\> {  
  try {  
    await mongoose.connect(mongoUri, {  
      useNewUrlParser: true,  
      useUnifiedTopology: true,  
    });  
    console.log('MongoDB Connected');  
  } catch (err) {  
    console.error('Error connecting to MongoDB:', err);  
    process.exit(1);  
  }  
};

module.exports \= connectDB;

	Then in “server.js”:  
		const connectDB \= require('./config/db');  
		  
		// Connect to database   
connectDB();

#### 	**Use Controller and Services:**

	Create service and controllers:  
	tesService.js:  
		const teasData \= require('../data/teas.json');

const getAllTeas \= () \=\> {  
  return teasData.teas;  
};

const getTeaById \= (id) \=\> {  
  return teasData.teas.find(t \=\> t.id \=== parseInt(id));  
};

const getTeasByType \= (type) \=\> {  
  return teasData.teas.filter(t \=\> t.type.toLowerCase() \=== type.toLowerCase());  
};

module.exports \= {  
  getAllTeas,  
  getTeaById,  
  getTeasByType,  
};

	teaController.js:  
		const teaService \= require('../services/teaService');

exports.getAllTeas \= (req, res, next) \=\> {  
  try {  
    const teas \= teaService.getAllTeas();  
    res.json({ products: teas });  
  } catch (error) {  
    next(error);  
  }  
};

	teaRoutes.js:  
		const express \= require('express');  
const router \= express.Router();  
const teaController \= require('../controllers/teaController');

router.get('/search', teaController.getAllTeas);  
router.get('/:id', teaController.getTeaById);  
router.get('/type/:type', teaController.getTeasByType);

module.exports \= router;

### **FrontEnd:**

#### Separation of concerns:

Folder Structure  
`src/`  
  `api/              <-- For all API calls (HTTP requests)`  
    `teaApi.js       <-- Tea-related API calls`  
  `hooks/            <-- For custom hooks that handle logic`  
    `useTeas.js      <-- Custom hook for fetching teas`  
  `components/       <-- Reusable UI components`  
    `TeaList.jsx     <-- Component rendering tea list`  
    `TeaProductCard.jsx`  
  `pages/            <-- Pages that use components and hooks`  
    `ProductPage.jsx`

**1\. Create API Layer: `src/api/teaApi.js`**

The API layer handles all HTTP calls. Each API endpoint is encapsulated in functions.

`import axios from 'axios';`

`const BASE_URL = 'http://localhost:5001/api/teas';`

`export const fetchAllTeas = async () => {`  
  ``const response = await axios.get(`${BASE_URL}/search`);``  
  `return response.data.products;`  
`};`

`export const fetchTeaById = async (id) => {`  
  ``const response = await axios.get(`${BASE_URL}/${id}`);``  
  `return response.data;`  
`};`

`export const fetchTeasByType = async (type) => {`  
  ``const response = await axios.get(`${BASE_URL}/type/${type}`);``  
  `return response.data.products;`  
`};`

---

**2\. Create a Custom Hook: `src/hooks/useTeas.js`**

Custom hooks encapsulate the logic of fetching data and managing states like `loading` and `error`.

`import { useState, useEffect } from 'react';`  
`import { fetchAllTeas } from '../api/teaApi';`

`export const useTeas = () => {`  
  `const [teas, setTeas] = useState([]);`  
  `const [loading, setLoading] = useState(true);`  
  `const [error, setError] = useState(null);`

  `useEffect(() => {`  
    `const loadTeas = async () => {`  
      `try {`  
        `const data = await fetchAllTeas();`  
        `setTeas(data);`  
      `} catch (err) {`  
        `console.error('Error fetching teas:', err);`  
        `setError('Failed to fetch teas.');`  
      `} finally {`  
        `setLoading(false);`  
      `}`  
    `};`

    `loadTeas();`  
  `}, []);`

  `return { teas, loading, error };`  
`};`

## 

### **Git Workflow**

#### 1\. Set Up the Development Branch

* Create a `development` branch from `main` and push it to GitHub.

---

#### 2\. Create Feature Branches

* For each new feature or task, create a branch from `development`.  
* Push the branch to GitHub.

---

#### 3\. Make Changes and Push

* Implement changes.    
* Stage, commit, and push your work to the feature branch.

---

#### 4\. Open a Pull Request (PR)

* Create a PR on GitHub to merge the feature branch into `development`.  
* Review, approve, and merge the PR.

---

#### 5\. Update the Development Branch

* Keep the `development` branch updated with the latest changes.

---

#### 6\. Merge to Main

* When features are ready, merge the `development` branch into `main` for deployment.

---

#### Summary

* **main** → Stable production-ready code.  
* **development** → Integration branch for ongoing features.  
* **feature/\<name\>** → Branch for individual tasks or features → PR → Merge into `development`.

