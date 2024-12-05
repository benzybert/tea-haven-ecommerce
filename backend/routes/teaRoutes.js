const express = require('express');
const axios = require('axios');
const router = express.Router();

const SPOONACULAR_API_KEY = '1f1136d164304edda5fe6a6d442f7ffb';

router.get('/search', async (req, res) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/food/products/search`, {
      params: {
        query: 'tea',
        apiKey: SPOONACULAR_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tea data' });
  }
});

module.exports = router;